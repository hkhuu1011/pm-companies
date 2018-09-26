app.controller('CompanyController', ['$scope', 'companies', '$routeParams', function($scope, companies, $routeParams) {
	companies.success(function(data) {
		$scope.articles = data[$routeParams.id];
	});
}]);