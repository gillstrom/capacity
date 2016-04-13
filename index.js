'use strict';
const osxBattery = require('osx-battery');

module.exports = () => osxBattery().then(res => parseFloat((res.maxCapacity / res.designCapacity).toFixed(2)));
