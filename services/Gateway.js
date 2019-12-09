'use strict';

const Gateway = require('../models/Gateway');
const ResponseService = require('../services/Response');
const responseMsg = require('../data/response-msg');
let ObjectId = require('mongoose').Types.ObjectId;

/**
 * Service to make the query to the DB to get all the gateways
 */
const getAllGateways = async () => {
    const gateways = await Gateway.find();
    let response = null;
    
    if(gateways.length !== 0){
        response = await ResponseService.craftOkResponseObj(gateways, responseMsg.gateways, 200);
    }
    else {
        response = await ResponseService.craftErrorResponseObj([], responseMsg.noGatewayFound, 200);    
    }
    return response;
}

/**
 * Service to make the query to the DB to get a gateway by id
 */
const findOneGatewayById = async (id) => {
    let response = null;
    if(id.length === 12 || id.length === 24){
        const gateway = await Gateway.findOne({_id: ObjectId(id)}).select('-devices');

        if(gateway){
            response = await ResponseService.craftOkResponseObj(gateway, responseMsg.gatewayFound, 200);
        }
        else {
            response = await ResponseService.craftErrorResponseObj(gateway, responseMsg.noGatewayFound, 400);    
        }
        return response;
    }
    else {
        response = await ResponseService.craftErrorResponseObj({}, responseMsg.invalidId, 202);   
        return response;  
    }
}

const add = async (data) => {
    let newGateway = await Gateway.create(data);
    let response = null;

    if(newGateway){
        response = await ResponseService.craftOkResponseObj(newGateway, responseMsg.newGatewayCreated, 200);
    }
    else {
        response = await ResponseService.craftErrorResponseObj({}, responseMsg.gatewayNotCreated, 500);    
    }
    return response;
}

module.exports = {
    getAllGateways: getAllGateways,
    findOneGatewayById: findOneGatewayById,
    add: add
}