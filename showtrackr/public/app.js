angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
	// We can annotate this depedency injection so that uglify
	// and minify do not butcher the variable name
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
		//$locationProvider.hmtl5Mode(true);	

		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller:  'MainCtrl'
			})
			.when('/shows/:id', {
				templateUrl: 'views/detail.html',
				controller:  'DetailCtrl'
			})
			.when('/login', {
				templateUrl: 'views/login.html',
				controller:  'LoginCtrl'
			})
			.when('/add', {
				templateUrl: 'views/add.html',
				controller:  'AddCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);