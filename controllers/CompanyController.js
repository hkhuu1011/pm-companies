app.controller('CompanyController', ['$scope', 'companies', '$routeParams', function($scope, companies, $routeParams) {
	companies.success(function(data) {
		$scope.detail = data[$routeParams.id];
	});
}]);