'use strict';

/**
 * @ngdoc service
 * @name weatherApp.locationService
 * @description
 * # locationService
 * Service in the weatherApp.
 */
angular.module('weatherApp')
  .service('locationService', function ($http, $q) {
      // var apikey = 'AIzaSyCbOojVaQSR2Jrgu-Q3g3KEUmIo60PirFQ';
      // var address_hardcode = '2904+Oakley+Pointe,+Richmond,+VA';
      // parseLocationInfo = function(address) {
      //   console.log(address);
      // };

      return {
        getLocationInfo: function(address) {
          var myData = $q.defer();
          $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' +  address + '&key=AIzaSyCbOojVaQSR2Jrgu-Q3g3KEUmIo60PirFQ')
            .success(function(data) {
              myData.resolve(data);
              // console.log(data);
            });
          return myData.promise;
        }

    };


  });
