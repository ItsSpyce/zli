import { z } from 'zod';
import {
  zli,
  type ParsedArguments,
  type ZliWriteStream,
  type ShorthandDefinitions,
  expandShorthandOptions,
  parseArguments,
  parse,
  parseOptions,
  unknownOptionError,
} from './zli';
import { test, describe, expect, mock } from 'bun:test';

interface TestWriteStream extends ZliWriteStream {
  read(): string;
}

function createWriteStream(): TestWriteStream {
  let buffer = '';

  return {
    write(str: string, _, cb) {
      buffer += str;
      cb?.();
      return true;
    },
    read() {
      return buffer;
    },
  };
}

describe('zli', () => {
  test('should print the description of a command when --help is passed', async () => {
    const stdout = createWriteStream();
    await zli({ stdout })
      .help()
      .command('echo', (cmd) =>
        cmd.describe('Prints a message').invoke(() => {})
      )
      .exec('--help');

    expect(stdout.read()).toMatch(/prints a message/i);
  });

  test('allows for multiple runs on the same instance', async () => {
    const stdout = createWriteStream();
    const instance = zli({ stdout }).command('echo', (cmd) =>
      cmd.invoke(() => stdout.write('Hello'))
    );
    await instance.exec(['echo']);
    expect(stdout.read()).toMatch(/hello/i);
    await instance.exec(['echo']);
    expect(stdout.read()).toMatch(/hellohello/i);
  });
});

describe('zli helper functions', () => {
  test('properly expands shorthanded arguments', () => {
    const args: ParsedArguments = {
      _: ['echo', 'Hello', 'world'],
      h: true,
      v: true,
      i: 42,
    };
    const shorthands: Partial<ShorthandDefinitions<any>> = {
      help: '-h',
      verbose: '-v',
    };
    const expanded = expandShorthandOptions(args, shorthands);
    expect(expanded.help).toBe(true);
    expect(expanded.verbose).toBe(true);
    expect(expanded.i).toBe(42);
    expect(expanded.integer).not.toBeDefined();
    expect(expanded.h).not.toBeDefined();
    expect(expanded.v).not.toBeDefined();
  });

  test('properly parses a value from the zod type', () => {
    const value = '42';
    const schema = z.number();
    const parsed = parse(value, schema);
    expect(parsed).toBe(42);
  });

  test('properly parses arguments from a schema definition', () => {
    const schema = {
      foo: z.number().min(0),
      bar: z.string().optional(),
    };
    const args = {
      _: ['42', 'baz'],
    };
    const parsedArgs = parseArguments(args, schema);
    expect(parsedArgs).toHaveLength(2);
    const [parsed, parsedErr] = parsedArgs;
    expect(parsedErr).toBeNull();
    expect(parsed.foo).toBe(42);
    expect(parsed.bar).toBe('baz');
  });

  test('properly parses options from a schema definition', () => {
    const schema = {
      path: z.string().min(1),
    };
    const args = {
      _: [],
      path: '/path/to/file',
    };
    const parsedOptions = parseOptions(false, args, schema);
    expect(parsedOptions).toHaveLength(2);
    const [parsed, parsedErr] = parsedOptions;
    expect(parsedErr).toBeNull();
    expect(parsed.path).toBe('/path/to/file');
  });

  test('returns an error when an unknown option is passed', () => {
    const schema = {
      path: z.string().min(1),
    };
    const args = {
      _: [],
      path: '/path/to/file',
      unknown: 'option',
    };
    const parsedOptions = parseOptions(false, args, schema);
    expect(parsedOptions).toHaveLength(2);
    const [_, parsedErr] = parsedOptions;
    expect(parsedErr).toEqual(unknownOptionError);
  });
});

describe('zli commands', () => {
  test('should print "Hello world" to stdout', async () => {
    const stdout = createWriteStream();
    await zli({ stdout })
      .command('echo', (cmd) =>
        cmd.invoke((_, stdout) => stdout.write('Hello world'))
      )
      .exec(['echo']);

    expect(stdout.read()).toMatch(/hello world/i);
  });

  test('should print an error message when no arguments are passed to "echo"', async () => {
    const stdout = createWriteStream();
    await zli({ stdout })
      .command('echo', (cmd) =>
        cmd.invoke(({ _ }, stdout) => {
          if (_.length === 0) {
            stdout.write('Error: No message provided');
          } else {
            stdout.write(_.join(' '));
          }
        })
      )
      .exec(['echo']);
    expect(stdout.read()).toMatch(/error: no message provided/i);
  });

  test('should print an error message for a non-existent command', async () => {
    const stdout = createWriteStream();
    await zli({ stdout }).exec(['nonexistent']);
    expect(stdout.read()).toMatch(/command not found/i);
  });

  test('calls a mock fn with the given arguments from the command line', async () => {
    const stdout = createWriteStream();
    const mockFn = mock((_: string) => {});
    await zli({ stdout })
      .command('greet', (cmd) =>
        cmd
          .arguments({
            name: z.string(),
          })
          .invoke(({ name }, stdout) => {
            mockFn(name);
            stdout.write(`Hello, ${name}!`);
          })
      )
      .exec('greet "John Doe"');

    expect(mockFn).toHaveBeenCalledWith('John Doe');
    expect(stdout.read()).toMatch(/hello, john doe/i);
  });
});
