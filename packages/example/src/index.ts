import { zli } from 'zli';
import z from 'zod';

await zli()
  .help()
  .command('add', (cmd) =>
    cmd
      .description('Adds 2 numbers together')
      .arguments({
        a: z.number().describe('The first number'),
        b: z.number().describe('The second number'),
      })
      .options({
        verbose: z
          .boolean()
          .default(false)
          .describe('Will output the equation with the result'),
      })
      .shorthands({ verbose: '-v' })
      .invoke(({ a, b, verbose, _ }) => {
        if (verbose) {
          console.log(`${a} + ${b} = ${a + b}`);
        } else {
          console.log(a + b);
        }
      })
  )
  .command('join', (cmd) =>
    cmd
      .description('Joins a list of strings')
      .options({
        separator: z.string().length(1).describe('The separator to join with'),
      })
      .shorthands({
        separator: '-s',
      })
      .invoke(({ _, separator }) => {
        console.log(_.join(separator));
      })
  )
  .showHelpOnNotFound()
  .showHelpOnError()
  .exec();
