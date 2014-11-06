'use strict';
angular.module('ba').factory('ContactSvc', function ($http, ResourceSvc) {
    var path = '/api/contact';

    return {
        getAll: function() {
            return $http.get(path);
        },

        get: function(id) {
            var itemPath = ResourceSvc.itemPath(path, id);
            return $http.get(itemPath);
        },

        save: function(contact) {
            if(contact.id) {
                var itemPath = ResourceSvc.itemPath(path, id);
                return $http.put(itemPath, contact);
            } else {
                return $http.post(path, contact);
            }
        },
        delete: function(id) {
            var itemPath = ResourceSvc.itemPath(path, id);
            return $http.delete(itemPath);
        }


    }
});