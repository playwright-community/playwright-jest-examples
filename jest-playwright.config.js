// https://github.com/playwright-community/jest-playwright/#configuration
module.exports = {
  browsers: ["chromium", "firefox", "webkit"],
  exitOnPageError: false, // GitHub currently throws errors
  launchOptions: {
    headless: true
  }
}

module.exports = {
  name: "e2e",
  use: {
      ignoreHTTPSErrors: true,
      userAgent: "",
      acceptDownloads: true,
      permissions: ["clipboard-read", "clipboard-write"],
      headless: true,
      args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--start-fullscreen",
          "--disable-gpu",
          "--shm-size=5g",
          "--disable-web-security",
      ],
      viewport: { width: 1680, height: 1240 },
      screenshot: "only-on-failure",
      video: "retain-on-failure",
  },
  testDir: `e2e_tests_and_monitoring/Admin/${testDirName}`,
  retries: 1,
  reporter: [
      ["dot"],
      ["junit", { outputFile: "junit.xml" }],
  ],
  reportSlowTests: null,
  timeout: 200000,
};
