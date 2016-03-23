var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function () {
  return gulp.src('styles/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles/css/src/'));
});
 
gulp.task('watch', function () {
  gulp.watch('styles/scss/*.scss', ['sass', 'style', 'compress__css']);
  gulp.watch('js/src/script.js', ['scripts', 'compress__js']);
});
 
gulp.task('scripts', function() {
  return gulp.src(['js/src/jcarousel.js','js/src/template.js','js/src/masonry.pkgd.min2.js', 'js/src/script.js'])
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('js/dist/'));
});

gulp.task('style', ['sass'], function () {
  return gulp.src(['styles/css/src/reset.css', 'styles/css/src/font.css', 'styles/css/src/*.css'])
    .pipe(concatCss("style.main.css"))
    .pipe(gulp.dest('styles/css/dist/'));
});

gulp.task('compress__js', ['scripts'], function() {
  return gulp.src('js/dist/script.main.js')
    .pipe(uglify())
    .pipe(concat('script.main.min'))
    .pipe(gulp.dest('js/dist/'));
});

gulp.task('compress__css', ['style'], function () {
  gulp.src('styles/css/dist/style.main.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(concat('styles/css/dist/style.main.min.css'))
    .pipe(gulp.dest(''));
});

gulp.task('default', ['scripts','style','compress__js','sass','compress__css'], function () {  

});



 


