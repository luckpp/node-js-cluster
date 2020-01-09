const express = require('express');
const cluster = require('cluster');
const Base = require('../infrastructure/base');
const serverConfig = require('../config/config').server;
const standardMiddleware = require('./middleware/standardMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');
const rootRouter = require('./root/root.router');

const cpusCount = require('os').cpus().length;

class Server extends Base {

    constructor() {
        super();
        this.logger.info(`[${process.pid}] Server created`);
        this.epressApps = [];
        this.workers = [];
    }

    start(clusterMode) {
        if (clusterMode) {
            this.startClusterMode();
        } else {
            this.startNormalMode();
        }
    }

    startClusterMode() {
        if (cluster.isMaster) {
            this.startMaster();
        } else {
            this.startWorker();
        }
    }

    startNormalMode() {
        this.startWorker();
    }

    startMaster() {
        this.logger.info(`Master started in process id [${process.pid}]`);
        for (let i = 0; i < cpusCount; i++) {
            let worker = cluster.fork();
            this.logger.info(`Worker ${worker.id} started started from process id [${process.pid}]`);
            worker.on('disconnect', () => {
                this.logger.info(`Worker ${worker.id} died`);
            });
            this.workers.push(worker);
        }
    }

    async startWorker() {
        let app = express();

        standardMiddleware.attachTo(app);
        app.use('/', rootRouter.create());
        errorMiddleware.attachTo(app);
        
        await this.startListening(app);

        this.epressApps.push(app);
    }

    startListening(app) {
        return new Promise((resolve, reject) => {
            if (serverConfig && serverConfig.port) {
                let server = app.listen(serverConfig.port);
                server.on('error', (err) => {
                    this.logger.info(`Could not start server: ${err}`);
                    reject(err);
                });
                server.on('listening', () => {
                    this.logger.info(`[${process.pid}] Server started on http://localhost:${serverConfig.port}`);
                    resolve();
                });
            } else {
                reject(new Error(`serverConfig is not properly defined: ${JSON.stringify(serverConfig)}`));
            }
        });
    }
}

module.exports = Server;