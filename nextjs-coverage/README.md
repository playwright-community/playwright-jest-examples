# Jest Next.js Playwright example with coverage

This example shows how to use the [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul) to determine coverage data during the runtime with your end-to-end tests which will be stored onto the file system.

You are able to view the coverage in your browser with the `npx nyc report --reporter=html` command which is then available in the coverage folder `coverage/index.html`.

## Showcases

- [App.test.ts](https://github.com/playwright-community/playwright-jest-examples/blob/main/nextjs-coverage/src/components/App.test.ts) - Full covered React application which shows how tracked functions will look like

## Used tools

- [jest-playwright](https://github.com/playwright-community/jest-playwright) - integrates Jest and Playwright
- [expect-playwright](https://github.com/playwright-community/expect-playwright) - provides useful expect statements
- [Jest](https://jestjs.io) - provides the testing suite
- [babel-jest](https://www.npmjs.com/package/babel-jest) - provides support for TypeScript
- [next.js](https://nextjs.org/) - a React framework
- [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul) - to add coverage information
- [nyc](https://github.com/istanbuljs/nyc) - Istanbul CLI to generate lcov coverage