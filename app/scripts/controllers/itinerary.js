'use strict';
//
// /**
//  * @ngdoc function
//  * @name weatherApp.controller:AboutCtrl
//  * @description
//  * # AboutCtrl
//  * Controller of the weatherApp
//  */
angular.module('weatherApp')
   .controller('ItineraryCtrl', function($scope, locationService, weatherService, myController) {
    //  locationService.getLatLong($scope.location1).then(function(data){console.log(data);});
     $scope.locations = {
       text: 'guest',
       word: /^\s*\w*\s*$/
     };
     $scope.setLocation = function(){
       console.log($scope.location1);
      //  locationService.formatLocation($scope.location1);
      locationService.getLocationInfo($scope.location1).then(function(data){$scope.parseLocationInfo(data);});
     };

     $scope.parseLocationInfo = function(data) {
       console.log(data);
       var lat = data.results[0].geometry.location.lat;
       var long = data.results[0].geometry.location.lng;
       console.log(lat);
       console.log(long);
       weatherService.getWeatherByLocation(lat,long,'1475208000').then(console.log(data));
       myController.getWeatherHandler(data);
     };

   });
