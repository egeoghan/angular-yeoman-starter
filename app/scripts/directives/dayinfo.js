'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:dayInfo
 * @description
 * # dayInfo
 */
angular.module('weatherApp')
  .directive('dayInfo', function (iconService) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        day: '='
      },
      link: function (scope, element){
        var elementToAdd = element[0].children[1].children[0];
        iconService.addIcon(elementToAdd, scope.day.icon);
      },
      templateUrl: 'views/dayInfo.html'
    };
  });
