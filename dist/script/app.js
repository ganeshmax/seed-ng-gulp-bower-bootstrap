angular.module('ba', [
    'ngRoute'
]);
'use strict';

angular.module('app')
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/first',     { controller: 'FirstCtrl', templateUrl: '/view/first.tpl.html' })
            .when('/second',    { controller: 'SecondCtrl', templateUrl: '/view/second.tpl.html'})
            .when('/',          { redirectTo: '/first' })
            .otherwise(         { redirectTo: '/first' })
    })
angular.module('ba')
    .controller('FirstCtrl', function ($scope) {
        // Controller code here
    });
angular.module('ba')
    .controller('SecondCtrl', function ($scope) {
        // Controller code here
    });
angular.module('ba')
    .directive('baFirst', function () {
        return {
            // Directive definition will go here
        }
    });
angular.module('ba')
    .directive('baSecond', function () {
        return {
            // Directive definition will go here
        }
    });
angular.module('ba')
    .directive('baFirst', function () {
        // Filter code will go here
    });
angular.module('ba')
    .directive('baSecond', function () {
        // Filter code will go here
    });
'use strict';
angular.module('ba')
    .service('firstSvc', function () {
        // Service code will go here
    });
'use strict';
angular.module('ba')
    .service('secondSvc', function () {
        // Service code will go here
    });