'use strict';

var _ = require('lodash');

/**
 *  This module exports the controller for the footer
 *
 *  @method exports
 *
 *  @param  {Provider} $scope
 *  @param  {Service} Twitter
 *  @param  {Service} Content
 *
 *  @return {Controller}
 */
module.exports = function FooterController($scope, Twitter, Content) {

  /**
   *  On init, get the latest twitter status
   *
   *  @method init
   *
   *  @return {undefined}
   */
  function init() {
    Twitter.getLatestTweet()
      .then(function(response) {
        $scope.twitter = response.result[0];
        console.log($scope.twitter);
      })
      .then(null, function(err) {
        $scope.twitter = 'Unable to get latest tweet.';
      });
  }

  /**
   *  Attach scope properties and methods
   */
  _.extend($scope, {
    footerLinks: Content.footerLinks,
    footerCopyright: Content.footerCopyright,
    contact: Content.contact,
    currentlyWorking: Content.currentlyWorking
  });

  init();
}