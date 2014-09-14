'use strict';

var angular = require('angular');

/**
 *  This module contains the server for the application
 *
 *  @type {Module}
 */
module.exports = angular.module('codebeard.core.server', [])
  .constant('API_BASE_URL', 'http://codebeard.io:3000')
  .factory('Server', require('./server.service'));