'use strict';

var gulp        = require('gulp');
var concat      = require('gulp-concat');
var clean       = require('gulp-clean');
var ngAnnotate  = require('gulp-ng-annotate');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var minifyCss   = require('gulp-minify-css');

var path        = require('./gulp/path');


gulp.task('clean', function() {
    return gulp.src('./dist/*')
        .pipe(clean({force: true}));
});

// CSS
gulp.task('vendorCss', function () {
    gulp.src(path.allVendorStyles)
            .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./dist/style'))
            .pipe(rename('vendor.min.css'))
            .pipe(minifyCss())
        .pipe(gulp.dest('./dist/style'));
});

gulp.task('appCss', function () {
    gulp.src(path.allAppStyles)
            .pipe(concat('app.css'))
        .pipe(gulp.dest('./dist/style'))
            .pipe(rename('app.min.css'))
            .pipe(minifyCss())
        .pipe(gulp.dest('./dist/style'));
});

gulp.task('css', ['vendorCss', 'appCss']);


// JS
gulp.task('vendorJs', function () {
    gulp.src(path.allVendorScripts)
            .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/script'))
            .pipe(rename('vendor.min.js'))
            .pipe(uglify({preserveComments: 'some'}))
        .pipe(gulp.dest('./dist/script'))
});

gulp.task('appJs', function () {
    gulp.src(path.allAppScripts)
            .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/script'))
            .pipe(rename('app.min.js'))
            .pipe(ngAnnotate())
            .pipe(uglify())
        .pipe(gulp.dest('./dist/script'))
});

gulp.task('js', ['vendorJs', 'appJs']);

gulp.task('copy', function(){
    gulp.src(['./client/src/asset/*'])
        .pipe(gulp.dest('./dist/asset'));

    gulp.src(['./client/src/view/*'])
        .pipe(gulp.dest('./dist/view'));

    gulp.src('./client/src/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('server', function () {
    require('./server/server');
});

gulp.task('watch', function () {
    gulp.watch(path.allAppScripts, ['appJs']);
    gulp.watch(path.allAppStyles, ['appCss']);
});

gulp.task('dist', ['css', 'js', 'copy', 'server', 'watch']);
gulp.task('all', ['clean'], function() {
    gulp.start('css', 'js', 'copy', 'server', 'watch');
});