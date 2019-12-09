'use-strict';

const Gateway = require('../models/Gateway');
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
    }
]

/**
 * Service to seed the db with test data
 */
const seed = async () => {
    let client = await mongoose.connect(appConfig.mongoUrl,  {useUnifiedTopology: true, useNewUrlParser: true });
    let result = await Gateway.insertMany(gateways);
    if(result){
        console.log("DB Seeded successfully!");
        process.exit();
    }
}

seed();