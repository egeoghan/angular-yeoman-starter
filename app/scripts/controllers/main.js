'use strict';

/**
 * @ngdoc function
 * @name sonosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sonosApp
 */
angular.module('sonosApp')
  .controller('MainCtrl', function($scope) {
    $scope.locations = [{
      lat: '53.3498',
      long: '6.26036'
    },{
      lat: '34.6779',
      long: '-76.9508'
    }];

  }).directive('locationBlock', function(weatherService){
    return {
      restrict:'A',
      replace:true,
      scope:{
        lat: '=lat',
        long: '=long'
      },
      link:function(scope){
        weatherService.getWeatherByLocation(scope.lat, scope.long).then(function(data) {
          scope.tit = data;
          console.log(data);
        });
      },
      templateUrl:'views/locationBlock.html'
    };
  });
