app.controller('HomeController', ['$scope', 'companies', function($scope, companies) {

	$scope.reloadPage = function() {
		window.location.reload();
	};

	companies.getCompanies(100, 1).then(function(companies) {
	    $scope.companies = companies;
	});

	companies.getCompanies(100, 2).then(function(companies) {
	    $scope.companies2 = companies;
	});

	companies.getCompanies(100, 3).then(function(companies) {
	    $scope.companies3 = companies;
	});

	companies.getCompanies(100, 4).then(function(companies) {
	    $scope.companies4 = companies;
	});

	companies.getCompanies(100, 5).then(function(companies) {
	    $scope.companies5 = companies;
	});

}]);

