'use strict';

var angular = require('angular');

/**
 *  This module exports the required controllers for work
 *  details and list views.
 *
 *  @type {Module}
 */
module.exports = angular.module('codebeard.sections.work', [])
  .controller('WorkDetailsController', require('./details/details.controller.js'))
  .controller('WorkListController', require('./list/list.controller.js'));