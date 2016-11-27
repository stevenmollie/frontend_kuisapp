var gulp = require('gulp'),
    htmlhint = require('gulp-htmlhint'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    jsStylish = require('jshint-stylish'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    csslint = require('gulp-csslint'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat')

gulp.task('vet', function () {
    gulp.src([
        './src/**/*.js',
        './*.js'
    ])
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish',{verbose:true}))
        .pipe($.jshint.reporter('fail'));
});

const PATHS = {
    EXTERNALS : {},
    CSS:{
        SRC : './app/css/**/*.css',
        DEST : './wwwroot/css'
    },
    HTML:{
        SRC : './app/**/*.html'
    },
    JS:{
        LIB:"./app/lib/**/*.js",
        SRC:"./app/js/**/*.js",
        DEST:'./wwwroot/js'
    }
};

//CSS
gulp.task("css",function () {

    gulp.src(PATHS.CSS.SRC)
        .pipe(sourcemaps.init())
        .pipe
})

