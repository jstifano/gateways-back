'use-strict';

const Gateway = require('../models/Gateway');
const Device = require('../models/Device');
const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const { appConfig } = require('../config');

const gateways = [
    {
        name: "Gateway 1",
        ipv4: "192.168.2.26",
        devices: [
            {
                _id: new ObjectID(),
                vendor: 'Device 1',
                status: 'Online'
            },
            {
                _id: new ObjectID(),
                vendor: 'Device 2',
                status: 'Offline'
            },
            {
                _id: new ObjectID(),
                vendor: 'Device 3',
                status: 'Online'
            },
            {
                _id: new ObjectID(),
                vendor: 'Device 4',
                status: 'Online'
            },
            {
                _id: new ObjectID(),
                vendor: 'Device 5',
                status: 'Offline'
            }
        ] 
    },
    {
        name: "Gateway 2",
        ipv4: "12.18.29.126",
        devices: [
            {
                _id: new ObjectID(),
                vendor: 'another device to test',
                status: 'Online'
            },
            {
                _id: new ObjectID(),
                vendor: 'testting device',
                status: 'Offline'
            }
        ] 
    },
    {
        name: "Full Gateway",
        ipv4: "200.10.39.33",
        devices: [
            {
                _id: new ObjectID(),
                vendor: 'a',
                status: 'Online'
            },
            {
                _id: new ObjectID(),
                vendor: 'b',
                status: 'Offline'
            },
            {
                _id: new ObjectID(),
                vendor: 'c',
                status: 'Online'
            },
            {
                _id: new ObjectID(),
                vendor: 'd',
                status: 'Online'
            },
            {
                _id: new ObjectID(),
                vendor: 'e',
                status: 'Offline'
            },
            {
                _id: new ObjectID(),
                vendor: 'f',
                status: 'Offline'
            },
            {
                _id: new ObjectID(),
                vendor: 'g',
                status: 'Offline'
            },
            {
                _id: new ObjectID(),
                vendor: 'h',
                status: 'Offline'
            },
            {
                _id: new ObjectID(),
                vendor: 'i',
                status: 'Offline'
            },
            {
                _id: new ObjectID(),
                vendor: 'j',
                status: 'Offline'
            }
        ] 
    },
]

/**
 * Service to seed the db with test data
 */
const seed = async () => {
    let client = await mongoose.connect(appConfig.mongoUrl,  {useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Seeding ...");    
    let result = await Gateway.insertMany(gateways);

    result.map( async (elm, idGateway) => {
        elm.devices.map( async (device, idDevice) => {
            let gateway = {
                _id: elm._id,
                name: elm.name,
                ipv4: elm.ipv4,    
            }
            device.gateway = gateway;
            let deviceCreated = await Device.create(device);
            return deviceCreated;
        })
        return elm;
    })

    setTimeout(() => {
        console.log("DB Successfully seeded.");
        process.exit();
    }, 9000);
}

seed();