app.controller('HomeController', ['$scope', 'companies', function($scope, companies) {
	$scope.reloadPage = function() {
		window.location.reload();
	};
	companies.success(function(data) {
		$scope.companies = data;
		console.log('companies', $scope.companies);

	});
}]);