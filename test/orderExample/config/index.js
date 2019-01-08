'use strict';
const _ = require('lodash');
const path = require('path');

let config = {
  middleware: {}
};


try {
  let envConfig = require('./config');
  config = _.merge(config, envConfig);
} catch (e) {
  if (e.code !== 'MODULE_NOT_FOUND') {
    console.log('[ERROR] base framework loading config/config.js error', e.message); // eslint-disable-line
  }
}

module.exports = config;
