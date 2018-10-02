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
		.when('/:slug/:id/:id', {
			controller: 'ArticleController',
			templateUrl: 'views/article.html'
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

// Filter to replace &hellip with ...
app.filter('ellipses', function () {
  return function (input) {
      return input.replace(/&hellip;/g, '...');
       return input.replace(/&#8217;/g, '\'');
  };
});

// Filter to replace &#8217 with '
app.filter('apostrophe', function () {
  return function (input) {
      return input.replace(/&#8217;/g, '\'');
  };
});

// Filter to replace &#8217 with '
app.filter('hyphen', function () {
  return function (input) {
      return input.replace(/&#8211;/g, '-');
  };
});