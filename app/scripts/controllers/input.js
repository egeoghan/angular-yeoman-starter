'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:dayInfo
 * @description
 * # dayInfo
 */
angular.module('weatherApp')
  .controller('InputController', ['$scope', function($scope) {
      $scope.inputInfo = {
        text: 'erin',
        word: /^\s*\w*\s*$/
      };
    }]);
