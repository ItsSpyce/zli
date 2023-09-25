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
});
