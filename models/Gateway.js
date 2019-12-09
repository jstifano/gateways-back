'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Atributes
 *  ID --> Object ID created by MongoDB
 *  name --> human-readable name for the gateway.
 *  ipv4 --> IPv4 address.
 *  devices --> All the peripheral devices associated with the gateway.
 */

const GatewaySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ipv4: {
        type: String,
        required: true
    },
    devices: {
        type: Array
    }
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'date_created',
        updatedAt: false
    },
    updateAt: false
});

module.exports = mongoose.model('Gateway', GatewaySchema);