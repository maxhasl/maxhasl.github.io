var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('php:build', function() {
    gulp.src('src/*.php')
        .pipe(gulp.dest('build/'))
});

gulp.task('fonts:build', function() {
    gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('build/fonts/'))
});

gulp.task('image:build', function() {
    gulp.src('src/img/*.*')
        .pipe(gulp.dest('build/img/'))
});

gulp.task('sass', function () {
  return gulp.src('src/styles/partials/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/styles/partials/'));
});

gulp.task('scripts', function() {
  return gulp.src(['src/js/partials/*.js'])
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('src/js/'));
});

gulp.task('style', ['sass'], function () {
  return gulp.src(['src/styles/partials/reset.css',
                   'src/styles/partials/font.css',
                   'src/styles/partials/*.css'])
    .pipe(concatCss('style.main.css'))
    .pipe(gulp.dest('src/styles/'));
});

gulp.task('compress__scripts', ['scripts'], function() {
  return gulp.src('src/js/script.main.js')
    .pipe(uglify())
    .pipe(concat('script.main.min'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('compress__css', ['style'], function () {
  gulp.src('src/styles/style.main.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(concat('style.main.min.css'))
    .pipe(gulp.dest('build/styles'));
});

gulp.task('watch', function () {
  gulp.watch('src/styles/partials/*.scss', ['sass', 'style', 'compress__css']);
  gulp.watch('src/js/partials/script.js', ['scripts', 'compress__scripts']);
});

gulp.task('default',
        ['php:build',
         'fonts:build',
         'image:build',
         'sass',
         'style',
         'scripts',
         'compress__scripts',
         'compress__css'
         ], function () {

});
