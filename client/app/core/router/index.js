'use strict';

var angular = require('angular');
var angularRouter = require('angular-ui-router');

/**
 *  This module contains the router for the application
 *
 *  @type {Module}
 */
module.exports = angular.module('codebeard.core.router', [
    angularRouter
  ])
  .config(require('./router.config'))
  .factory('Router', require('./router.service'));