/**
 * Unit tests for Gateway services
 */

const assert = require('assert');
const Gateway = require('../models/Gateway');
const GatewayService = require('../services/Gateway');
const responseMsg = require('../data/response-msg');

describe('Tests for Gateway Controller:', () => {
    
    describe('POST /gateway', () => {
        
        it('1) The gateway is created succesfully.', () => {
            let newGateway = {
                name: 'Testing the gateway',
                ipv4: '191.31.52.67'
            };
            GatewayService.add(newGateway)
            .then(response => {
                assert.equal(response.msg, responseMsg.newGatewayCreated);
            })
        })

        it('2) The gateway cannot be created successfully.', () => {
            let newGateway = {
                name: '',
                ipv4: '---'
            };
            GatewayService.add(newGateway)
            .then(response => {
                assert.equal(response.msg, responseMsg.invalidParams);
            })
        });

        it('3) The IPV4 is not valid.', () => {
            let newGateway = {
                name: 'Testing bad gateway',
                ipv4: '0.25.999.54'
            };
            GatewayService.add(newGateway)
            .then(response => {
                assert.equal(response.msg, responseMsg.invalidIPV4);
            })
        });
    });
});
