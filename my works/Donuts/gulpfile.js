const gulp          = require('gulp');
const concat        = require('gulp-concat');
const concatCss     = require('gulp-concat-css');
const uglify        = require('gulp-uglify');
const uglifycss     = require('gulp-uglifycss');
const sass          = require('gulp-sass');
const watch         = require('gulp-watch');

//BUILD HTML
gulp.task('html:build', function() {
    gulp.src(['src/index.html'])
        .pipe(gulp.dest('build/'));
});
//BUILD IMAGES
gulp.task('img:build', function() {
    gulp.src(['src/img/*.*'])
        .pipe(gulp.dest('build/img/'));
});
//BUILD FONTS
gulp.task('fonts:build', function() {
    gulp.src(['src/fonts/*.*'])
        .pipe(gulp.dest('build/fonts/'));
});
//CONCAT NORMAL.SCSS
gulp.task('sass:concat', function () {
    return gulp.src(['src/styles/sass/main.scss',
                     'src/styles/sass/*.scss'])
        .pipe(concat('style.scss'))
        .pipe(gulp.dest('src/styles/sass/'));
});
// .SCSS TO .CSS
gulp.task('sass', ['sass:concat'], function () {
  return gulp.src('src/styles/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/styles/css/'));
});
//CONCAT .CSS
gulp.task('css:concat', ['sass'], function () {
  return gulp.src(['src/styles/css/reset.css',
                   'src/styles/css/font.css',
                   'src/styles/css/style.css'])
  .pipe(concatCss('style.main.css'))
  .pipe(gulp.dest('src/styles/'));
});
//MIN .CSS
gulp.task('css:compress', ['css:concat'], function () {
  gulp.src('src/styles/style.main.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(concat('style.main.min.css'))
    .pipe(gulp.dest('build/styles/css/'));
});
//CONCAT JS
gulp.task('js:concat', function() {
  return gulp.src(['src/js/libraries/*.js',
                   'src/js/custom/main.js',
                   'src/js/custom/*.js'])
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('src/js/'));
});
//MIN JS
gulp.task('js:compress', ['js:concat'], function() {
  return gulp.src('src/js/script.main.js')
    .pipe(uglify())
    .pipe(concat('script.main.min.js'))
    .pipe(gulp.dest('build/js/'));
});

//WATCH
gulp.task('watch', function() {
    gulp.watch('src/styles/sass/*.scss',
        ['sass', 'css:concat', 'css:compress']);
    gulp.watch('src/js/custom/*.js',
        ['js:concat', 'js:compress']);
    gulp.watch('src/index.html',
        ['html:build']);
});

gulp.task('default',
        [
         'html:build',
         'img:build',
         'fonts:build',
         'sass:concat',
         'sass',
         'css:concat',
         'css:compress',
         'js:concat',
         'js:compress'
         ]);
