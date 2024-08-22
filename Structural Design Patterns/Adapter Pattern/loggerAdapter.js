// Legacy logging system (Adaptee)
class LegacyLogger {
    logMessage(msg) {
      // Non-standard logging implementation
      console.log(`[Legacy] ${msg}`);
    }
  }
  
  // Modern logging system (Target Interface)
  class ModernLogger {
    log(msg) {
      // Standard logging implementation
      console.log(msg);
    }
  }
  
  // Adapter
  class LegacyToModernLoggerAdapter {
    constructor() {
      this.logger = new LegacyLogger();
    }
  
    log(msg) {
      this.logger.logMessage(msg);
    }
  }
  
  // Usage
  const logger = new ModernLogger(); // New logging system
  const legacyLoggerAdapter = new LegacyToModernLoggerAdapter(); // Adapter
  
  logger.log('This is a modern log'); // Logs using the modern logger
  legacyLoggerAdapter.log('This is a legacy log'); // Logs using the legacy logger through the adapter