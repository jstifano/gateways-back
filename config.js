/**
 * Config file to use in the whole app
 */
const config = {
    appConfig: {
        apiEndpoint: '/api',
        port: process.env.APP_PORT,
        mongoUrl: 'mongodb://localhost:27017/gateways_db'
    }
}

module.exports = config;