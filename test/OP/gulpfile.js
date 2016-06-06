var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//BUILD HTML
gulp.task('html:build', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('build/'))
});
//BUILD FONTS
gulp.task('fonts:build', function() {
    gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('build/fonts/'))
});
//BUILD IMAGES
gulp.task('image:build', function() {
    gulp.src('src/img/*.*')
        .pipe(gulp.dest('build/img/'))
});
//CONCAT NORMAL.SCSS
gulp.task('sass:concat', function () {
  return gulp.src(['src/styles/sass/normal/main.scss',
                   'src/styles/sass/normal/*.scss'])
    .pipe(concat('style.scss'))
    .pipe(gulp.dest('src/styles/out_scss/normal'));
});
//NORMAL .SCSS TO .CSS
gulp.task('sass', ['sass:concat'], function () {
  return gulp.src('src/styles/out_scss/normal/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/styles/out_css/normal/'));
});
//CONCAT NORMAL .CSS
gulp.task('css:concat', ['sass'], function () {
  return gulp.src(['src/styles/css/*.css',
                   'src/styles/out_css/normal/*.css'])
  .pipe(concatCss('style.main.css'))
  .pipe(gulp.dest('src/styles/'));
});
//MIN AND BUILD NORMAL .CSS
gulp.task('css:compress', ['css:concat'], function () {
  gulp.src('src/styles/style.main.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(concat('style.main.min.css'))
    .pipe(gulp.dest('build/styles'));
});
//CONCAT TOUCH .SCSS
gulp.task('sass_touch:concat', function () {
  return gulp.src(['src/styles/sass/touch/main.scss',
                   'src/styles/sass/touch/*.scss'])
    .pipe(concat('style.touch.scss'))
    .pipe(gulp.dest('src/styles/out_scss/touch'));
});
//TOUCH .SCSS TO .CSS
gulp.task('sass_touch', ['sass_touch:concat'], function () {
  return gulp.src('src/styles/out_scss/touch/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/styles/out_css/touch/'));
});
//CONCAT TOUCH .CSS
gulp.task('css_touch:concat', ['sass_touch'], function () {
  return gulp.src(['src/styles/css/*.css',
                   'src/styles/out_css/touch/*.css'])
  .pipe(concatCss('style.touch.main.css'))
  .pipe(gulp.dest('src/styles/'));
});
//MIN AND BUILD TOUCH .CSS
gulp.task('css_touch:compress', ['css_touch:concat'], function () {
  gulp.src('src/styles/style.touch.main.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(concat('style.touch.main.min.css'))
    .pipe(gulp.dest('build/styles'));
});
//CONCAT JS
gulp.task('js:concat', function() {
  return gulp.src(['src/js/libraries/*.js',
                   'src/js/customs/*.js'])
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('src/js/'));
});
//MIN AND BUILD JS
gulp.task('js:compress', ['js:concat'], function() {
  return gulp.src('src/js/script.main.js')
    .pipe(uglify())
    .pipe(concat('script.main.min.js'))
    .pipe(gulp.dest('build/js/'));
});
//MIN AND BUILD test_touch.js
gulp.task('js_touch:compress', function() {
  return gulp.src('src/js/test_touch.js')
    .pipe(uglify())
    .pipe(concat('test_touch.min.js'))
    .pipe(gulp.dest('build/js/'));
});
//WATCH
  gulp.task('watch', function () {
  gulp.watch('src/styles/sass/normal/*.scss', ['sass:concat', 'sass', 'css:concat', 'css:compress']);
  gulp.watch('src/styles/sass/touch/*.scss', ['sass_touch:concat', 'sass_touch', 'css_touch:concat', 'css_touch:compress']);
  gulp.watch('src/js/partials/script.js', ['js:cocncat', 'js:compress']);
  gulp.watch('src/*.html', ['html:build']);
});

gulp.task('default',
        ['html:build',
         'fonts:build',
         'image:build',
         'sass:concat',
         'sass',
         'css:concat',
         'css:compress',
         'sass_touch:concat',
         'sass_touch',
         'css_touch:concat',
         'css_touch:compress',
         'js_touch:compress',
         'js:concat',
         'js:compress'
         ], function () {

});
