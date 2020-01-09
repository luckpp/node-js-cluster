let config = {
    server: {
        port: process.env.PORT | 3123
    },
    db: {
        url: 'mongodb://localhost:27017/node-js-cluster',
    },
    logger: {
        level: 'debug'
    }
}

module.exports = config;