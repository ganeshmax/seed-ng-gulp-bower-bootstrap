'use strict';

angular.module('ba')

    .config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/contact',           { controller: 'ContactListCtrl as ctrl', templateUrl: '/view/contact-list.tpl.html' })
            .when('/contact/:id',       { controller: 'ContactDetailCtrl as ctrl', templateUrl: '/view/contact-detail.tpl.html'})

            .when('/',          { redirectTo: '/contact' })
            .otherwise(         { redirectTo: '/contact' })
    });