'use strict';

/**
 *  This module exports the server service, this service
 *  abstracts $http methods.
 *
 *  @method exports
 *
 *  @return {Service}
 */
module.exports = /* @ngInject */ function Server($http, API_BASE_URL) {

  /**
   *  Wrapper for $http.get
   *
   *  @method get
   *
   *  @param  {String} path API Endpoint
   *  @param  {Object} config Configuration object
   *
   *  @return {Promise}
   */
  function get(path, config) {
    return $http.get(API_BASE_URL + path, config)
      .then(function(response) {
        return response.data;
      });
  }

  /**
   *  Wrapper for $http.post
   *
   *  @method post
   *
   *  @param  {String} path API Endpoint
   *  @param  {Object} params Params to be passed with request
   *  @param  {Object} config Configuration object
   *
   *  @return {Promise}
   */
  function post(path, params, config) {
    return $http.post(API_BASE_URL + path, params, config)
      .then(function(response) {
        return response.data;
      });
  }

  /**
   *  Wrapper for $http.jsonp
   *
   *  @method jsonp
   *
   *  @param  {String} path API Endpoint
   *  @param  {Object} config Configuration object
   *
   *  @return {Promise}
   */
  function jsonp(path, config) {
    config = config || {};

    config.params = config.params || {};
    config.params.callback = 'JSON_CALLBACK';

    return $http.jsonp(API_BASE_URL + path, config)
      .then(function(response) {
        return response.data;
      });
  }

  return {
    get: get,
    post: post,
    jsonp: jsonp
  };
};

