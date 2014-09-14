'use strict';

var angular = require('angular');

/**
 *  This module contains ui directives
 *
 *  @type {Module}
 */
module.exports = angular.module('codebeard.components.ui', [])
  .directive('appDevSkill', require('./dev-skill/dev-skill.directive'))
  .directive('appScrollTo', require('./scroll-to/scroll-to.directive'));