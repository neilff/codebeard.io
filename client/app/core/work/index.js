'use strict';

var angular = require('angular');

/**
 *  This module exports a factory service which contains
 *  the data to display work items.
 *
 *  @type {Module}
 */
module.exports = angular.module('codebeard.core.work', [])
  .factory('Work', require('./work.service'));