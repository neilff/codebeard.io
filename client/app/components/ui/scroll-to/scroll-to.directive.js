'use strict';

var $ = require('jquery');

/**
 *  This directive will scroll to the provided element ID
 *
 *  @method module
 *
 *  @return {Directive}
 */
module.exports = function appScrollTo() {
  return {
    restrict: 'A',
    scope: {
      target: '@'
    },
    link: function($scope, elem) {
      elem.on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
      });
    }
  };
};