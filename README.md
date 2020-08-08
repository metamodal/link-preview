# Link Preview

:warning: **Does not work in browsers!** This package only works in Node.js runtimes.

## How to use

1. [Follow these instructions to add GitHub Packages to your project.](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#installing-a-package)
1. ```shell
   npm install @metamodal/link-preview
   ```
1. ```js
   import { getMetadataForUrl } from "@metamodal/link-preview";

   getMetadataForUrl("https://metamodal.github.io/link-preview/mockpage").then(
     (metadata) => {
       console.log(metadata);
       // { "og:site_name": "YouTube", ... }
     }
   );
   ```

### Test

```bash
npm run test

# or, for watch mode:

npm run test -- --watchAll
```

### Build

```bash
npm run build
```
