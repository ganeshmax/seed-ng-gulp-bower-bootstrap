angular.module('ba', [
    'ngRoute'
]);
'use strict';

angular.module('ba')

    .config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/contact',   { controller: 'ContactCtrl as contactCtrl', templateUrl: '/view/contact-list.tpl.html' })
            .when('/second',    { controller: 'SecondCtrl as ctrl', templateUrl: '/view/second.tpl.html'})
            .when('/',          { redirectTo: '/contact' })
            .otherwise(         { redirectTo: '/contact' })
    });
angular.module('ba').controller('ContactCtrl', function (ContactSvc) {
    var self = this;

    self.getAlternateRowClass = function(isOdd) {
        return {
            active: isOdd
        }
    };

    self.getAllContacts = function() {
        ContactSvc.getAll().then(
            function(successResponse) {
                console.log("Success Response" + successResponse.data);
                self.contacts = successResponse.data;
            },
            function(errorResponse) {
                console.log("Error: " + errorResponse)
            }
        )
    };

    self.getAllContacts();

    self.contacts = [
        {
            id: 1,
            name: {
                first: "Ganeshji",
                last: "Marwaha"
            },
            address: {
                line1: "GM Line 1",
                line2: "GM Line 2",
                city: "GM City",
                state: "GM State",
                code: "GM Code",
                country: "GM Country"
            },
            email: "ganeshji.marwaha@email.com",
            phone: "99999 11111"
        },
        {
            id: 2,
            name: {
                first: "Ubahariya",
                last: "Natarajan"
            },
            address: {
                line1: "UN Line 1",
                line2: "UN Line 2",
                city: "UN City",
                state: "UN State",
                code: "UN Code",
                country: "UN Country"
            },
            email: "ubahariya.natarajan@email.com",
            phone: "99999 22222"

        },
        {
            id: 3,
            name: {
                first: "Satish",
                last: "Kumar"
            },
            address: {
                line1: "SK Line 1",
                line2: "SK Line 2",
                city: "SK City",
                state: "SK State",
                code: "SK Code",
                country: "SK Country"
            },
            email: "satish.kumar@email.com",
            phone: "99999 33333"
        }
    ];

});
angular.module('ba').controller('SecondCtrl', function ($scope) {
    this.value = "Second";
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
angular.module('ba').factory('ContactSvc', function ($http) {
    return {
        getAll: function() {
            return $http.get('/api/contact');
        }
    }
});
'use strict';
angular.module('ba').service('SecondSvc', function () {
    // Service code will go here
});