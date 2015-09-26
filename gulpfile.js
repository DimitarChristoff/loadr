'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var src = [ 'src/**/*.js' ];
var srcOption = { base: 'src' };
var dest = './dist';


gulp.task('clean', function () {
    return gulp.src(dest, {read: false})
        .pipe(clean());
});


gulp.task('node', ['clean'], function () {
    return gulp.src(src, srcOption)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '..' }))
        .pipe(gulp.dest(dest));
});

gulp.task('browser', ['clean'], function () {
    return gulp.src(src, srcOption)
        // .pipe(sourcemaps.init())
        .pipe(browserify({
            insertGlobals : false,
            debug : !gulp.env.production,
            transform: ['babelify']
        }))
		.pipe(uglify())
        // .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '..' }))
        .pipe(gulp.dest(dest));
});
