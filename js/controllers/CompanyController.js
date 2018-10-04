app.controller('CompanyController', ['$scope', 'articles', function($scope, articles) {
	articles.success(function(data) {
		$scope.articles = data;
		console.log('articles', $scope.articles);
	});
}]);