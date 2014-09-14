'use strict';

var angular = require('angular');

/**
 *  This module contains the twitter service for the application
 *
 *  @type {Module}
 */
module.exports = angular.module('codebeard.core.twitter', [])
  .factory('Twitter', require('./twitter.service'));