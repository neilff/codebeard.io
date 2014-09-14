'use strict';

var angular = require('angular');
var angularSanitize = require('angular-sanitize');

/**
 *  Require Core Modules
 */
var coreServer = require('./core/server');
var coreRouter = require('./core/router');
var coreWork = require('./core/work');
var coreContent = require('./core/content');
var coreTwitter = require('./core/twitter');

/**
 *  Require Component Modules
 */
var componentMenu = require('./components/menu');
var componentFooter = require('./components/footer');
var componentUi = require('./components/ui');

/**
 *  Require Section Modules
 */
var sectionHome = require('./sections/home');
var sectionWork = require('./sections/work');

angular.module('codebeard', [
    'ngSanitize',
    coreServer.name,
    coreRouter.name,
    coreWork.name,
    coreContent.name,
    coreTwitter.name,
    componentFooter.name,
    componentMenu.name,
    componentUi.name,
    sectionHome.name,
    sectionWork.name
  ])
  .run(function() {
    console.log('Application Online');
  });