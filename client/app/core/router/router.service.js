'use strict';

/**
 *  This module exports the Router factory service.
 *  It provides helper functions for interacting with
 *  $stateParams.
 *
 *  @method exports
 *
 *  @return {Service}
 */
module.exports = /* @ngInject */ function Router($stateParams) {

  /**
   *  Get project id from $stateParams
   *
   *  @method getProjectId
   *
   *  @return {String}
   */
  function getProjectId() {
    return $stateParams._id;
  }

  return {
    getProjectId: getProjectId
  };
};