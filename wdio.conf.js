module.exports = {
  config: {
    specs: ['./test/features/*.feature.ts'],
    capabilities: [
      {
        browserName: 'chrome'
      }
    ],
    sync: true,
    logLevel: 'error',
    coloredLogs: true,
    framework: 'mocha',
    reporters: ['spec'],
    services: ['selenium-standalone'],
    before: function(capabilities, specs) {
      const chai = require('chai');
      global.expect = chai.expect;
    }
  }
};
