class UserController {

    get(req, res, next) {
        res.json({
            message: 'GET user.controller'
        });
    }

    post(req, res, next) {
        res.json({
            message: 'POST user.controller'
        });
    }

    put(req, res, next) {
        res.json({
            message: 'PUT user.controller'
        });
    }

    delete(req, res, next) {
        res.json({
            message: 'DELETE user.controller'
        });
    }

}

module.exports = new UserController();