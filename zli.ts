const parser = require('yargs-parser');
import { z } from 'zod';
import { camelCase, kebabCase } from 'change-case';
import type { WriteStream } from 'tty';
import * as readline from 'readline';

const TERMINAL_WIDTH = 80;

type Result<T, TErr extends Error = never> = TErr extends never
  ? [value: T, error: null]
  : [value: T, error: TErr];
function ok<T>(value: T): Result<T> {
  return [value, null] as Result<T>;
}
function err<T, TErr extends Error>(value: T, error: TErr): Result<T, TErr> {
  return [value, error] as Result<T, TErr>;
}

/// Types
/**
 * Represents an empty options shape. This is the default.
 */
export type EmptyOptions = {
  //
};

type PrimitiveZodTypes =
  | z.ZodString
  | z.ZodEffects<z.ZodString, string>
  | z.ZodNumber
  | z.ZodEffects<z.ZodNumber, number>
  | z.ZodBoolean
  | z.ZodEffects<z.ZodBoolean, boolean>
  | z.ZodAny
  | z.ZodEffects<z.ZodAny, any>
  | z.ZodUnion<[PrimitiveZodTypes, ...PrimitiveZodTypes[]]>;

type ObjectZodType = {
  [key: string]: PermittedZodTypes | z.ZodObject<ObjectZodType, 'strip'>;
};

export type PermittedZodTypes =
  | PrimitiveZodTypes
  | z.ZodEnum<[string, ...string[]]>
  | z.ZodOptional<PermittedZodTypes>
  | z.ZodDefault<PermittedZodTypes>
  | z.ZodArray<PermittedZodTypes>
  | z.ZodObject<ObjectZodType, 'strip'>
  | z.ZodRecord<z.ZodString, z.ZodTypeAny>;

/**
 * Forwards `write` from node:tty:WriteStream
 */
export interface ZliWriteStream {
  write(...args: Parameters<WriteStream['write']>): any | Promise<any>;
}

export interface CommandPreInvokeFunction<TGlobalOptions extends OptionsShape> {
  (options: Options<TGlobalOptions>): void | Promise<void>;
}

/**
 * The command handler interface for a command
 */
export interface CommandInvokeFunction<
  TGlobalOptions extends OptionsShape,
  TArgs extends ArgumentsShape,
  TOptions extends OptionsShape
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

export interface CommandPostInvokeFunction<
  TGlobalOptions extends OptionsShape
> {
  (options: Options<TGlobalOptions>): void | Promise<void>;
}

export interface CommandSetupFunction<TGlobalOptions extends OptionsShape> {
  (options: Options<TGlobalOptions>, stdout: ZliWriteStream):
    | void
    | Promise<void>
    | boolean
    | Promise<boolean>;
}

type PrimitiveType = string | boolean | number;
type OptionObject = {
  [key: string]: PrimitiveType | OptionObject;
};

/**
 * Represents the base parsed args from yargs-parser
 *
 * @description
 * All named options are returned as properties in the return object. Any non-option arguments
 * are appended to `_` as a string, number, or boolean.
 */
export type ParsedArguments = {
  [key: string]: PrimitiveType | Array<PrimitiveType> | OptionObject;
} & {
  /**
   * Represents the remaining arguments that do not have keys or definitions
   */
  _: Array<string>;
};

/**
 * Represents an expected arguments shape for a command
 */
export type ArgumentsShape = {
  /**
   * An argument definition with a given key
   *
   * @example
   * const myArguments = {
   *  a: z.number(),
   *  b: z.number(),
   * }
   */
  [name: string]: PermittedZodTypes;
};

/**
 * Represents an options shape for a command
 */
export type OptionsShape = {
  /**
   * An option definition with a given key
   *
   * @example
   * const myOptions = {
   *  foo: z.string().default('bar')
   * }
   */
  [name: string]: PermittedZodTypes;
};

/**
 * Represents a type that extends `OptionsShape` and includes an optional `help` property.
 * @template T - The type that extends `OptionsShape`.
 */
export type WithHelp<T extends OptionsShape> = T & {
  help: z.ZodOptional<z.ZodBoolean>;
};

/**
 * Represents the type of arguments for a given shape.
 * @template TShape - The shape of the arguments.
 */
export type Arguments<TShape extends ArgumentsShape> = {
  [key in keyof TShape]: z.TypeOf<TShape[key]>;
};

/**
 * Represents a set of options for a specific shape.
 * @template TShape - The shape of the options.
 */
export type Options<TShape extends OptionsShape> = {
  [key in keyof TShape]: z.TypeOf<TShape[key]>;
};

export type OptionsHelp<T extends OptionsShape> = {
  [key in keyof T]: string;
};

/**
 * Represents a type that defines shorthand definitions for options.
 * @template T - The shape of the options.
 */
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
 * Represents the main interface for a Zli command-line application.
 *
 * @template TGlobalOptions - The shape of the global options for the Zli application.
 */
export interface Zli<TGlobalOptions extends OptionsShape = EmptyOptions> {
  /**
   * Defines a command for the Zli interface.
   * @template TArgs - The shape of the command arguments.
   * @template TOptions - The shape of the command options.
   * @param name - The name of the command.
   * @param cmd - The command function.
   * @returns The updated Zli interface.
   */
  command<
    TArgs extends ArgumentsShape = EmptyOptions,
    TOptions extends OptionsShape = EmptyOptions
  >(
    name: string,
    cmd: (
      cmd: Command<TGlobalOptions, TArgs, TOptions>
    ) => Command<TGlobalOptions, TArgs, TOptions>
  ): Zli<TGlobalOptions>;

  /**
   * Sets the options for the Zli interface.
   * @template TOptions - The shape of the options.
   * @param opts - The options to set.
   * @returns The updated Zli interface.
   */
  options<TOptions extends OptionsShape>(opts: TOptions): Zli<TOptions>;

  /**
   * Sets a function to be executed before invoking a command.
   * @param fn - The function to be executed.
   * @returns The updated Zli interface.
   */
  beforeInvoke(
    fn: (opts: Options<TGlobalOptions>) => void | Promise<void>
  ): Zli<TGlobalOptions>;

  /**
   * Sets a function to be executed after invoking a command.
   * @param fn - The function to be executed.
   * @returns The updated Zli interface.
   */
  afterInvoke(
    fn: (opts: Options<TGlobalOptions>) => void | Promise<void>
  ): Zli<TGlobalOptions>;

  /**
   * Executes the Zli command with the specified arguments.
   * @param args - The command arguments.
   * @returns A promise that resolves when the command execution is complete.
   */
  exec(args?: string | string[]): Promise<void>;

  embed(stdin?: NodeJS.ReadStream): Promise<void>;

  /**
   * Displays the help information for the Zli interface.
   * @returns The updated Zli interface with help information.
   */
  help(): Zli<WithHelp<TGlobalOptions>>;

  /**
   * Sets the shorthand definitions for the Zli interface.
   * @param shorthands - The shorthand definitions.
   * @returns The updated Zli interface.
   */
  shorthands(
    shorthands: ShorthandDefinitions<TGlobalOptions>
  ): Zli<TGlobalOptions>;

  /**
   * Sets the version for the Zli interface.
   * @param version - The version string.
   * @returns The updated Zli interface.
   */
  version(version: string): Zli<TGlobalOptions>;

  /**
   * Configures the Zli interface to show help information when a command is not found.
   * @returns The updated Zli interface.
   */
  showHelpOnNotFound(): Zli<TGlobalOptions>;

  /**
   * Configures the Zli interface to show help information when an error occurs.
   * @returns The updated Zli interface.
   */
  showHelpOnError(): Zli<TGlobalOptions>;
}

/**
 * Represents a command in a command-line interface.
 *
 * @template TGlobalOptions - The shape of the global options.
 * @template TArgs - The shape of the command arguments.
 * @template TOptions - The shape of the command options.
 */
export interface Command<
  TGlobalOptions extends OptionsShape = EmptyOptions,
  TArgs extends ArgumentsShape = EmptyOptions,
  TOptions extends OptionsShape = EmptyOptions
> {
  /**
   * Adds a subcommand to the current command.
   * @param name - The name of the subcommand.
   * @param cmd - The callback function that defines the subcommand.
   * @returns The current command with the added subcommand.
   */
  command<
    TArgs2 extends ArgumentsShape = EmptyOptions,
    TOptions2 extends OptionsShape = EmptyOptions
  >(
    name: string,
    cmd: (
      cmd: Command<TGlobalOptions, TArgs2, TOptions2>
    ) => Command<any, TArgs2, TOptions2>
  ): Command<TGlobalOptions, TArgs, TOptions>;

  /**
   * Sets the help text for the current command.
   * @param help - The help text for the command options.
   * @returns The current command with the updated help text.
   */
  help(help: OptionsHelp<TOptions>): Command<TGlobalOptions, TArgs, TOptions>;

  /**
   * Sets the description for the current command.
   * @param description - The description of the command.
   * @returns The current command with the updated description.
   */
  describe(description: string): Command<TGlobalOptions, TArgs, TOptions>;

  /**
   * Sets the arguments for the current command.
   * @param args - The shape of the command arguments.
   * @returns The current command with the updated arguments.
   */
  arguments<TArgs extends ArgumentsShape = EmptyOptions>(
    args: TArgs
  ): Command<TGlobalOptions, TArgs, TOptions>;

  /**
   * Sets the options for the current command.
   * @param opts - The shape of the command options.
   * @returns The current command with the updated options.
   */
  options<TOptions extends OptionsShape>(
    opts: TOptions
  ): Command<TGlobalOptions, TArgs, TOptions>;

  /**
   * Sets the shorthands for the current command.
   * @param shorthands - The partial shorthand definitions for the command options.
   * @returns The current command with the updated shorthands.
   */
  shorthands(
    shorthands: Partial<ShorthandDefinitions<TOptions>>
  ): Command<TGlobalOptions, TArgs, TOptions>;

  /**
   * Ignores unknown options for the current command.
   * @returns The current command with the ignore unknown options flag set.
   */
  ignoreUnknownOptions(): Command<TGlobalOptions, TArgs, TOptions>;

  /**
   * Sets up the command with a setup function.
   * @param fn - The setup function for the command.
   * @returns The current command with the setup function set.
   */
  setup(
    fn: CommandSetupFunction<TGlobalOptions>
  ): Command<TGlobalOptions, TArgs, TOptions>;

  /**
   * Sets a pre-invoke function for the current command.
   * @param fn - The pre-invoke function for the command.
   * @returns The current command with the pre-invoke function set.
   */
  preInvoke(
    fn: (options: Options<TGlobalOptions>) => void
  ): Command<TGlobalOptions, TArgs, TOptions>;

  /**
   * Sets an invoke function for the current command.
   * @param fn - The invoke function for the command.
   * @returns The current command with the invoke function set.
   */
  invoke(
    fn: CommandInvokeFunction<TGlobalOptions, TArgs, TOptions>
  ): Command<TGlobalOptions, TArgs, TOptions>;

  /**
   * Sets a post-invoke function for the current command.
   * @param fn - The post-invoke function for the command.
   * @returns The current command with the post-invoke function set.
   */
  postInvoke(
    fn: (options: Options<TGlobalOptions>) => void
  ): Command<TGlobalOptions, TArgs, TOptions>;
}

/// Implementations

class _Zli<TGlobalOptions extends OptionsShape> implements Zli<TGlobalOptions> {
  readonly _commands = new Map<string, _Command<TGlobalOptions, any, any>>();
  readonly _meta: InvokeMeta = {
    showHelpOnError: false,
    showHelpOnNotFound: false,
    ignoreUnknownOptions: false,
  };
  _formattedArgs?: ParsedArguments;
  _globalOptions?: TGlobalOptions;
  _globalShorthands?: ShorthandDefinitions<TGlobalOptions>;
  _version?: string;
  _beforeInvoke?: (opts: Options<TGlobalOptions>) => void | Promise<void>;
  _afterInvoke?: (opts: Options<TGlobalOptions>) => void | Promise<void>;

  constructor(private readonly _stdout: ZliWriteStream) {}

  getStdout() {
    return this._stdout;
  }

  /**
   * Defines a command in the Zli application.
   * @param name - The name of the command.
   * @param cmd - A function that takes a command instance and returns a modified command instance.
   * @returns The Zli instance.
   */
  command<
    TArgs2 extends ArgumentsShape = EmptyOptions,
    TOptions2 extends OptionsShape = EmptyOptions
  >(
    name: string,
    cmd: (
      cmd: Command<TGlobalOptions, TArgs2, TOptions2>
    ) => Command<TGlobalOptions, TArgs2, TOptions2>
  ): _Zli<TGlobalOptions> {
    const command = new _Command<TGlobalOptions, TArgs2, TOptions2>(
      name,
      this,
      null
    );
    const setupCommand = cmd(command) as _Command<
      TGlobalOptions,
      TArgs2,
      TOptions2
    >;
    this._commands.set(name.toLowerCase(), setupCommand);
    return this;
  }

  /**
   * Sets the options for the Zli instance.
   *
   * @template TOptions - The type of the options object.
   * @param {TOptions} opts - The options object.
   * @returns {_Zli<TGlobalOptions & TOptions>} - The updated Zli instance with the new options.
   */
  options<TOptions extends OptionsShape>(
    opts: TOptions
  ): _Zli<TGlobalOptions & TOptions> {
    this._globalOptions = { ...(this._globalOptions ?? {}), ...opts } as any;
    return this as any;
  }

  help(): _Zli<WithHelp<TGlobalOptions>> {
    return this.options({
      help: z.boolean().optional(),
    }).shorthands({ help: '-h' }) as _Zli<WithHelp<TGlobalOptions>>;
  }

  /**
   * Sets the shorthand definitions for the command.
   *
   * @param shorthands - The shorthand definitions to set.
   * @returns The instance of `_Zli` with the updated shorthand definitions.
   */
  shorthands(
    shorthands: ShorthandDefinitions<TGlobalOptions>
  ): _Zli<TGlobalOptions> {
    this._globalShorthands = {
      ...(this._globalShorthands ?? {}),
      ...shorthands,
    };
    return this;
  }

  /**
   * Sets the flag to show help when a command is not found.
   * @returns The current instance of _Zli with the updated configuration.
   */
  showHelpOnNotFound(): _Zli<TGlobalOptions> {
    this._meta.showHelpOnNotFound = true;
    return this;
  }

  /**
   * Sets the `showHelpOnError` option to `true`.
   * When this option is enabled, the help message will be displayed when an error occurs.
   *
   * @returns The current `_Zli` instance.
   */
  showHelpOnError(): _Zli<TGlobalOptions> {
    this._meta.showHelpOnError = true;
    return this;
  }

  /**
   * Sets the version of the Zli instance.
   *
   * @param version - The version string to set.
   * @returns The updated Zli instance.
   */
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

  async exec(args?: string | string[]): Promise<void> {
    if (args == null) {
      args = process.argv.slice(2);
    }
    const parsedArgs = camelCaseArgs(parser(args));
    if (this._formattedArgs == null) {
      this._formattedArgs = parsedArgs;
    } else {
      this._formattedArgs = { ...this._formattedArgs, ...parsedArgs };
    }

    const [runArg, ...restArgs] = this._formattedArgs._;

    const expandedArgs = expandShorthandOptions(
      this._formattedArgs,
      this._globalShorthands
    );
    if (
      expandedArgs['help'] === true &&
      runArg == null &&
      this._globalOptions?.help != null
    ) {
      return this.displayHelp();
    }
    const [globalOptions, globalOptionsErr] = parseOptions(
      true,
      expandedArgs,
      this._globalOptions
    );
    if (globalOptionsErr != null) {
      this.write(globalOptionsErr.message);
      return;
    }
    if (this._beforeInvoke != null) {
      await this._beforeInvoke(globalOptions);
    }
    const cmd = this._commands.get(runArg);
    if (cmd != null) {
      const args = {
        ...this._formattedArgs,
        ...expandedArgs,
        _: restArgs,
      };
      const [didExecute, execError] = await cmd.exec(args, globalOptions);
      if (execError != null) {
        if (this._meta.showHelpOnError) {
          this.displayHelp();
        }
        if (execError === zliError) {
          this.write(execError.message);
        } else if (execError instanceof z.ZodError) {
          for (const zerr of execError.errors) {
            const [_, argName] = zerr.path;
            this.write(`${zerr.message} ${argName ? `(${argName})` : ''}`);
          }
        } else {
          execError.stack
            ? this.write(execError.stack)
            : this.write(execError.message);
        }
      } else if (!didExecute) {
        if (this._meta.showHelpOnNotFound) {
          this.displayHelp();
        }
      }
    } else if (runArg != null) {
      this.write(`Command not found: ${runArg}`);
      if (this._meta.showHelpOnNotFound) {
        this.displayHelp();
      }
    } else if (this._version != null) {
      this._stdout.write(this._version);
    } else if (this._globalOptions?.help) {
      this.displayHelp();
    }
    if (this._afterInvoke != null) {
      this._afterInvoke(globalOptions);
    }
  }

  embed(stdin: NodeJS.ReadStream = process.stdin) {
    const int = readline.createInterface(stdin);
    return new Promise<void>((resolve) => {
      let isRunning = true;
      while (isRunning) {
        int.question('> ', async (input) => {
          if (input.match(/\.exit/i)) {
            int.write('Exiting');
            int.close();
            isRunning = false;
          } else {
            await this.exec(input);
          }
        });
      }
      resolve();
    });
  }
}

class _Command<
  TGlobalOptions extends OptionsShape = EmptyOptions,
  TArgs extends ArgumentsShape = EmptyOptions,
  TOptions extends OptionsShape = EmptyOptions
> implements Command<TGlobalOptions, TArgs, TOptions>
{
  private readonly _commands = new Map<
    string,
    _Command<TGlobalOptions, any, any>
  >();

  private _meta: InvokeMeta;
  private _help?: OptionsHelp<TOptions>;
  private _description?: string;
  private _argsSchema?: TArgs;
  private _optsSchema?: TOptions;
  private _shorthands?: ShorthandDefinitions<TOptions>;
  private _preinvoke?: CommandPreInvokeFunction<TGlobalOptions>;
  private _invoke?: CommandInvokeFunction<TGlobalOptions, TArgs, TOptions>;
  private _postinvoke?: CommandPostInvokeFunction<TGlobalOptions>;
  private _setup?: CommandSetupFunction<TGlobalOptions>;

  get fullName(): string {
    if (this._parent === null) {
      return this._name;
    }
    return `${this._parent.fullName} ${this._name}`;
  }

  constructor(
    private readonly _name: string,
    private readonly _factory: _Zli<TGlobalOptions>,
    private readonly _parent: _Command<TGlobalOptions, any, any> | null
  ) {
    this._meta = _factory._meta;
  }

  private _getSubcommandWithNewArgs(
    args?: ParsedArguments
  ): [_Command<TGlobalOptions, any, any> | undefined, ParsedArguments] {
    if (args == null) {
      return [undefined, args!];
    }
    const [arg] = args._;
    const slicedArgs = { ...args, _: args._.slice(1) };
    if (arg != null && this._commands.has(arg)) {
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
    return subcommand?.getDescription(newArgs) ?? this._description ?? '';
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
      cmd: Command<TGlobalOptions, TArgs2, TOptions2>
    ) => Command<TGlobalOptions, TArgs2, TOptions2>
  ): Command<TGlobalOptions, TArgs, TOptions> {
    const command = new _Command<TGlobalOptions, TArgs2, TOptions2>(
      name,
      this._factory,
      this
    );
    const setupCommand = cmd(command) as _Command<
      TGlobalOptions,
      TArgs2,
      TOptions2
    >;
    this._commands.set(name.toLowerCase(), setupCommand);
    return this;
  }

  help(help: OptionsHelp<TOptions>): Command<TGlobalOptions, TArgs, TOptions> {
    this._help = help;
    return this;
  }

  describe(
    description: string | undefined
  ): Command<TGlobalOptions, TArgs, TOptions> {
    this._description = description;
    return this;
  }

  arguments<TArgs extends ArgumentsShape>(
    args: TArgs
  ): Command<TGlobalOptions, TArgs, TOptions> {
    // @ts-ignore due to it returning a different type, it gets a bit touchy
    this._argsSchema = args;
    // @ts-ignore
    return this as Command<TGlobalOptions, TArgs, TOptions>;
  }

  options<TOptions extends OptionsShape>(
    opts: TOptions
  ): Command<TGlobalOptions, TArgs, TOptions> {
    this._optsSchema = opts as any;
    return this as any;
  }

  shorthands(
    shorthands: Partial<ShorthandDefinitions<TOptions>>
  ): Command<TGlobalOptions, TArgs, TOptions> {
    this._shorthands = { ...(this._shorthands ?? {}), ...shorthands };
    return this;
  }

  ignoreUnknownOptions(): Command<TGlobalOptions, TArgs, TOptions> {
    this._meta.ignoreUnknownOptions = true;
    return this;
  }

  setup(
    fn: CommandSetupFunction<TGlobalOptions>
  ): Command<TGlobalOptions, TArgs, TOptions> {
    this._setup = fn;
    return this;
  }

  preInvoke(
    fn: CommandPreInvokeFunction<TGlobalOptions>
  ): Command<TGlobalOptions, TArgs, TOptions> {
    this._preinvoke = fn;
    return this;
  }

  invoke(
    fn: CommandInvokeFunction<TArgs, TOptions, TGlobalOptions>
  ): Command<TGlobalOptions, TArgs, TOptions> {
    this._invoke = fn;
    return this;
  }

  postInvoke(
    fn: CommandPostInvokeFunction<TGlobalOptions>
  ): Command<TGlobalOptions, TArgs, TOptions> {
    this._postinvoke = fn;
    return this;
  }

  displayHelp() {
    // @ts-ignore I have ZERO clue why this is saying it's never
    const [help] = buildHelpDisplay(
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
    args: ParsedArguments,
    globalOptions: Options<TGlobalOptions>
  ): Promise<Result<boolean, Error>> {
    // setup gets called before anything and should always be called
    if (!('help' in args)) {
      const didSetup = await this._setup?.(
        globalOptions,
        this._factory.getStdout()
      );
      if (didSetup === false) {
        return ok(false);
      }
    }
    // pre-invokes get called for each command and child
    await this._preinvoke?.(globalOptions);
    try {
      assertNoRequiredArgsAfterOptional(this._argsSchema);
    } catch (error: any) {
      return [false, error];
    }
    const [subcommand, newArgs] = this._getSubcommandWithNewArgs(args);
    if (subcommand) {
      const result = await subcommand.exec(newArgs, globalOptions);
      if (result) {
        await this._postinvoke?.(globalOptions);
      }
      return result;
    }
    // args should have 'help' from the factory class
    if (args.help) {
      this.displayHelp();
      return ok(true);
    }
    if (args._.length < Object.keys(this._argsSchema ?? {}).length) {
      this.displayHelp();
      return ok(false);
    }
    if (this._invoke == null) {
      return ok(false);
    }
    const expandedArgs = expandShorthandOptions(args, this._shorthands);
    const [parsedArgs, parsedArgsErr] = parseArguments(args, this._argsSchema);
    if (parsedArgsErr != null) {
      return err(false, parsedArgsErr);
    }
    const [parsedOptions, parsedOptionsErr] = parseOptions(
      this._meta.ignoreUnknownOptions,
      expandedArgs,
      this._optsSchema
    );
    if (parsedOptionsErr != null) {
      return err(false, parsedOptionsErr);
    }
    const invokeArgs = spreadLikeButter(
      args,
      globalOptions,
      parsedArgs,
      parsedOptions
    );

    try {
      await this._invoke(invokeArgs, this._factory.getStdout());
      await this._postinvoke?.(globalOptions);
    } catch (error: any) {
      if (
        error == noRequiredArgumentsAfterOptionalsError ||
        error == unknownOptionError
      ) {
        return [false, error];
      }
      if (err instanceof z.ZodError) {
        for (const zerr of error.errors) {
          this._factory.write(
            `${zerr.message} ${zerr.path[0] ? `(${zerr.path[0]})` : ''}`
          );
        }
      } else {
        this._factory.write(`[ERROR] ${err}`);
        return [false, error];
      }

      if (this._meta.showHelpOnError) {
        this.displayHelp();
      }
      return ok(false);
    }
    return ok(true);
  }
}

/// Errors

const createError = (message: string) => new Error(message);
export const noRequiredArgumentsAfterOptionalsError = createError(
  'cannot have required arguments after optional'
);
export const commandError = createError('failed to run command');
export const unknownOptionError = createError('unknown option');
export const incorrectUsageError = createError('incorrect usage');
export const zliError = createError('unknown zli error');

export type ZliOptions = {
  stdout?: ZliWriteStream;
};

export function zli(opts?: ZliOptions): Zli {
  opts ??= {};
  if (opts.stdout == null) {
    opts.stdout = process.stdout;
  }
  return new _Zli(opts.stdout!);
}

/// Helper functions

const ignoredArgKeys = ['--', '_'];

function camelCaseArgs(args: ParsedArguments): ParsedArguments {
  return Object.keys(args).reduce((acc, key) => {
    if (ignoredArgKeys.includes(key)) {
      return { ...acc, [key]: args[key] };
    }
    if (typeof args[key] === 'object' && !Array.isArray(args[key])) {
      // reiterate through children
      return {
        ...acc,
        [camelCase(key)]: camelCaseArgs(args[key] as ParsedArguments),
      };
    }
    return {
      ...acc,
      [camelCase(key)]: args[key],
    };
  }, Object.create(null));
}

export function expandShorthandOptions<TOptions extends OptionsShape>(
  args: ParsedArguments,
  shorthands?: Partial<ShorthandDefinitions<TOptions>>
): Options<TOptions> {
  if (shorthands == null) {
    return args as any;
  }
  for (const [longhand, shorthand] of Object.entries(shorthands)) {
    const key = shorthand!.substring(1);
    if (args[key] != null) {
      args[longhand] = args[shorthand!.substring(1)];
      delete args[shorthand!.substring(1)];
    }
  }

  return args as any;
}

export function parseArguments<TArgs extends ArgumentsShape>(
  args: ParsedArguments,
  schema?: TArgs
): Result<Arguments<TArgs>, Error> {
  if (schema == null) {
    return ok(args as any);
  }
  const parsedArgs = Object.create(null);
  const schemaDefinitions = Object.entries(schema);
  const requiredArgsCount = schemaDefinitions.filter(
    ([_, shape]) =>
      !shape.isOptional() ||
      (shape instanceof z.ZodDefault && shape._def.defaultValue() != null)
  ).length;
  if (args._.length < requiredArgsCount) {
    return err(args as any, incorrectUsageError);
  }
  let i = 0;
  for (; i < args._.length; i++) {
    const value = args._[i];
    const schema = schemaDefinitions[i];
    if (schema == null) {
      // we don't try to parse and have no more left, just return what we have
      return parsedArgs;
    }
    const [key, shape] = schemaDefinitions[i];
    try {
      parsedArgs[key] = parse(value, shape);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        for (const zerr of error.errors) {
          zerr.path.push(key);
        }
      }
      return err(args as any, error as Error);
    }
  }
  parsedArgs._ = args._.slice(i);

  return ok(parsedArgs);
}

export function parseOptions<TOptions extends OptionsShape>(
  ignoreUnknownOptions: boolean,
  options: Options<TOptions>, // this is Options because it expects shorthands to be processed
  schema?: TOptions
): Result<Options<TOptions>, Error> {
  if (schema == null) {
    return ok(options);
  }
  const parsedOptions = Object.create(null);
  for (const [key, shape] of Object.entries(schema)) {
    // ignore yargs keys
    if (['_', '--'].includes(key)) {
      continue;
    }
    const value = options[key];
    try {
      parsedOptions[key] = parse(value, shape);
    } catch (error) {
      if (error instanceof z.ZodError) {
        for (const zerr of error.errors) {
          zerr.path.push(`--${key}`);
        }
      }
      return err(options, error as Error);
    }
  }
  for (const [key, value] of Object.entries(options)) {
    // ignore yargs keys
    if (['_', '--'].includes(key)) {
      continue;
    }
    if (!(key in schema)) {
      if (!ignoreUnknownOptions) {
        return err(options, unknownOptionError);
      } else {
        parsedOptions[key] = value;
      }
    }
    try {
      parsedOptions[key] = parse(value, schema[key]);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        for (const zerr of error.errors) {
          zerr.path.push(`--${key}`);
        }
      }
      return err(options, error as Error);
    }
  }
  return ok(parsedOptions);
}

export function assertNoRequiredArgsAfterOptional(args?: ArgumentsShape) {
  if (args == null) {
    return;
  }
  let isReadingRequired = true;
  for (const [_, shape] of Object.entries(args)) {
    if (
      (shape.isOptional() || shape instanceof z.ZodDefault) &&
      isReadingRequired
    ) {
      isReadingRequired = false;
    } else if (!isReadingRequired) {
      throw noRequiredArgumentsAfterOptionalsError;
    }
  }
}

export function buildHelpDisplay(
  name: string,
  commands?: Map<string, _Command<any, any, any>>,
  description?: string,
  args?: ArgumentsShape,
  options?: OptionsShape,
  shorthands?: ShorthandDefinitions<any>
): Result<string[]> {
  const lines = new Array<string>();
  if (args != null) {
    lines.push('Usage:', '');
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
        requiredArgs.push(`${name}:${getTypename(shape) ?? 'any'}`);
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
    lines.push(commandUsage);
  } else {
    lines.push(name);
  }

  if (description != null) {
    lines.push('\nDescription:', `\t${description}`, '');
  }

  if (options != null) {
    lines.push('Options:');
    for (const [name, shape] of Object.entries(options)) {
      const dashName = kebabCase(name);
      const nameToDisplay =
        typeof shorthands?.[name] !== 'undefined'
          ? `--${dashName}|${shorthands[name]}`
          : `--${dashName}`;
      const typename = getTypename(shape);
      const spacesToAdd =
        TERMINAL_WIDTH - nameToDisplay.length - typename.length;
      if (spacesToAdd <= 0 || typeof spacesToAdd !== 'number') {
        continue;
      }
      const padding = Array(spacesToAdd)
        .map(() => '')
        .join(' ');
      lines.push(`${nameToDisplay}${padding}${typename}`);
      if (shape.description != null && !shape.description.match(/undefined/i)) {
        lines.push(`\t${shape.description}`);
      }
    }
    lines.push('');
  }
  if (commands != null) {
    for (const [name, command] of commands.entries()) {
      const description = command.getDescription();
      lines.push(name, `\t${description}`);
    }
  }
  return ok(lines);
}

/**
 * Returns the typename of a given shape.
 * @param shape - The shape to get the typename of.
 * @returns The typename of the shape.
 */
export function getTypename(shape: PermittedZodTypes): string {
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
  if (shape instanceof z.ZodAny) {
    return 'any';
  }
  if (shape instanceof z.ZodUnion) {
    return shape._def.options.map(getTypename).join('|');
  }
  return '';
}

/**
 * Parses the given value based on the provided definition.
 *
 * @param value - The value to be parsed.
 * @param definition - The definition of the permitted types for parsing.
 * @returns The parsed value.
 */
export function parse(value: any, definition: PermittedZodTypes): unknown {
  if (value == null) {
    if (definition instanceof z.ZodDefault) {
      return definition._def.defaultValue();
    }
    return undefined;
  }
  if (typeof value === 'object') {
    return definition?.parse(value) ?? value;
  }
  let trimmed = String(value).trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    trimmed = trimmed.slice(1, -1);
  }
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
  }
  if (definition instanceof z.ZodString) {
    return definition.parse(trimmed);
  }
  if (definition instanceof z.ZodNumber) {
    return definition.parse(parseFloat(trimmed));
  }
  if (
    definition instanceof z.ZodDefault ||
    definition instanceof z.ZodOptional
  ) {
    return parse(value, definition._def.innerType);
  }
  if (definition instanceof z.ZodArray) {
    if (!Array.isArray(value)) {
      return String(value)
        .split(',')
        .map((v) => parse(v, definition._def.type));
    } else {
      const array = value as Array<any>;
      return array.map((v) => parse(v, definition._def.type));
    }
  }
  return definition?.parse(value);
}

/**
 * Combines multiple objects into a single object by spreading their properties.
 * Null and undefined values are ignored.
 *
 * @param objs - The objects to be spread.
 * @returns The combined object.
 */
function spreadLikeButter(...objs: object[]) {
  const result = Object.create(null);
  for (const obj of objs) {
    for (const [key, value] of Object.entries(obj)) {
      if (value != null) {
        result[key] = value;
      }
    }
  }
  return result;
}
