'use strict';

const Device = require('../models/Device');
const Gateway = require('../models/Gateway');
const ResponseService = require('../services/Response');
const UtilsService = require('../services/Utils');
const responseMsg = require('../data/response-msg');
let ObjectId = require('mongoose').Types.ObjectId;

/**
 * Service to add a new device to a gateway
 */
const add = async (data) => {
    let gateway = await Gateway.findOne({_id: ObjectId(data.gateway_id)});
    if(gateway){
        if(gateway.devices.length === 10){
            return ResponseService.craftOkResponseObj({}, responseMsg.allowedDevices, 202);
        }
        else if(!UtilsService.isValidStatus(data.status)){
            return ResponseService.craftOkResponseObj({}, responseMsg.invalidStatus, 202);    
        }
        else {
            let newDevice = {
                vendor: data.vendor,
                status: data.status,
                gateway: gateway
            }
            let device = await Device.create(newDevice);
            newDevice._id = device._id;
            delete newDevice.gateway;
            let resultUpdated = await Gateway.updateOne({ _id: ObjectId(data.gateway_id) }, { $push: {devices: device} } );
            return ResponseService.craftOkResponseObj(newDevice, responseMsg.deviceCreated, 202);
        }
    }
    else {
        return ResponseService.craftErrorResponseObj({}, responseMsg.noGatewayFound, 204);    
    }
}

/**
 * Service to delete a device from a gateway
 */
const deleteDevice = async (id) => {
    let response = null;
    const device = await Device.findOne({_id: ObjectId(id)});
    const deletedDevice = await Device.deleteOne({_id: ObjectId(id)});
    await Gateway.updateOne(
        { _id: ObjectId(device.gateway._id) }, 
        { $pull: { 
            devices: { 
                _id: ObjectId(device._id)
            } 
        } 
    });

    if(device){
        response = await ResponseService.craftOkResponseObj(device, responseMsg.gatewayDeleted, 200);
    }
    else {
        response = await ResponseService.craftErrorResponseObj(device, responseMsg.noGatewayFound, 400);    
    }
    return response;
}

module.exports = {
    add: add,
    deleteDevice: deleteDevice
}