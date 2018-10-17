var app = angular.module('PMCompanies', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'views/home.html',
		})
		.when('/:id', {
			controller: 'CompanyController',
			templateUrl: 'views/company.html'
		})
		.when('/:id/:slug/:id', {
			controller: 'ArticleController',
			templateUrl: 'views/article.html'
		})
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.hashPrefix('');
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
  };
});

// Filter to replace &#8217 with '
app.filter('apostrophe', function () {
  return function (input) {
      return input.replace(/&#8217;/g, '\'');
  };
});

// Filter to replace &amp; with "
app.filter('quote1', function () {
  return function (input) {
      return input.replace(/&#8220;/g, '\"');
  };
});

// Filter to replace &amp; with "
app.filter('quote2', function () {
  return function (input) {
      return input.replace(/&#8221;/g, '\"');
  };
});

// Filter to replace &#8217 with -
app.filter('hyphen', function () {
  return function (input) {
      return input.replace(/&#8211;/g, '-');
  };
});

// Filter to replace &amp; with &
app.filter('ampersand', function () {
  return function (input) {
      return input.replace(/&amp;/g, '&');
  };
});

