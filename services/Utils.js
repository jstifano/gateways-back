'use strict';

let regex_ipv4 = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/;

/**
 * Method to valid whether the ipv4 is valid
 * @param 
 * value ::: Ipv4 to be validate.
 */
const isValidIPV4 = (value) => {
    return regex_ipv4.test(value.toString());
}

/**
 * Method to valid whether the ipv4 is valid
 * @param 
 * value ::: Status of the peripheral devices.
 */
const isValidStatus = (value) => {
    return value === "Online" || value === "Offline";
}

module.exports = {
    isValidIPV4: isValidIPV4,
    isValidStatus: isValidStatus
}