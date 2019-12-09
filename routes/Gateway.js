'use strict'

const express = require('express');
const GatewayController = require('../controllers/Gateway');
const api = express.Router();

api.get('/gateways', GatewayController.getGateways);
api.get('/gateway/:id', GatewayController.getGatewayById);
api.post('/gateway', GatewayController.createGateway);

module.exports = api;