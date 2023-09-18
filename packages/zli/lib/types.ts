import z from 'zod';

export type EmptyOptions = {
  //
};

export interface CommandInvokeFunction<
  TArgs extends ArgumentsShape,
  TOptions extends OptionsShape,
  TGlobalOptions extends OptionsShape
> {
  (args: Arguments<TGlobalOptions & TArgs & TOptions>): void | Promise<void>;
}

export type ParsedArguments = {
  [key: string]: string | boolean | number | Array<string | boolean | number>;
} & {
  _: Array<string>;
};

export type ArgumentsShape = {
  [name: string]:
    | z.ZodString
    | z.ZodNumber
    | z.ZodBoolean
    | z.ZodOptional<z.ZodString | z.ZodNumber | z.ZodBoolean>
    | z.ZodDefault<z.ZodString | z.ZodNumber | z.ZodBoolean>;
};

export type OptionsShape = {
  [name: string]:
    | z.ZodString
    | z.ZodNumber
    | z.ZodBoolean
    | z.ZodOptional<z.ZodString | z.ZodNumber | z.ZodBoolean>
    | z.ZodDefault<z.ZodString | z.ZodNumber | z.ZodBoolean>;
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
  [key in keyof T]: `-${string}`;
};

export interface ZliFactory<
  TGlobalOptions extends OptionsShape = EmptyOptions
> {
  command<
    TArgs extends ArgumentsShape = EmptyOptions,
    TOptions extends OptionsShape = EmptyOptions
  >(
    name: string,
    cmd: (
      cmd: Command<TArgs, TOptions, TGlobalOptions>
    ) => Command<TArgs, TOptions, TGlobalOptions>
  ): ZliFactory<TGlobalOptions>;
  options<TOptions extends OptionsShape>(opts: TOptions): ZliFactory<TOptions>;
  beforeInvoke(
    fn: (opts: Options<TGlobalOptions>) => void | Promise<void>
  ): ZliFactory<TGlobalOptions>;
  exec(): Promise<void>;
  help(): ZliFactory<WithHelp<TGlobalOptions>>;
  shorthands(
    shorthands: ShorthandDefinitions<TGlobalOptions>
  ): ZliFactory<TGlobalOptions>;
  showHelpOnNotFound(): ZliFactory<TGlobalOptions>;
  showHelpOnError(): ZliFactory<TGlobalOptions>;
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
    shorthands: ShorthandDefinitions<TOptions>
  ): Command<TArgs, TOptions, TGlobalOptions>;
  invoke(
    fn: CommandInvokeFunction<TArgs, TOptions, TGlobalOptions>
  ): Command<TArgs, TOptions, TGlobalOptions>;
}
