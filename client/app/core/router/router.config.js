'use strict';

/**
 *  This module is a configuration for the Angular UI Router
 *
 *  @method exports
 *
 *  @param  {Provider} $urlRouterProvider
 *  @param  {Provider} $stateProvider
 *
 *  @return {Config}
 */
module.exports = /* @ngInject */ function RouterConfig($urlRouterProvider, $stateProvider) {

  /**
   *  Config Default Route
   */
  $urlRouterProvider.otherwise('/');

  /**
   *  Configure Routes / States
   */
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/sections/home/home.html',
      controller: 'HomeController as Home'
    })
    .state('work', {
      url: '/work',
      abstract: true,
      template: '<div ui-view></div>'
    })
    .state('work.list', {
      url: '/list',
      templateUrl: 'app/sections/work/list/list.html',
      controller: 'WorkListController'
    })
    .state('work.details', {
      url: '/:_id',
      templateUrl: 'app/sections/work/details/details.html',
      controller: 'WorkDetailsController'
    });
};