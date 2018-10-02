app.factory('articles', ['$http', '$routeParams', function($http, $routeParams) {
	return $http.get('https://perspectivemagazine.com/wp-json/wp/v2/posts?categories=' + $routeParams.id)
	.success(function(data) {
		return data;
	})
	.error(function(err) {
		return err;
	});
}]);