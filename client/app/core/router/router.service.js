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
module.exports = function Router() {

  function getId() {
    return 'hello world';
  }

  return {
    getId: getId
  };
};