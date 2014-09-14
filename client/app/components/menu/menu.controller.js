'use strict';

/**
 *  This module exports the controller responsible
 *  for controlling the menu.
 *
 *  @method exports
 *
 *  @param  {Provider} $scope
 *  @param  {Service} Content
 *
 *  @return {Controller}
 */
module.exports = function MenuController($scope, Content) {
  $scope.menu = Content.menuLinks;
}