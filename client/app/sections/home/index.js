'use strict';

var angular = require('angular');

/**
 *  This module represents the home section.
 *
 *  @type {Module}
 */
module.exports = angular.module('codebeard.sections.home', [])
  .controller('HomeController', require('./home.controller'));