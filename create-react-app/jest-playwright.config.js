// https://github.com/playwright-community/jest-playwright/#configuration
module.exports = {
    browsers: ['chromium', 'firefox', 'webkit'],
    server: {
        command: `npm start`,
        port: 3000,
        launchTimeout: 10000,
        debug: true,
    },
    launchBrowserApp: {
        headless: true
    }
}
