module.exports = {
  verbose: true,
  preset: 'jest-playwright-preset',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  // will be loaded soon per default in jest-playwright-preset
  "setupFilesAfterEnv": ["expect-playwright"]
}