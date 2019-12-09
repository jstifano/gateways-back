'use strict'

const DeviceService = require('../services/Device');
const UtilsService = require('../services/Utils');
const responseMsg = require('../data/response-msg');

/**
 * Controller to get all the gateways with devices
 * @params
 * vendor ::: Name of the device.
 * status ::: Device's status (Online or Offline).
 * gateway_id ::: Gateway id where the device belongs.
 */
const addDevice = async (req, res) => {
    console.log(`Request POST ::: add /device`);
    if(!req.body.vendor || !req.body.status || !req.body.gateway_id || !UtilsService.isValidStatus(req.body.status)){
        return res.json(ResponseService.craftErrorResponseObj({}, responseMsg.invalidParams, 400));
    }
    else {
        let response = await DeviceService.add(req.body);
        return res.json(response);
    }
}

/**
 * Controller to get a gateway by IPV4
 * @param
 * id ::: Device id to be deleted.
 */
const deleteDeviceById = async (req, res) => {
    console.log(`Request POST ::: delete --> /device/${req.params.id}`);
    let response = await DeviceService.deleteDevice(req.params.id);
    return res.json(response);
}

module.exports = {
    addDevice: addDevice,
    deleteDeviceById: deleteDeviceById
}