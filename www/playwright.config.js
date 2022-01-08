// https://github.com/playwright-community/jest-playwright/#configuration
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
  testDir: `tests`,
  retries: 1,
  reporter: [
      ["dot"],
      ["junit", { outputFile: "junit.xml" }],
  ],
  reportSlowTests: null,
  timeout: 200000,
};
