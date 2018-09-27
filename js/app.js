var app = angular.module('PMCompanies', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		})
		.when('/companies/:id', {
			controller: 'CompanyController',
			templateUrl: 'views/company.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});

// Filter to remove HTML tags in content
app.filter('removeHTMLTags', function() {
	return function(text) {
		return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
	};
});