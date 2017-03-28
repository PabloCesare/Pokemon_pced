'use strict';

/**
 * @ngdoc overview
 * @name miappApp
 * @description
 * # miappApp
 *
 * Main module of the application.
 */
angular
  .module('miappApp', [
    'ngAnimate',
    'ngCookies',  
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider      
     
      .when('/listadoPokemon', {
        templateUrl: 'views/listadopokemon.html',
        controller: 'ListadopokemonCtrl',
        controllerAs: 'listadoPokemon'
      })
      .when('/TipoPokemon', {
        templateUrl: 'views/TipoPokemon.html',
        controller: 'ListaTipopokemonCtrl',
        controllerAs: 'listaTipoPokemon'
      })
      
   /*    .when('/detallepokemon/:id', {
        templateUrl: 'views/detallepokemon.html',
        controller: 'ListaTipopokemonCtrl',
        controllerAs: 'detallepokemon'
      })
     */ 



      .when('/detallepk/:id', {
        templateUrl: 'views/detallepk.html',
        controller: 'DetallepkCtrl',
        controllerAs: 'detallepk'
      })
      
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.hashPrefix("");
  });
