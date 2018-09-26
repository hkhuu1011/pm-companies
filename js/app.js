var app = angular.module('PMCompanies', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		})
		.when('/:slug/:id', {
			controller: 'CompanyController',
			templateUrl: 'views/company.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});