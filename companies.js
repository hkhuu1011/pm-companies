app.factory('companies', ['$http', function($http) {
	return
	$http.get('https://perspectivemagazine.com/wp-json/wp/v2/categories?per_page=50&page=1')
	.success(function(data) {
		return data;
	})
	.error(function(data) {
		return data;
	});
}]);