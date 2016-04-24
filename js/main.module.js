var portfolio = angular.module('portfolio', []);

portfolio.controller('portfolioController', function($scope){
	$scope.cards = cards;
	$scope.loaded = true;
});
