module.exports = {
  config: {
    specs: ['test/features/*.feature.js']
  },
  capabilities: [
    {
      browserName: 'chrome',
      chromeOptions: {
        // to run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        // args: ['--headless', '--disable-gpu'],
      }
    }
  ],
  sync: true,
  logLevel: 'verbose',
  coloredLogs: true,
  framework: 'mocha',
  services: ['selenium-standalone'],
  before: function(capabilities, specs) {}
};
