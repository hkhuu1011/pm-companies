app.controller('ArticleController', ['$scope', '$routeParams', '$http', 'articles', function($scope, $routeParams, $http, articles) {
	articles.success(function(data) {
		$scope.post = data[$routeParams.id];
		console.log('posts', $scope.post);
	});
}]);