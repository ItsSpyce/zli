import { zli } from 'zli';
import z from 'zod';

await zli()
  .help()
  .options({
    foo: z.boolean().default(false).describe('For funsies'),
  })
  .beforeInvoke(({ foo }) => {
    if (foo) {
      console.log('Bar!');
    }
  })
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
      .invoke(({ a, b, verbose }) => {
        if (verbose) {
          console.log(`${a} + ${b} = ${a + b}`);
        } else {
          console.log(a + b);
        }
      })
  )
  .showHelpOnNotFound()
  .exec();
