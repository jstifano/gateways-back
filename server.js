/*******************************************
* REST Api for test of Musala Soft company *
* @author:: Javier Stifano                 *
********************************************/ 

const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { appConfig } = require('./config');

// Allow access to the resquest body.
server.use(bodyParser.json());

// Allow access to the url params
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(cors());

// Import the routes
const gatewayRoutes = require('./routes/Gateway');
const deviceRoutes = require('./routes/Device');

// Include the routes inside the server
server.use(appConfig.apiEndpoint, gatewayRoutes);
server.use(appConfig.apiEndpoint, deviceRoutes);

module.exports = server;