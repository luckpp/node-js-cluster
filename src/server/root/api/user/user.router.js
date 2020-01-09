const expressRouter = require('express').Router;
const userController = require('./user.controller');

class UserRouter {

    create() {
        let route = expressRouter();

        route.route('/')
            .get(userController.get)
            .post(userController.post)
            .put(userController.put)
            .delete(userController.delete);

        return route;
    }
}

module.exports = new UserRouter();