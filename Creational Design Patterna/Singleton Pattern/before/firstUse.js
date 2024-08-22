const logger = require('./fancyLogger.js');

const log = new logger()

const logFirstImplementation = function() {
  log.printLogCount()
  log.log('First file')
  log.printLogCount()
}

module.exports = logFirstImplementation;
