'use strict';

/**
 * @ngdoc service
 * @name miappApp.Config
 * @description
 * # Config
 * Constant in the miappApp.
 */
angular.module('miappApp')
  .constant('Config', {
  	//BASE: 'http://192.168.1.35:3036/',
  	// BASE: 'http://127.0.0.1:3333/',
  
  	POKE: 'https://pokeapi.co/api/v2/pokemon/?limit=1000',
  	POKET: 'https://pokeapi.co/api/v2/type',   
  	POKEDETALLE: 'https://pokeapi.co/api/v2/pokemon/',   
  	POKEFORM: 'https://pokeapi.co/api/v2/pokemon-form/',  
  	POKEESPECIE:'https://pokeapi.co/api/v2/pokemon-species/', 

  });
