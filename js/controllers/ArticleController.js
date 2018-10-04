app.controller('ArticleController', ['$scope', '$routeParams', 'articles', function($scope, $routeParams, articles) {
	articles.success(function(data) {
		$scope.post = data[$routeParams.id];
		console.log('posts', $scope.post);
	});
}]);