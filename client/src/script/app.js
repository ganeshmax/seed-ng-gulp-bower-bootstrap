'use strict';

angular.module('ba')

    .config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/contact',   { controller: 'ContactCtrl as contactCtrl', templateUrl: '/view/contact-list.tpl.html' })
            .when('/second',    { controller: 'SecondCtrl as ctrl', templateUrl: '/view/second.tpl.html'})
            .when('/',          { redirectTo: '/contact' })
            .otherwise(         { redirectTo: '/contact' })
    });