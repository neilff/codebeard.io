'use strict';

var content = require('./content');

/**
 *  This module exports the content factory service, it
 *  loads all the content from the content.json file.
 *
 *  @method exports
 *
 *  @return {Service}
 */
module.exports = function Content() {
  return content;
};