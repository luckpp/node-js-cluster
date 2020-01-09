const Base = require('../../infrastructure/base');

class RootController extends Base {

    get(req, res, next) {
        this.logger.info('RootController.get');
        res.json({
            message: 'GET root.controller'
        });
    }

    post(req, res, next) {
        res.json({
            message: 'POST root.controller'
        });
    }

    put(req, res, next) {
        res.json({
            message: 'PUT root.controller'
        });
    }

    delete(req, res, next) {
        res.json({
            message: 'DELETE root.controller'
        });
    }
}

module.exports = new RootController();