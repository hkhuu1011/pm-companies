app.controller('HomeController', ['$scope', 'companies',  function($scope, companies) {
	companies.success(function(data) {
		$scope.companies = data;
		console.log('companies', $scope.companies);
	});
}]);