// 'use strict';
//
// angular.module('sonosApp')
//   .service('stormService', function($http, $q) {
//     var apikey = '61e98aabd70df5020002c4b66c53e8ac';
//     var host = 'https://api.forecast.io/interesting/';
//     return {
//       getStormByLocation: function() {
//         var myData = $q.defer();
//         $http.get(host + apikey)
//           .success(function(data) {
//             myData.resolve(data);
//           });
//         return myData.promise;
//       }
//     };
//   });
