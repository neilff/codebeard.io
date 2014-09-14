'use strict';

var angular = require('angular');

/**
 *  This module controls the menu for the application
 *
 *  @type {Module}
 */
module.exports = angular.module('codebeard.components.menu', [])
  .controller('MenuController', require('./menu.controller'));