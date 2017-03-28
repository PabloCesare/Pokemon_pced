'use strict';

/**
 * @ngdoc function
 * @name pokemonesApp.controller:ListatipopokemonCtrl
 * @description
 * # ListatipopokemonCtrl
 * Controller of the miappApp
 */

angular.module('miappApp')
  .controller('ListaTipopokemonCtrl', 
  		function ($scope, pokemonservice) {
  

      pokemonservice.listado()
        .then(function(response){
          console.log(response.data);
          $scope.pokemones = response.data.results;
        });   

      pokemonservice.listaTipo()
  			.then(function(response){
  				console.log(response.data);
  				$scope.tipopokemon = response.data.results;
  			});


        $scope.listadoTipos = function(id){
          pokemonservice.listadoTipos(id)
          .then(function(response){

            $scope.arrayPokemon = [];
            var verPokemon = response.data.poke;
            var i = 1;
            verPokemon.forEach(function(item){
              $scope.arrayPokemon.push({
                '$$hashKey': 'object:' + i,
                'url': item.poke.url,
                'name': item.poke.name
              });
              i++;
            });
            $scope.pokems = $scope.arrayPokemon;
            console.log($scope.pokems);


          });
        }
        
// detalle

 });       

