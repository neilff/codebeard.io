'use strict';

/**
 *  This module exports the controller used to display a
 *  list of work.
 *
 *  @method exports
 *
 *  @param  {Provider} $scope
 *  @param  {Service} Work
 *
 *  @return {Controller}
 */
module.exports = /* @ngInject */ function WorkListController($scope, Work) {
  $scope.projects = Work;
};