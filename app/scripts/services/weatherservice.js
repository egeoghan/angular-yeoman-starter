'use strict';

/**
 * @ngdoc service
 * @name weatherApp.weatherService
 * @description
 * # weatherService
 * Service in the weatherApp.
 */
angular.module('weatherApp')
  .service('weatherService', function($http, $q) {
    var apikey = '61e98aabd70df5020002c4b66c53e8ac';
    var host = 'https://api.forecast.io/forecast/';
    return {

      getWeatherByLocation: function(lat, long, day) {
        var myData = $q.defer();
        $http.get(host + apikey + '/' + lat + ',' + long + ',' + day)
          .success(function(data) {
            myData.resolve(data);
            console.log(data);
          });
        return myData.promise;
      }

    };
  });
