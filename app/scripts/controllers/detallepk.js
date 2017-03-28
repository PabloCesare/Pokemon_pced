'use strict';

/**
 * @ngdoc function
 * @name mipokemonApp.controller:DetallepkCtrl
 * @description
 * # DetallepkCtrl
 * Controller of the mipokemonApp
 */
angular.module('miappApp')
  .controller('DetallepkCtrl', function ($scope, pokemonservice) {
 	 pokemonservice.detallePokemon()
  			.then(function(response){
  				$scope.detalle = response.data;
  			});

  	});
  

