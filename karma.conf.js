
module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'client/bower_components/angular/angular.js',
            'client/bower_components/angular-route/angular-route.js',
            'client/bower_components/angular-mocks/angular-mocks.js',
            'dist/vendor.js',
            'dist/app.js',
            'client/test/unit/**/*.spec.js'
        ],


        // list of files to exclude
        exclude: [
        ],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ]
    });
};