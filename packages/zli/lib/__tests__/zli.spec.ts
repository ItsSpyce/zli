/// <reference types="bun-types" />
import { test, describe, mock, expect, beforeEach, type Mock } from 'bun:test';
import { z } from 'zod';
import { zli, ZliWriteStream } from '../';

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

let mockWriteStream: Mock<() => TestWriteStream>;

describe('zli', () => {
  beforeEach(() => {
    mockWriteStream = mock(createWriteStream);
  });

  test('creates a ZLI factory with an empty output', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout, argv: [] })
      .command('foo', (cmd) => cmd.invoke(() => stdout.write('Bar')))
      .exec();

    expect(stdout.read()).toBeEmpty();
  });

  test('creates a ZLI factory that outputs the version', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout, argv: [] }).version('1.2.3').exec();

    expect(stdout.read()).toMatch(/1\.2\.3/);
  });

  test('creates a ZLI factory with a help output', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout, argv: [] })
      .help()
      .command('foo', (cmd) =>
        cmd.description('A little somethin').invoke(() => stdout.write('Bar'))
      )
      .exec();

    expect(stdout.read()).toMatch(/foo/);
    expect(stdout.read()).toMatch(/a little somethin/i);
  });

  test('runs the correct command when args are passed in', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout, argv: ['foo'] })
      .command('foo', (cmd) => cmd.invoke(() => stdout.write('Foo')))
      .command('bar', (cmd) => cmd.invoke(() => stdout.write('Bar')))
      .exec();

    expect(stdout.read()).toMatch(/foo/i);
    expect(stdout.read()).not.toMatch(/bar/i);
  });

  test('outputs the app help when no additional arguments are passed', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout })
      .help()
      .command('foo', (cmd) => cmd.invoke(() => stdout.write('Foo')))
      .command('bar', (cmd) => cmd.invoke(() => stdout.write('Bar')))
      .exec('--help');

    expect(stdout.read()).toMatch(/foo/i);
    expect(stdout.read()).toMatch(/bar/i);
  });

  test('outputs the command help when additional arguments are passed', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout })
      .help()
      .command('foo', (cmd) => cmd.invoke(() => stdout.write('Foo')))
      .command('bar', (cmd) => cmd.invoke(() => stdout.write('Bar')))
      .exec('foo', '--help');

    expect(stdout.read()).toMatch(/foo/i);
    expect(stdout.read()).not.toMatch(/bar/i);
  });

  test('outputs the app help when a shorthand argument is passed', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout })
      .help()
      .command('foo', (cmd) => cmd.invoke(() => stdout.write('Foo')))
      .command('bar', (cmd) => cmd.invoke(() => stdout.write('Bar')))
      .exec('-h');

    expect(stdout.read()).toMatch(/foo/i);
    expect(stdout.read()).toMatch(/bar/i);
  });

  test('outputs the command help when a shorthand argument is passed', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout })
      .help()
      .command('foo', (cmd) => cmd.invoke(() => stdout.write('Foo')))
      .command('bar', (cmd) => cmd.invoke(() => stdout.write('Bar')))
      .exec('foo', '-h');

    expect(stdout.read()).toMatch(/foo/i);
    expect(stdout.read()).not.toMatch(/bar/i);
  });

  test('runs beforeInvoke before a command is ran', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout })
      .beforeInvoke(() => stdout.write('Hello world'))
      .command('foo', (cmd) =>
        cmd.invoke(() => {
          throw new Error('This should throw');
        })
      )
      .exec('foo');

    expect(stdout.read()).toMatch(/hello world/i);
    expect(stdout.read()).toMatch(/\[error\] this should throw/i);
  });

  test('outputs the command help when it throws', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout })
      .command('foo', (cmd) =>
        cmd.description('Foo description').invoke(() => {
          throw new Error('This should throw');
        })
      )
      .showHelpOnError()
      .exec('foo');
    expect(stdout.read()).toMatch(/\[error\] this should throw/i);
    expect(stdout.read()).toMatch(/foo description/i);
  });

  test('throws when an unknown argument is passed', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout })
      .command('foo', (cmd) =>
        cmd.invoke(() => stdout.write('foo')).options({})
      )
      .exec('foo', '--bar');

    expect(stdout.read()).toMatch(/unknown option: --bar/i);
  });

  test('renames shorthand arguments to longhand', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout })
      .command('foo', (cmd) =>
        cmd
          .options({
            theAnswerToLife: z.number(),
          })
          .shorthands({
            theAnswerToLife: '-l',
          })
          .invoke(({ theAnswerToLife }) => {
            stdout.write(`${theAnswerToLife}`);
          })
      )
      .exec('foo', '-l=42');

    expect(stdout.read()).toBe('42');
  });

  test('creates an array when the option is required', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout })
      .command('sb', (cmd) =>
        cmd
          .options({
            prepend: z.array(z.string()).default([]),
            append: z.array(z.string()).default([]),
          })
          .shorthands({
            prepend: '-p',
            append: '-a',
          })
          .invoke(({ prepend, append, _ }) => {
            stdout.write(`${prepend.join('')}${_}${append.join('')}`);
          })
      )
      .exec(
        'sb',
        '--prepend=no',
        '--prepend=no',
        '--append=42',
        '--append=42',
        'what is the answer to life'
      );

    expect(stdout.read()).toBe('nonowhat is the answer to life4242');
  });

  test('outputs enum values properly in help', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout })
      .help()
      .options({ environment: z.enum(['development', 'production']) })
      .exec('-h');

    expect(stdout.read()).toMatch(/development|production/i);
  });

  test('outputs beforeInvoke before processing a command', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout })
      .options({ environment: z.enum(['development', 'production']) })
      .command('foo', (cmd) => cmd.invoke(() => stdout.write('Hello world!')))
      .beforeInvoke(({ environment }) =>
        stdout.write(`Running in environment: ${environment}\n`)
      )
      .exec('foo', '--environment=development');
    expect(stdout.read()).toMatch(/^running in environment\: development/i);
    expect(stdout.read()).toMatch(/hello world!$/i);
  });

  test('outputs afterInvoke after processing a command', async () => {
    const stdout = mockWriteStream();
    await zli({ stdout })
      .options({ environment: z.enum(['development', 'production']) })
      .command('foo', (cmd) => cmd.invoke(() => stdout.write('Hello world!')))
      .afterInvoke(({ environment }) =>
        stdout.write(`\nRan in environment: ${environment}`)
      )
      .exec('foo', '--environment=production');
    expect(stdout.read()).toMatch(/^hello world!/i);
    expect(stdout.read()).toMatch(/ran in environment\: production$/i);
  });
});
