'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:weatherCard
 * @description
 * # weatherCard
 */
angular.module('weatherApp')
.directive('weatherCard', function(weatherService) {
  var myController = function($scope) {

    function getWeatherHandler(data) {
      var currentDay = data.daily.data[0];
      var dataToPush = {
        time: moment.unix(currentDay.time).utcOffset(data.offset).format('M/D'),
        icon: currentDay.icon,
        temperatureMax: currentDay.apparentTemperatureMax,
        summary: currentDay.summary
      };

      $scope.card.weatherData.daily.push(dataToPush);

      $scope.card.daysReceived++;
      if($scope.card.daysReceived === $scope.card.numberOfDays){
        $scope.card.weatherData.daily.sort(function(a,b) {
          return (moment(a.time).diff(b.time)>0) ? 1 : ((moment(b.time).diff(a.time)<0) ? -1 : 0);
        });

        $scope.card.loaded = true;
      }
    }

    function init() {
      var currentDate = moment($scope.card.dateRange.startDate);
      var endDate = moment($scope.card.dateRange.endDate);
      $scope.card.numberOfDays = endDate.diff(currentDate, 'days');
      $scope.card.daysReceived = 0;

      while (currentDate.format('X') <= endDate.format('X')) {
        var dayString = currentDate.format('X');
        weatherService.getWeatherByLocation($scope.card.latitude, $scope.card.longitude, dayString)
        .then(getWeatherHandler);
        console.log(dayString);
        currentDate = currentDate.add(1, 'day');
      }
    }

    init();
  };

  return {
    restrict: 'E',
    scope: {
      card: '='
    },
    controller: myController,
    templateUrl: 'views/weatherCard.html'
  };
});
