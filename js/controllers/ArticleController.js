app.controller('ArticleController', ['$scope', '$routeParams', 'articles', function($scope, $routeParams, articles) {
	articles.success(function(data) {
		$scope.post = data[$routeParams.id];
		window.scrollTo(0,0);
		console.log('posts', $scope.post);
	});
}]);