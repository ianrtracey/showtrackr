angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute','mgcrea.ngStrap'])
	// We can annotate this depedency injection so that uglify
	// and minify do not butcher the variable name
	.config(['$locationProvider', function($locationProvider) {
		$locationProvider.hmtl5Mode(true);	
	}]);