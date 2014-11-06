angular.module('ba', [
    'ngRoute'
]);
'use strict';

angular.module('ba')

    .config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/contact',           { controller: 'ContactListCtrl as ctrl', templateUrl: '/view/contact-list.tpl.html' })
            .when('/contact/:id',       { controller: 'ContactDetailCtrl as ctrl', templateUrl: '/view/contact-detail.tpl.html'})

            .when('/',          { redirectTo: '/contact' })
            .otherwise(         { redirectTo: '/contact' })
    });
angular.module('ba').controller('ContactDetailCtrl', function ($routeParams, ContactSvc) {
    var self = this;

    self.contact = {};

    self.getContact = function(id) {
        ContactSvc.get(id).then(
            function(response) {
                console.log("Success: " + response.data);
                self.contact = response.data;
            },
            function(error) {
                console.log("Error: " + error)
            }
        )
    };

    self.getContact($routeParams.id);

});
angular.module('ba').controller('ContactListCtrl', function (ContactSvc, $location) {
    var self = this;

    self.getAlternateRowClass = function(isOdd) {
        return {
            active: isOdd
        }
    };

    self.getAllContacts = function() {
        ContactSvc.getAll().then(
            function(response) {
                console.log("Success: " + response.data);
                self.contacts = response.data;
            },
            function(error) {
                console.log("Error: " + error)
            }
        )
    };

    self.showContact = function(id) {
        console.log("Moving to: " + '/contact/' + id);
        $location.path('/contact/' + id);
    };

    self.getAllContacts();

});
angular.module('ba').directive('baFirst', function () {
    return {
        // Directive definition will go here
    }
});
angular.module('ba').directive('baSecond', function () {
    return {
        // Directive definition will go here
    }
});
angular.module('ba').filter('baFirst', function () {
    // Filter code will go here
});
angular.module('ba').filter('baSecond', function () {
    // Filter code will go here
});
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
'use strict';
angular.module('ba').service('ResourceSvc', function () {
    return {
        itemPath: function(basePath, id) {
            return basePath + '/' + id;
        }
    }
});