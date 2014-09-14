'use strict';

/**
 *  This module exports the twitter service, this factory
 *  will provide methods to work with the Twitter API
 *
 *  @method exports
 *
 *  @return {Service}
 */
module.exports = /* @ngInject */ function Twitter(Server) {

  /**
   *  This function will return the latest tweet
   *
   *  @method getLatestTweet
   *
   *  @return {Promise}
   */
  function getLatestTweet() {
    return Server.jsonp('/twitter/getlasttweet');
  }

  return {
    getLatestTweet: getLatestTweet
  };
};