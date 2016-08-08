'use strict';

/**
 * @ngdoc function
 * @name weatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherApp
 */
angular.module('weatherApp')
  .controller('MainCtrl', function($scope) {

    function initWeatherCards() {
      var formatString = 'D MMMM YYYY';

      $scope.weatherCards = [];
      $scope.weatherCards[0] = {};
      $scope.weatherCards[0].city = 'Dublin';
      $scope.weatherCards[0].country = 'Ireland';
      $scope.weatherCards[0].latitude = '53.3498';
      $scope.weatherCards[0].longitude = '-6.26036';
      $scope.weatherCards[0].dateRange = {};
      $scope.weatherCards[0].dateRange.startDate = moment('2016-09-30').format(formatString);
      $scope.weatherCards[0].dateRange.endDate = moment('2016-10-04').format(formatString);
      $scope.weatherCards[0].weatherData = {};
      $scope.weatherCards[0].weatherData.daily = [];

      $scope.weatherCards[1] = {};
      $scope.weatherCards[1].city = 'Glasgow';
      $scope.weatherCards[1].country = 'Scotland';
      $scope.weatherCards[1].latitude = '55.8642';
      $scope.weatherCards[1].longitude = '-4.2518';
      $scope.weatherCards[1].dateRange = {};
      $scope.weatherCards[1].dateRange.startDate = moment('2016-10-05').format(formatString);
      $scope.weatherCards[1].dateRange.endDate = moment('2016-10-07').format(formatString);
      $scope.weatherCards[1].weatherData = {};
      $scope.weatherCards[1].weatherData.daily = [];
    }

    function init() {
      initWeatherCards();
    }
    init();
  });
