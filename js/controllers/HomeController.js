app.controller('HomeController', ['$scope', 'companies', function($scope, companies) {
	companies.success(function(data) {
		$scope.companies = data;
	});
}]);

app.controller('CompanyController', ['$scope', 'companies', '$routeParams', '$http', function($scope, companies, $routeParams, $http) {
	$http.get('https://perspectivemagazine.com/wp-json/wp/v2/posts?categories=' + $routeParams.id).success(function(data) {
		$scope.posts = data;
		console.log('posts', $scope.posts);
	});
}]);