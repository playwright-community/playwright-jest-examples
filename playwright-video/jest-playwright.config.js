// https://github.com/playwright-community/jest-playwright/#configuration
module.exports = {
  browsers: ["chromium"],
  launchType: "LAUNCH",
  launchOptions: {
    headless: true
  },
  contextOptions: {
    recordVideo: {
      dir: 'videos/'
    }
  }
}