'use strict';

var angular = require('angular');

/**
 *  This module loads the content for the home page
 *
 *  @type {Module}
 */
module.exports = angular.module('codebeard.core.content', [])
  .factory('Content', require('./content.service'));