'use strict';

/**
 * @ngdoc service
 * @name sonosApp.sonosService
 * @description
 * # sonosService
 * Service in the sonosApp.
 */
angular.module('sonosApp')
  .service('weatherService', function($http, $q) {
    var apikey = '61e98aabd70df5020002c4b66c53e8ac';
    var host = 'https://api.forecast.io/forecast/';
    return {
      getWeatherByLocation: function(lat, long) {
        var myData = $q.defer();
        $http.get(host + apikey + '/' + lat + ',' + long)
          .success(function(data) {
            myData.resolve(data);
          });
        return myData.promise;
      }
    };
  });
