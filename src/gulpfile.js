var gulp = require('gulp'),
    htmlhint = require('gulp-htmlhint'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    csslint = require('gulp-csslint'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    del = require('del'),
    plumber = require('gulp-plumber'),
    ts = require('gulp-typescript'),
    jsStylish=require("jshint-stylish");


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
    },
    TS:{
        SRC:"./app/ts/**/*.ts",
        DEST:"./app/ts/js"
    }

};

const AUTOPREFIXOPTIONS = {
    browsers: ['last 2 versions']
};
gulp.task("default",function () {
    var cssWatcher = gulp.watch(PATHS.SASS.SRC,['css']);
    var HtmlWatcher = gulp.watch(PATHS.HTML.SRC,['html-validate']);
    var jsWatcher = gulp.watch(PATHS.JS.SRC,['js']);
    var libWatcher = gulp.watch(PATHS.JS.LIB,['lib']);
})
//SASS --> CSS
gulp.task("css",['clean-css'],function () {

    gulp.src(PATHS.SASS.SRC)
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
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
        .pipe(notify({message:'js built'}))
});


gulp.task('clean-css',function() {
    var files = PATHS.SASS.DEST + '**/*.css';
    clean(files);
});

gulp.task('html-validate',function () {
    gulp.src(PATHS.HTML.SRC)
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        // .pipe(htmlhint('./.htmlhintrc'))
        // .pipe(htmlhint.reporter('htmlhint-stylish'))
        .pipe(htmlhint.failReporter())
});

gulp.task('lib',function () {
    gulp.src(PATHS.JS.LIB)
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(jshint())
        .pipe(jshint.reporter(jsStylish))
        .pipe(sourcemaps.init())
        .pipe(concat("clnsg.min.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATHS.JS.DEST))
        .pipe(notify({message:'lib built'}))
});

gulp.task('js',function () {
    gulp.src(PATHS.JS.SRC)
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(jshint())
        .pipe(jshint.reporter(jsStylish))
        .pipe(sourcemaps.init())
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATHS.JS.DEST))
        .pipe(notify({message:'js built'}))
});

gulp.task('ts', function () {
    gulp.src(PATHS.TS.SRC)
        .pipe(plumber({
        errorHandler: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
        .pipe(ts({
            noImplicitAny:true,
            out:'./js/main.js'
        }))
        .pipe(jshint())
        .pipe(jshint.reporter(jsStylish))
        .pipe(sourcemaps.init())
        .pipe(concat("main.js"))
        .pipe(sourcemaps.write())
        .pipe(notify({message:'Sourcemaps write complete'}))
        .pipe(gulp.dest(PATHS.TS.DEST))
        .pipe(notify({message:'js built'}))


});
function clean(path) {
    console.log('Cleaning :' + util.colors.blue(path));
    del(path);
}

