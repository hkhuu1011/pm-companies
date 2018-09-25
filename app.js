var app = angular.module('PMCompanies', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: '/company.html'
		})
		// .when('/company/:id', {
		// 	controller: 'CompanyController',
		// 	templateUrl: '/post.html'
		// })
		.otherwise({
			redirectTo: '/'
		});
});