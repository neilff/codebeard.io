'use strict';

/**
 *  This directive produces a percentage bar using the
 *  injected score properties.
 *
 *  @method module
 *
 *  @return {Directive}
 */
module.exports = function appDevSkill() {
  return {
    restrict: 'A',
    scope: {
      title: '@',
      score: '@'
    },
    templateUrl: 'app/components/ui/dev-skill/dev-skill.html',
    link: function($scope, elem) {
      elem.find('span').css('width', $scope.score + '%');
    }
  };
};