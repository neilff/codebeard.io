'use strict';

var _ = require('lodash');

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
module.exports = function WorkListController($scope, Work) {
  $scope.projects = Work;
};