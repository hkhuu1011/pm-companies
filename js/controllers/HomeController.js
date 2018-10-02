app.controller('HomeController', ['$scope', 'companies', function($scope, companies) {
	companies.success(function(data) {
		$scope.companies = data;
		console.log('companies', $scope.companies);
	});
}]);

app.controller('CompanyController', ['$scope', '$rootScope', '$routeParams', '$http', 'articles', function($scope, $rootScope, $routeParams, $http, articles) {
	articles.success(function(data) {
		$scope.articles = data;
		console.log('articles', $scope.articles);
	})

}]);

app.controller('ArticleController', ['$scope', '$rootScope', '$routeParams', '$http', 'articles', function($scope, $rootScope, $routeParams, $http, articles) {
	articles.success(function(data) {
		$scope.post = data[$routeParams.id];
		console.log('posts', $scope.post);
	})

}]);