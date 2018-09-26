app.factory('posts', 'companies', ['$http', function($http) {
	return $http.get('https://perspectivemagazine.com/wp-json/wp/v2/posts?categories=' + companies.id )
	.success(function(data) {
		return data;
	})
	.error(function(err) {
		return err;
	});
}]);