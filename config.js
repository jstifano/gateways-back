/**
 * Main route to access the API services
 */
const config = {
    appConfig: {
        apiEndpoint: '/api',
        port: process.env.APP_PORT,
        mongoUrl: 'mongodb://localhost:27017/gateways_db'
    }
}

module.exports = config;