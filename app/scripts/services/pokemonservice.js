'use strict';

/**
 * @ngdoc service
 * @name miappApp.pokemonservice
 * @description
 * # pokemonservice
 * Service in the miappApp.
 */
angular.module('miappApp')
  .service('pokemonservice', function (Config, $q, $http,$routeParams) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    function listado(){
    	var deferred = $q.defer();
      	$http.get(Config.POKE) //config
    		.then(function(response){
          console.log(response);          
    			deferred.resolve(response);
    		});
    	 return deferred.promise;
    }

    function listaTipo(){
      var deferred = $q.defer();
        $http.get(Config.POKET) //config
        .then(function(response){
          console.log(response);          
          deferred.resolve(response);
        });

       return deferred.promise;
    }

        function listadoTipos(id){
      var deferred = $q.defer();
      $http.get(Config.POKET + id)
       .then(function(response){
        deferred.resolve(response);
      });
      return deferred.promise;
    }

     function detallePokemon(){
      var deferred = $q.defer();
      $http.get(Config.POKEDETALLE + $routeParams.id)
       .then(function(response){
        deferred.resolve(response);
      });
      return deferred.promise;
    }


	return {
    	listado: listado,
      listaTipo: listaTipo,
      listadoTipos:listadoTipos,
      detallePokemon: detallePokemon,
    }

  });
