'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:dayInfo
 * @description
 * # dayInfo
 */
angular.module('weatherApp')
  .directive('dayInfo', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        day: '='
      },
      templateUrl: 'views/dayInfo.html'
    };
  });
