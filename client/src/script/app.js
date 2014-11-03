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