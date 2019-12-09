'use strict'

const express = require('express');
const DeviceController = require('../controllers/Device');
const api = express.Router();

api.post('/device', DeviceController.addDevice);
api.delete('/device/:id', DeviceController.deleteDeviceById);

module.exports = api;