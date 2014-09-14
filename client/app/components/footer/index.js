'use strict';

var angular = require('angular');

/**
 *  This module controls the footer for the application
 *
 *  @type {Module}
 */
module.exports = angular.module('codebeard.components.footer', [])
  .controller('FooterController', require('./footer.controller'));