const parser = require('yargs-parser');
import { z } from 'zod';
import { camelCase, paramCase } from 'change-case';
import type { WriteStream } from 'tty';

const TERMINAL_WIDTH = 80;

/// Types
/**
 * Represents an empty options shape. This is the default.
 */
export type EmptyOptions = {
  //
};

type PermittedZodTypes =
  | z.ZodString
  | z.ZodEffects<z.ZodString, string>
  | z.ZodNumber
  | z.ZodEffects<z.ZodNumber, number>
  | z.ZodBoolean
  | z.ZodEffects<z.ZodBoolean, boolean>
  | z.ZodEnum<[string, ...string[]]>
  | z.ZodOptional<PermittedZodTypes>
  | z.ZodDefault<PermittedZodTypes>
  | z.ZodArray<PermittedZodTypes>;

/**
 * Forwards `write` from node:tty:WriteStream
 */
export interface ZliWriteStream {
  write(...args: Parameters<WriteStream['write']>): any | Promise<any>;
}

/**
 * The command handler interface for a command
 */
export interface CommandInvokeFunction<
  TArgs extends ArgumentsShape,
  TOptions extends OptionsShape,
  TGlobalOptions extends OptionsShape
> {
  (
    /**
     * A collection of arguments in the order of TGlobalOptions -> TArgs -> TOptions
     */
    args: ParsedArguments & Arguments<TGlobalOptions & TArgs & TOptions>,
    /**
     * A secondary reference to the ZliWriteStream used
     */
    stdout: ZliWriteStream
  ): void | Promise<void>;
}

/**
 * Represents the base parsed args from yargs-parser
 *
 * @description
 * All named options are returned as properties in the return object. Any non-option arguments
 * are appended to `_` as a string, number, or boolean.
 */
export type ParsedArguments = {
  [key: string]: string | boolean | number | Array<string | boolean | number>;
} & {
  _: Array<string>;
};

/**
 * Represents an expected arguments shape for a command
 */
export type ArgumentsShape = {
  [name: string]: PermittedZodTypes;
};

/**
 * Represents an options shape for a command
 */
export type OptionsShape = {
  [name: string]: PermittedZodTypes;
};

export type WithHelp<T extends OptionsShape> = T & {
  help: z.ZodOptional<z.ZodBoolean>;
};

export type Arguments<TShape extends ArgumentsShape> = {
  [key in keyof TShape]: z.TypeOf<TShape[key]>;
};

export type Options<TShape extends OptionsShape> = {
  [key in keyof TShape]: z.TypeOf<TShape[key]>;
};

export type OptionsHelp<T extends OptionsShape> = {
  [key in keyof T]: string;
};

export type ShorthandDefinitions<T extends OptionsShape> = {
  [key in keyof T]?: `-${string}`;
};

type InvokeMeta = {
  showHelpOnError: boolean;
  showHelpOnNotFound: boolean;
  ignoreUnknownOptions: boolean;
  header?: string;
  footer?: string;
};

/**
 * @desc The base factory around creating CLIs
 */
export interface Zli<TGlobalOptions extends OptionsShape = EmptyOptions> {
  command<
    TArgs extends ArgumentsShape = EmptyOptions,
    TOptions extends OptionsShape = EmptyOptions
  >(
    name: string,
    cmd: (
      cmd: Command<TArgs, TOptions, TGlobalOptions>
    ) => Command<TArgs, TOptions, TGlobalOptions>
  ): Zli<TGlobalOptions>;
  options<TOptions extends OptionsShape>(opts: TOptions): Zli<TOptions>;
  beforeInvoke(
    fn: (opts: Options<TGlobalOptions>) => void | Promise<void>
  ): Zli<TGlobalOptions>;
  afterInvoke(
    fn: (opts: Options<TGlobalOptions>) => void | Promise<void>
  ): Zli<TGlobalOptions>;
  exec(...args: string[]): Promise<void>;
  help(): Zli<WithHelp<TGlobalOptions>>;
  shorthands(
    shorthands: ShorthandDefinitions<TGlobalOptions>
  ): Zli<TGlobalOptions>;
  version(version: string): Zli<TGlobalOptions>;
  showHelpOnNotFound(): Zli<TGlobalOptions>;
  showHelpOnError(): Zli<TGlobalOptions>;
}

export interface Command<
  TArgs extends ArgumentsShape = EmptyOptions,
  TOptions extends OptionsShape = EmptyOptions,
  TGlobalOptions extends OptionsShape = EmptyOptions
> {
  command<
    TArgs2 extends ArgumentsShape = EmptyOptions,
    TOptions2 extends OptionsShape = EmptyOptions
  >(
    name: string,
    cmd: (
      cmd: Command<TArgs2, TOptions2, TGlobalOptions>
    ) => Command<TArgs2, TOptions2, TGlobalOptions>
  ): Command<TArgs, TOptions, TGlobalOptions>;
  help(help: OptionsHelp<TOptions>): Command<TArgs, TOptions, TGlobalOptions>;
  description(description: string): Command<TArgs, TOptions, TGlobalOptions>;
  arguments<TArgs extends ArgumentsShape = EmptyOptions>(
    args: TArgs
  ): Command<TArgs, TOptions, TGlobalOptions>;
  options<TOptions extends OptionsShape>(
    opts: TOptions
  ): Command<TArgs, TOptions, TGlobalOptions>;
  shorthands(
    shorthands: Partial<ShorthandDefinitions<TOptions>>
  ): Command<TArgs, TOptions, TGlobalOptions>;
  invoke(
    fn: CommandInvokeFunction<TArgs, TOptions, TGlobalOptions>
  ): Command<TArgs, TOptions, TGlobalOptions>;
}

/// Implementations

class _Zli<TGlobalOptions extends OptionsShape> implements Zli<TGlobalOptions> {
  private readonly _commands = new Map<
    string,
    _Command<any, any, TGlobalOptions>
  >();
  private readonly _meta: InvokeMeta = {
    showHelpOnError: false,
    showHelpOnNotFound: false,
    ignoreUnknownOptions: false,
  };
  private _globalOptions?: TGlobalOptions;
  private _globalShorthands?: ShorthandDefinitions<TGlobalOptions>;
  private _version?: string;
  private _beforeInvoke?: (
    opts: Options<TGlobalOptions>
  ) => void | Promise<void>;
  private _afterInvoke?: (
    opts: Options<TGlobalOptions>
  ) => void | Promise<void>;

  constructor(
    private _formattedArgs: ParsedArguments,
    private readonly _stdout: ZliWriteStream
  ) {}

  getStdout() {
    return this._stdout;
  }

  command<
    TArgs2 extends ArgumentsShape = EmptyOptions,
    TOptions2 extends OptionsShape = EmptyOptions
  >(
    name: string,
    cmd: (
      cmd: Command<TArgs2, TOptions2, TGlobalOptions>
    ) => Command<TArgs2, TOptions2, TGlobalOptions>
  ): _Zli<TGlobalOptions> {
    const command = new _Command<TArgs2, TOptions2, TGlobalOptions>(name, this);
    const setupCommand = cmd(command) as _Command<
      TArgs2,
      TOptions2,
      TGlobalOptions
    >;
    this._commands.set(name.toLowerCase(), setupCommand);
    return this;
  }

  options<TOptions extends OptionsShape>(
    opts: TOptions
  ): _Zli<TGlobalOptions & TOptions> {
    // @ts-ignore
    this._globalOptions = { ...(this._globalOptions ?? {}), ...opts };
    return this as _Zli<TGlobalOptions & TOptions>;
  }

  help(): _Zli<WithHelp<TGlobalOptions>> {
    return this.options({
      help: z.boolean().optional(),
    }).shorthands({ help: '-h' }) as _Zli<WithHelp<TGlobalOptions>>;
  }

  shorthands(
    shorthands: ShorthandDefinitions<TGlobalOptions>
  ): _Zli<TGlobalOptions> {
    this._globalShorthands = {
      ...(this._globalShorthands ?? {}),
      ...shorthands,
    };
    return this;
  }

  showHelpOnNotFound(): _Zli<TGlobalOptions> {
    this._meta.showHelpOnNotFound = true;
    return this;
  }

  showHelpOnError(): _Zli<TGlobalOptions> {
    this._meta.showHelpOnError = true;
    return this;
  }

  version(version: string): _Zli<TGlobalOptions> {
    this._version = version;
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
    this._stdout.write('\n');
  }

  beforeInvoke(
    fn: (opts: Options<TGlobalOptions>) => void | Promise<void>
  ): _Zli<TGlobalOptions> {
    this._beforeInvoke = fn;
    return this;
  }

  afterInvoke(
    fn: (opts: Options<TGlobalOptions>) => void | Promise<void>
  ): _Zli<TGlobalOptions> {
    this._afterInvoke = fn;
    return this;
  }

  async exec(...args: string[]): Promise<void> {
    if (args.length > 0) {
      const parsedArgs = camelCaseArgs(parser(args));
      if (typeof this._formattedArgs === 'undefined') {
        this._formattedArgs = parsedArgs;
      } else {
        this._formattedArgs = { ...this._formattedArgs, ...parsedArgs };
      }
    }

    const [runArg, ...restArgs] = this._formattedArgs._;

    const expandedArgs = expandShorthandOptions(
      this._formattedArgs,
      this._globalShorthands
    );
    if (
      expandedArgs['help'] === true &&
      typeof runArg === 'undefined' &&
      typeof this._globalOptions?.help !== 'undefined'
    ) {
      return this.displayHelp();
    }
    const globalOptions = parseOptions(
      typeof runArg !== 'undefined',
      expandedArgs,
      this._globalOptions
    );
    if (typeof this._beforeInvoke !== 'undefined') {
      await this._beforeInvoke(globalOptions);
    }
    const cmd = this._commands.get(runArg);
    if (typeof cmd !== 'undefined') {
      if (expandedArgs['help'] && this._globalOptions?.help) {
        return cmd.displayHelp();
      }
      const args = {
        ...this._formattedArgs,
        ...expandedArgs,
        _: restArgs,
      };
      try {
        await cmd.exec(this._meta, args, globalOptions);
      } catch (err) {
        if (err instanceof ZliError) {
          this.write(err.message);
        } else if (err instanceof z.ZodError) {
          for (const zerr of err.errors) {
            const [_, argName] = zerr.path;
            this.write(`${zerr.message} ${argName ? `(${argName})` : ''}`);
          }
        } else if (err instanceof Error) {
          this.write(`[ERROR] ${err.message}`);
        }
      }
    } else if (typeof runArg !== 'undefined') {
      this.write(`Command not found: ${runArg}`);
      if (this._meta.showHelpOnNotFound) {
        this.displayHelp();
      }
    } else if (typeof this._version !== 'undefined') {
      this._stdout.write(this._version);
    } else if (this._globalOptions?.help) {
      this.displayHelp();
    }
    if (typeof this._afterInvoke !== 'undefined') {
      this._afterInvoke(globalOptions);
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
    private readonly _factory: _Zli<TGlobalOptions>
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
      TArgs2,
      TOptions2,
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
    shorthands: Partial<ShorthandDefinitions<TOptions>>
  ): Command<TArgs, TOptions, TGlobalOptions> {
    this._shorthands = { ...(this._shorthands ?? {}), ...shorthands };
    return this;
  }

  invoke(
    fn: CommandInvokeFunction<TArgs, TOptions, TGlobalOptions>
  ): Command<TArgs, TOptions, TGlobalOptions> {
    this._invoke = fn;
    return this;
  }

  displayHelp() {
    const help = buildHelpDisplay(
      this._name,
      this._commands,
      this._description,
      this._argsSchema,
      this._optsSchema,
      this._shorthands
    );
    this._factory.write(help);
  }

  async exec(
    meta: InvokeMeta,
    args: ParsedArguments,
    globalOptions: Options<TGlobalOptions>
  ): Promise<boolean> {
    assertNoRequiredArgsAfterOptional(this._argsSchema);
    const [subcommand, newArgs] = this._getSubcommandWithNewArgs(args);
    if (subcommand) {
      return await subcommand.exec(meta, newArgs, globalOptions);
    }
    // args should have 'help' from the factory class
    if (args.help) {
      this.displayHelp();
      return true;
    }
    if (!this._invoke) {
      return false;
    }
    const expandedArgs = expandShorthandOptions(args, this._shorthands);
    const parsedArgs = parseArguments(args, this._argsSchema);
    const parsedOptions = parseOptions(
      meta.ignoreUnknownOptions,
      expandedArgs,
      this._optsSchema
    );
    const invokeArgs = {
      ...args,
      ...globalOptions,
      ...parsedArgs,
      ...parsedOptions,
    };
    try {
      await this._invoke(invokeArgs, this._factory.getStdout());
    } catch (err: any) {
      if (
        err instanceof NoRequiredArgumentsAfterOptionalsError ||
        err instanceof UnknownOptionError
      ) {
        throw err;
      }
      if (err instanceof z.ZodError) {
        for (const zerr of err.errors) {
          this._factory.write(
            `${zerr.message} ${zerr.path[0] ? `(${zerr.path[0]})` : ''}`
          );
        }
      } else {
        this._factory.write(`[ERROR] ${err.message}`);
      }

      if (meta.showHelpOnError) {
        this.displayHelp();
      }
      return false;
    }
    return true;
  }
}

/// Errors

class ZliError extends Error {}

export class NoRequiredArgumentsAfterOptionalsError extends ZliError {
  constructor() {
    super('Cannot have required arguments after optional');
  }
}

export class UnknownOptionError extends ZliError {
  constructor(option: string) {
    super(`Unknown option: --${paramCase(option)}`);
  }
}

export class IncorrectUsageError extends ZliError {}

export type ZliOptions = {
  argv?: string[];
  stdout?: ZliWriteStream;
};

export function zli(opts?: ZliOptions): Zli {
  opts ??= {};
  if (typeof opts.argv === 'undefined') {
    opts.argv = [];
  }
  if (typeof opts.stdout === 'undefined') {
    opts.stdout = process.stdout;
  }
  const parsedArgs = camelCaseArgs(parser(opts.argv));
  return new _Zli(parsedArgs, opts.stdout!);
}

/// Helper functions

function camelCaseArgs(args: ParsedArguments): ParsedArguments {
  return Object.keys(args).reduce(
    (acc, key) => ({
      ...acc,
      [['--', '_'].includes(key) ? key : camelCase(key)]: args[key],
    }),
    Object.create(null)
  );
}

function expandShorthandOptions<TOptions extends OptionsShape>(
  args: ParsedArguments,
  shorthands?: Partial<ShorthandDefinitions<TOptions>>
): Options<TOptions> {
  if (typeof shorthands === 'undefined') {
    return args as Options<TOptions>;
  }
  for (const [longhand, shorthand] of Object.entries(shorthands)) {
    const key = shorthand!.substring(1);
    if (typeof args[key] !== 'undefined') {
      args[longhand] = args[shorthand!.substring(1)];
      delete args[shorthand!.substring(1)];
    }
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
  const schemaDefinitions = Object.entries(schema);
  const requiredArgsCount = schemaDefinitions.filter(
    ([_, shape]) =>
      !shape.isOptional() ||
      (shape instanceof z.ZodDefault &&
        typeof shape._def.defaultValue() !== 'undefined')
  ).length;
  if (args._.length < requiredArgsCount) {
    throw new IncorrectUsageError(
      `Received ${args._.length}, expected ${requiredArgsCount}`
    );
  }
  for (let i = 0; i < args._.length; i++) {
    const value = args._[i];
    const schema = schemaDefinitions[i];
    if (typeof schema === 'undefined') {
      // we don't try to parse and have no more left, just return what we have
      return parsedArgs;
    }
    const [key, shape] = schemaDefinitions[i];
    try {
      parsedArgs[key] = shape.parse(value);
    } catch (err) {
      if (err instanceof z.ZodError) {
        for (const zerr of err.errors) {
          zerr.path.push(key);
        }
      }
      throw err;
    }
  }

  return parsedArgs;
}

function parseOptions<TOptions extends OptionsShape>(
  ignoreUnknownOptions: boolean,
  options: Options<TOptions>, // this is Options because it expects shorthands to be processed
  schema?: TOptions
): Options<TOptions> {
  if (typeof schema === 'undefined') {
    return options;
  }
  const parsedOptions = Object.create(null);
  for (const [key, value] of Object.entries(options)) {
    // ignore yargs keys
    if (['_', '--'].includes(key)) {
      continue;
    }
    if (!(key in schema)) {
      if (!ignoreUnknownOptions) {
        throw new UnknownOptionError(key);
      } else {
        parsedOptions[key] = value;
      }
    }
    try {
      const shape = schema[key];
      if (shape instanceof z.ZodArray && !Array.isArray(value)) {
        // building array
        const parts = String(value)
          .split(',')
          .map((v) => coerce(v, shape));
        // @ts-ignore
        options[key] = parts;
      }
      parsedOptions[key] = coerce(value, shape);
    } catch (err) {
      if (err instanceof z.ZodError) {
        for (const zerr of err.errors) {
          zerr.path.push(`--${key}`);
        }
      }
      throw err;
    }
  }
  return parsedOptions;
}

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
      throw new NoRequiredArgumentsAfterOptionalsError();
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
      const dashName = paramCase(name);
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
  return result;
}

function getTypename(shape: PermittedZodTypes): string {
  if (shape instanceof z.ZodOptional) {
    return getTypename(shape.unwrap());
  }
  if (shape instanceof z.ZodDefault) {
    return getTypename(shape.removeDefault());
  }
  if (shape instanceof z.ZodString) {
    return 'string';
  }
  if (shape instanceof z.ZodNumber) {
    return 'number';
  }
  if (shape instanceof z.ZodBoolean) {
    return 'boolean';
  }
  if (shape instanceof z.ZodEnum) {
    return shape._def.values.join('|');
  }
  if (shape instanceof z.ZodArray) {
    return `(${getTypename(shape._def.type)})[]`;
  }
  return '';
}

function coerce(value: any, definition: PermittedZodTypes): unknown {
  const trimmed = String(value).trim();
  const lowered = trimmed.toLowerCase();
  if (!trimmed || String(trimmed).length === 0) {
    return definition.parse('');
  }
  if (definition instanceof z.ZodBoolean) {
    if (['true', 'yes', 'y', '1', 'accept', true, 1].includes(lowered)) {
      return definition.parse(true);
    } else if (['false', 'no', 'n', '0', 'deny', false, 0].includes(lowered)) {
      return definition.parse(false);
    } else {
      return definition.parse(true);
    }
  } else if (definition instanceof z.ZodString) {
    return definition.parse(String(trimmed));
  } else if (definition instanceof z.ZodNumber) {
    return definition.parse(parseInt(value));
  }
  if (
    definition instanceof z.ZodDefault ||
    definition instanceof z.ZodOptional
  ) {
    return coerce(value, definition._def.innerType);
  }
  if (definition instanceof z.ZodArray) {
    const array = value as Array<any>;
    return array.map((v) => coerce(v, definition._def.type));
  }
  return definition.parse(trimmed);
}
