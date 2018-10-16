app.factory('companies', ['$http', function($http) {

    function fnGetCompanies(itemsPerPage, page) {
        var ipp = itemsPerPage || 100;
        var page = page || 1;
        return $http
            .get('https://perspectivemagazine.com/wp-json/wp/v2/categories?per_page=' + ipp + '&page=' + page)
            .then(
                function(response) {
                    return response.data;
                },
                function(err) {
                    return err;
                }
            );
    }
    return {
        getCompanies: fnGetCompanies
    }
}]);

