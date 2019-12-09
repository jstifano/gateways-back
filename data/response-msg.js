const responseMsg = {
    invalidParams: 'Invalid params.',
    invalidId: 'Invalid id',
    invalidIPV4: 'Invalid ipv4.',
    allowedDevices: 'No more than 10 peripheral devices are allowed for a gateway.',
    invalidStatus: 'The status must be Online or Offline.',
    deviceCreated: 'Device created succesfully',
    noGatewayFound: 'No gateway found.',
    gatewayDeleted: 'Gateway deleted.',
    gateways: 'Get gateways successfully.',
    gatewayFound: 'Gateway found.',
    newGatewayCreated: 'New gateway created successfully.',
    gatewayNotCreated: 'The gateway couldn\'t be created',
}

module.exports = {
    invalidParams: responseMsg.invalidParams,
    invalidId: responseMsg.invalidId,
    invalidIPV4: responseMsg.invalidIPV4,
    allowedDevices: responseMsg.allowedDevices,
    invalidStatus: responseMsg.invalidStatus,
    deviceCreated: responseMsg.deviceCreated,
    noGatewayFound: responseMsg.noGatewayFound,
    gatewayDeleted: responseMsg.gatewayDeleted,
    gateways: responseMsg.gateways,
    gatewayFound: responseMsg.gatewayFound,
    newGatewayCreated: responseMsg.newGatewayCreated,
    gatewayNotCreated: responseMsg.gatewayNotCreated
}