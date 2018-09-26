var app = angular.module('PMCompanies', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: '/views/home.html'
		})
		// .when('/company/:id', {
		// 	controller: 'CompanyController',
		// 	templateUrl: '/company.html'
		// })
		.otherwise({
			redirectTo: '/'
		});
});