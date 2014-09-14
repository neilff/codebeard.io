'use strict';

var _ = require('lodash');

/**
 *  This module exports the controller used to display the
 *  details of a work item.
 *
 *  @method exports
 *
 *  @param  {Provider} $scope
 *  @param  {Service} Work
 *
 *  @return {Controller}
 */
module.exports = /* @ngInject */ function WorkDetailsController($scope, Router, Work) {

  /**
   *  Build out the next and previous links on init
   *
   *  @method init
   *
   *  @return {undefined}
   */
  function init() {
    var idx = _.indexOf(Work, $scope.project);

    $scope.prev = (idx <= 0) ? ($scope.projects.length - 1) : (idx - 1);
    $scope.next = (idx >= ($scope.projects.length - 1)) ? 0 : (idx + 1);

    $scope.prev = $scope.projects[$scope.prev].id;
    $scope.next = $scope.projects[$scope.next].id;
  }

  /**
   *  Find the required project in the Work service
   *
   *  @method findProject
   *
   *  @return {undefined}
   */
  function findProject() {
    $scope.project = _.findWhere(Work, {id: Router.getProjectId()});
  }

  /**
   *  Attach scope methods and properties
   */
  _.extend($scope, {
    projects: Work,
    next: 'next',
    prev: 'prev'
  });

  findProject();
  init();
};