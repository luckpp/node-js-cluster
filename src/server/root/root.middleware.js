const Base = require('../../infrastructure/base');

class RootMiddleware extends Base {
    processRootMiddleware(req, res, next) {
        this.logger.info('RootMiddleware.processRootMiddleware')
        next();
    }
}

module.exports = new RootMiddleware();