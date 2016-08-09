'use strict';

/**
 * @ngdoc service
 * @name weatherApp.iconService
 * @description
 * # iconService
 * Service in the weatherApp.
 */
angular.module('weatherApp')
  .service('iconService', function () {
    this.icons = new Skycons({'color':'blue'});

    this.addIcon = function(id, name){
      this.icons.set(id, name);
      this.icons.play();
    };
  });
