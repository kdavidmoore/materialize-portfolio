var portfolio = angular.module('portfolio', ['ngRoute']);

portfolio.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'pages/about.html',
		controller: 'mainController'
	});
	$routeProvider.when('/portfolio',{
		templateUrl: 'pages/portfolio.html',
		controller: 'mainController'
	});
	$routeProvider.when('/contact',{
		templateUrl: 'pages/contact.html',
		controller: 'mainController'
	});
	// send the user back to the home page if the route is not valid
	$routeProvider.otherwise({
		redirectTo: 'pages/about.html'
	});
})

/* portfolio.controller('mainController', function($scope){
	// main controller
})*/