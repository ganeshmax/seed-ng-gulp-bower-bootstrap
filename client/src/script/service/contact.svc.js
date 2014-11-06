'use strict';
angular.module('ba').factory('ContactSvc', function ($http) {
    return {
        getAll: function() {
            return $http.get('/api/contact');
        }
    }
});