// https://github.com/playwright-community/jest-playwright/#configuration
module.exports = {
    browsers: ['chromium', 'firefox', 'webkit'],
    serverOptions: {
        command: `npm start`,
        port: 3000,
        protocol: 'http',
        launchTimeout: 60000,
        debug: true,
    },
    launchOptions: {
        headless: true
    }
}
