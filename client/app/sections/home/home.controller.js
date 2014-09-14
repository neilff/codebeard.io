'use strict';

var _ = require('lodash');

/**
 *  This module exports a controller that is used on the home page
 *
 *  @method exports
 *
 *  @param  {Provider} $scope
 *  @param  {Service} Content
 *
 *  @return {Controller}
 */
module.exports = /* @ngInject */ function HomeController($scope, Content) {

  /**
   *  Simple function for traveling to the resume location
   *
   *  @method travelToBottom
   *
   *  @return {undefined}
   */
  // function travelToBottom() {
  //   $location.hash('resume');
  //   $anchorScroll();
  // }

  /**
   *  Attach scope methods and properties
   */
  _.extend($scope, {
    content: Content.aboutContent,
    credentials: Content.aboutContent.credentials,
    skills: Content.aboutContent.skills
  });
};