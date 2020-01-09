const expressRouter = require('express').Router;
const apiController = require('./api.controller');
const userRouter = require('./user/user.router');

class ApiRouter {

    create() {
        let route = expressRouter();

        route.route('/')
            .get(apiController.get)
            .post(apiController.post)
            .put(apiController.put)
            .delete(apiController.delete);

        route.use('/user', userRouter.create());

        return route;
    }

    get(req, res, next) {
        res.json({
            message: 'Hello Cioco-Sudoku'
        });
    }
}

module.exports = new ApiRouter();