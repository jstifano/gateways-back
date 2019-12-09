'use strict'

const GatewayService = require('../services/Gateway');
const UtilsService = require('../services/Utils');
const ResponseService = require('../services/Response');
const responseMsg = require('../data/response-msg');

/**
 * Controller to get all the gateways with devices
 */
const getGateways = async (req, res) => {
    console.log(`Request GET ::: all --> /gateways`);
    let response = await GatewayService.getAllGateways();
    return res.json(response);
}

/**
 * Controller to get a gateway by ID
 * @params
 * id ::: Gateway id to find it.
 */
const getGatewayById = async (req, res) => {
    console.log(`Request GET ::: findOne --> /gateway/${req.params.id}`);
    let response = await GatewayService.findOneGatewayById(req.params.id);
    return res.json(response);
}

/**
 * Service to add a new gateway
 * @params
 * name ::: Gateway's name.
 * ipv4 ::: Ip associated to the gateway.
 */
const createGateway = async(req, res) => {
    console.log(`Request POST ::: add --> /gateway`);
    let response = await GatewayService.add(req.body);
    return res.json(response);   
}

module.exports = {
    getGateways: getGateways,
    getGatewayById: getGatewayById,
    createGateway: createGateway
}