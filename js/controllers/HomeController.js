app.controller('HomeController', ['$scope', 'companies', function($scope, companies) {
	companies.success(function(data) {
		$scope.companies = data;
		console.log('companies', $scope.companies);
	});
}]);

app.controller('CompanyController', ['$scope', '$routeParams', '$http', 'articles', function($scope, $routeParams, $http, articles) {
	articles.success(function(data) {
		$scope.articles = data;
		console.log('articles', $scope.articles);
	})

}]);

app.controller('ArticleController', ['$scope', '$routeParams', '$http', 'articles', function($scope, $routeParams, $http, articles) {
	articles.success(function(data) {
		$scope.post = data[$routeParams.id];
		console.log('posts', $scope.post);
	})

}]);