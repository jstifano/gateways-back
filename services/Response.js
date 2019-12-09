'use strict';

/**
 * Service to handle response from DB
 * @params :::
 * data --> The data obtained after execution of query
 * message --> Message customized for the user
 * code --> HTTP code (Error or OK)
 */

const craftOkResponseObj = (data, message, code) => {
    if(!data) data = {};
    if(!message) message = '';
    return { data: data, msg: message, statusCode: code };
}

const craftErrorResponseObj = (error, message, code) => {
    if(!code) code = 500;
    if(!message) message = '';
    if(!error) error = 'Unknown Error';
    return { err: error, msg: message, statusCode: code };
}

module.exports = {
    craftOkResponseObj: craftOkResponseObj,
    craftErrorResponseObj: craftErrorResponseObj
}