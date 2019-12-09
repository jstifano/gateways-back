/**
 * Unit tests for Gateway services
 */

const assert = require('assert');
const Gateway = require('../models/Gateway');
const GatewayService = require('../services/Gateway');
const responseMsg = require('../data/response-msg');

describe('Test for Gateway Controller', function() {
    
    describe('#Crete Gateway Service', function() {
        
        it('The gateway is created succesfully.', function() {
            let newGateway = {
                name: 'Testing the gateway',
                ipv4: '191.31.52.67'
            };
            GatewayService.add(newGateway)
            .then(response => {
                assert.equal(response.msg, responseMsg.newGatewayCreated);
            })
        })

        it('The gateway cannot be created successfully.', function() {
            let newGateway = {
                name: '',
                ipv4: '---'
            };
            GatewayService.add(newGateway)
            .then(response => {
                assert.equal(response.msg, responseMsg.invalidParams);
            })
        });
    });
});
