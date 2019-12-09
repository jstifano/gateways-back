'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Atributes
 *  vendor --> Device name called "vendor".
 *  status --> "Online" or "Offline",
 *  gateway --> Associaton with the gateway belong.
 */
const DeviceSchema = new Schema({
    vendor: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    gateway: Object
}, {
    versionKey: false, 
    timestamps: {
        createdAt: 'date_created',
        updatedAt: false
    },
    updateAt: false
});

module.exports = mongoose.model('Device', DeviceSchema);