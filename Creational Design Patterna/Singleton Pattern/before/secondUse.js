const logger = require('./fancyLogger.js')
const log = new logger()

const logSecondImplementation = function() {
  log.printLogCount()
  log.log('Second file')
  log.printLogCount()
}

module.exports = logSecondImplementation;
