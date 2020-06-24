# Jest create-react-app Playwright example with coverage

[![Coverage Status](https://coveralls.io/repos/github/playwright-community/playwright-jest-examples/badge.svg)](https://coveralls.io/github/playwright-community/playwright-jest-examples)

This example shows how to use the [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul) to determine coverage data during the runtime with your end-to-end tests which will be stored onto the file system. In the end they will be merged with the different browsers and uploaded to Coveralls with a GitHub Action. Keep in mind, that Coveralls or Codecov only have partial / no support for partial line coverage.

You are able to view the coverage in your browser with the `npx nyc report --reporter=html` command which is then available in the coverage folder `coverage/index.html`.

## Showcases

- [App.test.ts](https://github.com/playwright-community/playwright-jest-examples/blob/master/create-react-app-coverage/src/App.test.ts) - Full covered React application which shows how tracked functions will look like

## Used tools

- [jest-playwright](https://github.com/playwright-community/jest-playwright) - integrates Jest and Playwright
- [expect-playwright](https://github.com/playwright-community/expect-playwright) - provides useful expect statements
- [Jest](https://jestjs.io) - provides the testing suite
- [ts-jest](https://github.com/kulshekhar/ts-jest) - provides support for TypeScript
- [create-react-app](https://create-react-app.dev) - tooling and bundling for React
- [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul) - to add coverage information
- [nyc](https://github.com/istanbuljs/nyc) - Istanbul CLI to generate lcov coverage