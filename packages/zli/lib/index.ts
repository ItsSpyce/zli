const parser = require('yargs-parser');
import z from 'zod';
import assert from 'assert';
import {
  ZliFactory,
  ShorthandDefinitions,
  Command,
  EmptyOptions,
  CommandInvokeFunction,
  OptionsHelp,
  OptionsShape,
  Options,
  WithHelp,
  ArgumentsShape,
  Arguments,
  ParsedArguments,
} from './types';
import type { WriteStream } from 'tty';
export * from './types';

const TERMINAL_WIDTH = 80;

class _ZliFactory<TGlobalOptions extends OptionsShape>
  implements ZliFactory<TGlobalOptions>
{
  private readonly _commands = new Map<
    string,
    _Command<any, any, TGlobalOptions>
  >();
  private _showHelpOnNotFound = false;
  private _showHelpOnError = false;
  private _globalOptions?: TGlobalOptions;
  private _globalShorthands?: ShorthandDefinitions<TGlobalOptions>;
  private _beforeInvoke?: (
    opts: Options<TGlobalOptions>
  ) => void | Promise<void>;

  constructor(
    private readonly _formattedArgs: ParsedArguments,
    private readonly _stdout: WriteStream
  ) {}

  command<
    TArgs extends ArgumentsShape = EmptyOptions,
    TOptions extends OptionsShape = EmptyOptions
  >(
    name: string,
    cmd: (
      cmd: Command<TArgs, TOptions, TGlobalOptions>
    ) => Command<TArgs, TOptions, TGlobalOptions>
  ): _ZliFactory<TGlobalOptions> {
    const command = new _Command<TArgs, TOptions, TGlobalOptions>(name, this);
    const setupCommand = cmd(command) as _Command<
      TArgs,
      TOptions,
      TGlobalOptions
    >;
    this._commands.set(name.toLowerCase(), setupCommand);
    return this;
  }

  options<TOptions extends OptionsShape>(
    opts: TOptions
  ): _ZliFactory<TOptions> {
    //@ts-ignore
    this._globalOptions = opts;
    //@ts-ignore Because TS is sometimes stupid. They're literally the same extends rule :)
    return this as _ZliFactory<TOptions>;
  }

  help(): _ZliFactory<WithHelp<TGlobalOptions>> {
    this._globalOptions ??= Object.create(null);
    this._globalShorthands ??= Object.create(null);
    Object.defineProperty(this._globalOptions, 'help', {
      get() {
        return z.boolean().optional();
      },
    });
    Object.defineProperty(this._globalShorthands, 'help', {
      get() {
        return '-h';
      },
    });
    return this as _ZliFactory<WithHelp<TGlobalOptions>>;
  }

  shorthands(
    shorthands: ShorthandDefinitions<TGlobalOptions>
  ): _ZliFactory<TGlobalOptions> {
    this._globalShorthands = shorthands;
    return this;
  }

  showHelpOnNotFound(): _ZliFactory<TGlobalOptions> {
    this._showHelpOnNotFound = true;
    return this;
  }

  showHelpOnError(): _ZliFactory<TGlobalOptions> {
    this._showHelpOnError = true;
    return this;
  }

  displayHelp() {
    const help = buildHelpDisplay(
      '',
      this._commands,
      undefined,
      undefined,
      this._globalOptions,
      this._globalShorthands
    );
    this.write(help);
  }

  write(output: string | string[]) {
    if (Array.isArray(output)) {
      this._stdout.write(output.join('\n'));
    } else {
      this._stdout.write(output);
    }
  }

  beforeInvoke(
    fn: (opts: Options<TGlobalOptions>) => void | Promise<void>
  ): _ZliFactory<TGlobalOptions> {
    this._beforeInvoke = fn;
    return this;
  }

  async exec(): Promise<void> {
    if (
      this._formattedArgs?.['help'] === true &&
      this._formattedArgs._.length === 0
    ) {
      return this.displayHelp();
    }
    const expandedArgs = expandShorthandOptions(
      this._formattedArgs,
      this._globalShorthands
    );
    if (typeof expandedArgs === 'undefined') {
      return;
    }
    const globalOptions = parseOptions(expandedArgs, this._globalOptions);
    if (typeof this._beforeInvoke !== 'undefined') {
      await this._beforeInvoke(globalOptions);
    }
    const cmd = this._commands.get(this._formattedArgs._[0]);
    if (typeof cmd !== 'undefined') {
      try {
        const didExec = await cmd.exec(
          {
            ...this._formattedArgs,
            ...expandedArgs,
            _: this._formattedArgs._.slice(1),
          },
          globalOptions
        );
        if (!didExec) {
          this.write(`Command not found: ${this._formattedArgs._.join(' ')}\n`);
          if (this._showHelpOnNotFound) {
            this.displayHelp();
          }
        }
      } catch (err: any) {
        if (err.message === REQUIRED_ARGUMENT_FIRST_ERROR) {
          throw err;
        }
        this.write(`[ERROR] ${err.message}\n`);
        if (this._showHelpOnError) {
          this.displayHelp();
        }
      }
    } else {
      this.write(`Command not found: ${this._formattedArgs._[0]}`);
      if (this._showHelpOnNotFound) {
        this.displayHelp();
      }
    }
  }
}

class _Command<
  TArgs extends ArgumentsShape = EmptyOptions,
  TOptions extends OptionsShape = EmptyOptions,
  TGlobalOptions extends OptionsShape = EmptyOptions
> implements Command<TArgs, TOptions, TGlobalOptions>
{
  private readonly _commands = new Map<
    string,
    _Command<any, any, TGlobalOptions>
  >();

  private _help?: OptionsHelp<TOptions>;
  private _description?: string;
  private _argsSchema?: TArgs;
  private _optsSchema?: TOptions;
  private _shorthands?: ShorthandDefinitions<TOptions>;
  private _invoke: CommandInvokeFunction<TArgs, TOptions, TGlobalOptions> =
    () => {};

  constructor(
    private readonly _name: string,
    private readonly _factory: _ZliFactory<TGlobalOptions>
  ) {}

  private _getSubcommandWithNewArgs(
    args?: ParsedArguments
  ): [_Command<any, any, TGlobalOptions> | undefined, ParsedArguments] {
    if (typeof args === 'undefined') {
      return [undefined, args!];
    }
    const [arg] = args._;
    const slicedArgs = { ...args, _: args._.slice(1) };
    if (typeof arg !== 'undefined' && this._commands.has(arg)) {
      return [this._commands.get(arg), slicedArgs];
    }
    return [undefined, slicedArgs];
  }

  getHelp(args?: ParsedArguments): OptionsHelp<TOptions> | undefined {
    const [subcommand, newArgs] = this._getSubcommandWithNewArgs(args);
    return subcommand?.getHelp(newArgs) ?? this._help;
  }

  getDescription(args?: ParsedArguments): string | undefined {
    const [subcommand, newArgs] = this._getSubcommandWithNewArgs(args);
    return subcommand?.getDescription(newArgs) ?? this._description;
  }

  getArgsSchema(args?: ParsedArguments): TArgs | undefined {
    const [subcommand, newArgs] = this._getSubcommandWithNewArgs(args);
    return subcommand?.getArgsSchema(newArgs) ?? this._argsSchema;
  }

  getOptsSchema(args?: ParsedArguments): TOptions | undefined {
    const [subcommand, newArgs] = this._getSubcommandWithNewArgs(args);
    return subcommand?.getOptsSchema(newArgs) ?? this._optsSchema;
  }

  getShorthands(
    args?: ParsedArguments
  ): ShorthandDefinitions<TOptions> | undefined {
    const [subcommand, newArgs] = this._getSubcommandWithNewArgs(args);
    return subcommand?.getShorthands(newArgs) ?? this._shorthands;
  }

  command<
    TArgs2 extends ArgumentsShape = EmptyOptions,
    TOptions2 extends OptionsShape = EmptyOptions
  >(
    name: string,
    cmd: (
      cmd: Command<TArgs2, TOptions2, TGlobalOptions>
    ) => Command<TArgs2, TOptions2, TGlobalOptions>
  ): Command<TArgs, TOptions, TGlobalOptions> {
    const command = new _Command<TArgs2, TOptions2, TGlobalOptions>(
      name,
      this._factory
    );
    const setupCommand = cmd(command) as _Command<
      TArgs,
      TOptions,
      TGlobalOptions
    >;
    this._commands.set(name.toLowerCase(), setupCommand);
    return this;
  }

  help(help: OptionsHelp<TOptions>): Command<TArgs, TOptions, TGlobalOptions> {
    this._help = help;
    return this;
  }

  description(
    description: string | undefined
  ): Command<TArgs, TOptions, TGlobalOptions> {
    this._description = description;
    return this;
  }

  arguments<TArgs extends ArgumentsShape>(
    args: TArgs
  ): Command<TArgs, TOptions, TGlobalOptions> {
    // @ts-ignore due to it returning a different type, it gets a bit touchy
    this._argsSchema = args;
    return this as Command<TArgs, TOptions, TGlobalOptions>;
  }

  options<TOptions extends OptionsShape>(
    opts: TOptions
  ): Command<TArgs, TOptions, TGlobalOptions> {
    // @ts-ignore due to it returning a different type, it gets a bit touchy
    this._optsSchema = opts;
    return this as _Command<TArgs, TOptions, TGlobalOptions>;
  }

  shorthands(
    shorthands: ShorthandDefinitions<TOptions>
  ): Command<TArgs, TOptions, TGlobalOptions> {
    this._shorthands = shorthands;
    return this;
  }

  invoke(
    fn: CommandInvokeFunction<TArgs, TOptions, TGlobalOptions>
  ): Command<TArgs, TOptions, TGlobalOptions> {
    this._invoke = fn;
    return this;
  }

  async exec(
    args: ParsedArguments,
    globalOptions: Options<TGlobalOptions>
  ): Promise<boolean> {
    assertNoRequiredArgsAfterOptional(this._argsSchema);
    const [subcommand, newArgs] = this._getSubcommandWithNewArgs(args);
    if (subcommand) {
      return await subcommand.exec(newArgs, globalOptions);
    }
    if (newArgs.help) {
      const help = buildHelpDisplay(
        this._name,
        this._commands,
        this._description,
        this._argsSchema,
        this._optsSchema,
        this._shorthands
      );
      this._factory.write(help);
      return true;
    }
    if (!this._invoke) {
      return false;
    }
    const parsedArgs = parseArguments(args, this._argsSchema);
    const expandedArgs = expandShorthandOptions(args, this._shorthands);
    const parsedOptions = parseOptions(expandedArgs, this._optsSchema);
    const invokeArgs = { ...globalOptions, ...parsedArgs, ...parsedOptions };
    await this._invoke(invokeArgs);
    return true;
  }
}

export function zli(): ZliFactory;
export function zli(argv?: string[]): ZliFactory {
  if (typeof argv === 'undefined') {
    argv = process.argv.slice(2);
  }
  const parsedArgs = camelCaseArgs(parser(argv));
  return new _ZliFactory(parsedArgs, process.stdout);
}

function dashCase(str: string) {
  let result = '';
  for (const c of str) {
    if (c.toLowerCase() === c) {
      result += c;
    } else {
      result += `-${c.toLowerCase()}`;
    }
  }
  return result;
}

function camelCaseArgs(args: ParsedArguments): ParsedArguments {
  return mapObjectKeys(args, (key) => {
    if (['--', '_'].includes(key)) {
      return key;
    }
    return parser.camelCase(key);
  });
}

function expandShorthandOptions<TOptions extends OptionsShape>(
  args: ParsedArguments,
  shorthands?: Partial<ShorthandDefinitions<TOptions>>
): Options<TOptions> {
  if (typeof shorthands === 'undefined') {
    return args as Options<TOptions>;
  }
  for (const [longhand, shorthand] of Object.entries(shorthands)) {
    args[longhand] = args[shorthand!.substring(1)];
    delete args[shorthand!.substring(1)];
  }
  return args as Options<TOptions>;
}

function parseArguments<TArgs extends ArgumentsShape>(
  args: ParsedArguments,
  schema?: TArgs
): Arguments<TArgs> {
  if (typeof schema === 'undefined') {
    return args as Arguments<TArgs>;
  }
  const parsedArgs = Object.create(null);
  const argumentsIterator = args._[Symbol.iterator]();
  for (const [key, shape] of Object.entries(schema)) {
    // this one is a bit rough because we have to turn an ordered array into an ordered argument list
    parsedArgs[key] = shape.parse(argumentsIterator.next().value);
    if (
      shape instanceof z.ZodDefault &&
      typeof parsedArgs[key] === 'undefined'
    ) {
      Object.defineProperty(parsedArgs, key, {
        get: shape._def.defaultValue,
      });
    }
  }

  return parsedArgs;
}

function parseOptions<TOptions extends OptionsShape>(
  options: Options<TOptions>, // this is Options because it expects shorthands to be processed
  schema?: TOptions
): Options<TOptions> {
  if (typeof schema === 'undefined') {
    return options as Options<TOptions>;
  }
  const parsedOptions = Object.create(null);
  for (const [key, shape] of Object.entries(schema)) {
    parsedOptions[key] = shape.parse(options[key]);
    if (shape instanceof z.ZodArray && !Array.isArray(parsedOptions[key])) {
      // building array
      const value = parsedOptions[key];
      const parts = String(value).split(',').map(coerceString);
      parsedOptions[key] = parts;
    }
  }
  return parsedOptions;
}

const REQUIRED_ARGUMENT_FIRST_ERROR =
  'Cannot have required arguments after optional';
function assertNoRequiredArgsAfterOptional(args?: ArgumentsShape) {
  if (typeof args === 'undefined') {
    return;
  }
  let isReadingRequired = true;
  for (const [name, shape] of Object.entries(args)) {
    if (
      (shape.isOptional() || shape instanceof z.ZodDefault) &&
      isReadingRequired
    ) {
      isReadingRequired = false;
    } else if (!isReadingRequired) {
      throw new Error(REQUIRED_ARGUMENT_FIRST_ERROR);
    }
  }
}

function buildHelpDisplay(
  name: string,
  commands?: Map<string, _Command<any, any, any>>,
  description?: string,
  args?: ArgumentsShape,
  options?: OptionsShape,
  shorthands?: ShorthandDefinitions<any>
) {
  const result = [];
  if (typeof args !== 'undefined') {
    result.push('Usage:', '');
    const requiredArgs = [];
    const optionalArgs = [];
    for (const [name, shape] of Object.entries(args)) {
      if (shape.isOptional()) {
        if (shape instanceof z.ZodDefault) {
          optionalArgs.push(
            `${name}:${shape._type}:${shape._def.defaultValue()}`
          );
        } else {
          optionalArgs.push(`${name}:${shape._type}`);
        }
      } else if (shape instanceof z.ZodDefault) {
        optionalArgs.push(
          `${name}:${shape._type}:${shape._def.defaultValue()}`
        );
      } else {
        requiredArgs.push(`${name}:${getTypename(shape)}`);
      }
    }
    const commandUsage =
      `${name} ` +
      (requiredArgs.length > 0
        ? requiredArgs.map((a) => `<${a}>`).join(' ')
        : '') +
      (optionalArgs.length > 0
        ? optionalArgs.map((a) => `[${a}]`).join(' ')
        : '');
    result.push(commandUsage);
  } else {
    result.push(name);
  }

  if (typeof description !== 'undefined') {
    result.push('\nDescription:', `\t${description}`, '');
  }

  if (typeof options !== 'undefined') {
    result.push('Options:');
    for (const [name, shape] of Object.entries(options)) {
      const dashName = dashCase(name);
      const nameToDisplay =
        typeof shorthands?.[name] !== 'undefined'
          ? `--${dashName}|${shorthands[name]}`
          : `--${dashName}`;
      const typename = getTypename(shape);
      const spacesToAdd =
        TERMINAL_WIDTH - nameToDisplay.length - typename.length;
      const padding = Array(spacesToAdd)
        .map(() => '')
        .join(' ');
      result.push(`${nameToDisplay}${padding}${typename}`);
      if (typeof shape.description !== 'undefined') {
        result.push(`\t${shape.description}`);
      }
    }
    result.push('');
  }
  if (typeof commands !== 'undefined') {
    for (const [name, command] of commands.entries()) {
      const description = command.getDescription();
      result.push(name, `\t${description}`);
    }
  }

  result.push('\n');
  return result;
}

function getTypename(
  shape:
    | z.ZodString
    | z.ZodBoolean
    | z.ZodNumber
    | z.ZodOptional<z.ZodString | z.ZodBoolean | z.ZodNumber>
    | z.ZodDefault<z.ZodString | z.ZodBoolean | z.ZodNumber>
): 'string' | 'number' | 'boolean' | 'undefined' {
  if (shape instanceof z.ZodOptional) {
    return getTypename(shape.unwrap());
  }
  if (shape instanceof z.ZodDefault) {
    return getTypename(shape.removeDefault());
  }
  switch (shape._def.typeName) {
    case z.ZodString.name:
      return 'string';
    case z.ZodBoolean.name:
      return 'boolean';
    case z.ZodNumber.name:
      return 'number';
    default:
      return 'undefined';
  }
}

function mapObjectKeys<T extends Record<string, any>>(
  obj: T,
  mapFn: (key: string) => string
): T {
  assert(!Array.isArray(obj), 'Cannot use an array in mapObjectKeys');
  return mapObject(obj, (k, v) => [mapFn(k), v]);
}

function mapObject<T extends Record<string, any>>(
  obj: T,
  mapFn: (key: string, value: any) => [key: string, value: any]
) {
  assert(!Array.isArray(obj), 'Cannot use an array in mapObject');
  return Object.keys(obj).reduce((acc, key) => {
    const [newKey, newValue] = mapFn(key, obj[key]);
    return {
      ...acc,
      [newKey]: newValue,
    };
  }, Object.create(null));
}

function coerceString(s: string) {
  const trimmed = s?.trim();
  if (!trimmed || String(trimmed).length === 0) {
    return undefined;
  }
  if (!isNaN(parseFloat(trimmed))) {
    return parseFloat(trimmed);
  }
  if (!isNaN(parseInt(trimmed))) {
    return parseInt(trimmed);
  }
  const lowered = trimmed.toLowerCase();
  if (['true', 'yes', 'y', '1', 'accept'].includes(lowered)) {
    return true;
  }
  if (['false', 'no', 'n', '0', 'deny'].includes(lowered)) {
    return false;
  }
  if (lowered === 'null') {
    return null;
  }
  return trimmed;
}
