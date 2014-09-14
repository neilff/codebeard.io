'use strict';

var data = require('./work');

/**
 *  This module returns the work service, which returns
 *  the array in work.json.
 *
 *  @method exports
 *
 *  @return {Service}
 */
module.exports = /* @ngInject */ function Work() {
  return data;
};