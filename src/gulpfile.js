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
    SASS:{
        SRC : './app/scss/**/*.scss',
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

const AUTOPREFIXOPTIONS = {
    browsers: ['last 2 versions']
};

//CSS
gulp.task("css",function () {

    gulp.src(PATHS.SASS.SRC)
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(AUTOPREFIXOPTIONS))
        .pipe(csslint())
        .pipe(concat("main.min.css"))
        .pipe(cleanCSS({debug:true, compatiblitity:'*'},function (details) {
            console.log(details.name + ": " + details.stats.originalSize)
            console.log(details.name + ": " + details.stats.minifiedSize)
    }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATHS.SASS.DEST))
})

