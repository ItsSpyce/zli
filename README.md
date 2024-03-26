# ZLI

ZLI is a CLI framework for Node/Bun. While it was primarily made for Bun, it uses no Bun dependencies, so it should function with Node just as well.

## Usage

### Bun

```sh
bun add github:itsspyce/zli
```

### Node

```sh
npm i git+https://github.com/itsspyce/zli.git
```

```js
import { zli } from 'zli';

const app = zli()
  .command('greet', (cmd) => cmd
    cmd.describe('Greets the user!').invoke(() => {
      console.log('Hello, user :)');
    }));

await app.exec();
```
