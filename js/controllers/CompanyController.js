app.controller('CompanyController', ['$scope', '$routeParams', '$http', 'articles', function($scope, $routeParams, $http, articles) {
	articles.success(function(data) {
		$scope.articles = data;
		console.log('articles', $scope.articles);
	});
}]);