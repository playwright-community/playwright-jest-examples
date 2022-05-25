// https://github.com/playwright-community/jest-playwright/#configuration
module.exports = {
    browsers: ['chromium', 'webkit', 'firefox'],
    serverOptions: {
        command: `npm start`,
        port: 3000,
        protocol: 'http',
        launchTimeout: 60000,
        debug: true,
        options: {
            env: {
                "BROWSER": "none",
                "USE_BABEL_PLUGIN_ISTANBUL": "TRUE",
            }
        }
    },
    launchOptions: {
        headless: true
    },
    collectCoverage: true
}
