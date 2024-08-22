const logger = require('./fancyLogger.js')

const logSecondImplementation = function() {
  logger.printLogCount()
  logger.log('Second File')
  logger.printLogCount()
}

module.exports = logSecondImplementation;
