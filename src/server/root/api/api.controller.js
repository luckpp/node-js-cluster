class ApiController {

    get(req, res, next) {
        res.json({
            message: 'GET api.controller'
        });
    }

    post(req, res, next) {
        res.json({
            message: 'POST api.controller'
        });
    }

    put(req, res, next) {
        res.json({
            message: 'PUT api.controller'
        });
    }

    delete(req, res, next) {
        res.json({
            message: 'DELETE api.controller'
        });
    }

}

module.exports = new ApiController();