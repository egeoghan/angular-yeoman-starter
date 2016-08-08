'use strict';
//
// /**
//  * @ngdoc function
//  * @name weatherApp.controller:AboutCtrl
//  * @description
//  * # AboutCtrl
//  * Controller of the weatherApp
//  */
angular.module('selectLocation', [])
   .controller('AboutCtrl', ['$scope', function($scope) {
     $scope.example = {
       text: 'guest',
       word: /^\s*\w*\s*$/
     };
   }]);
