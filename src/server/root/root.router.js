const apiRouter = require('./api/api.router');
const expressRouter = require('express').Router;
const rootController = require('./root.controller');
const rootMiddleware = require('./root.middleware');

class RootRouter {

    create() {

        let route = expressRouter();

        route.use(rootMiddleware.processRootMiddleware.bind(rootMiddleware));

        route.route('/')
            .get(rootController.get.bind(rootController))
            .post(rootController.post.bind(rootController))
            .put(rootController.put.bind(rootController))
            .delete(rootController.delete.bind(rootController));

        route.use('/api', apiRouter.create());

        return route;
    }
}

module.exports = new RootRouter();