'use strict';

/**
 * @ngdoc function
 * @name miappApp.controller:ListadopokemonCtrl
 * @description
 * # ListadopokemonCtrl
 * Controller of the miappApp
 */
angular.module('miappApp')
  .controller('ListadopokemonCtrl', 
  		function ($scope, pokemonservice) {
    
    pokemonservice.listado()
  			.then(function(response){
  				console.log(response.data);
  				$scope.pokemones = response.data.results;
  			});
    
  });
