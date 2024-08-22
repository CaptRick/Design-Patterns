const logger = require('./fancyLogger.js');

const logFirstImplementation = function() {
  logger.printLogCount()
  logger.log('First File')
  logger.printLogCount()
}

module.exports = logFirstImplementation;