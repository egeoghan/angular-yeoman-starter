'use strict';

angular.module('weatherApp')
  .directive('itineraryCard', function($scope, locationService) {

    var locationController = function(data) {
        // console.log(data);
        // var lat = data.results[0];
      console.log();

      locationService.parseLocationInfo(data).then();
    };
    return {
      restrict: 'E',
      scope: {
        card: '='
      },
      controller: locationController,
      templateUrl: 'views/itinerary.html'
    };
  });
