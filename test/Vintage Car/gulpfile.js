const gulp          = require('gulp');
const concat        = require('gulp-concat');
const concatCss     = require('gulp-concat-css');
const uglify        = require('gulp-uglify');
const uglifycss     = require('gulp-uglifycss');
const sass          = require('gulp-sass');
const watch         = require('gulp-watch');

//BUILD HTML
gulp.task('html:build', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('build/'));
});
//BUILD FONTS
gulp.task('fonts:build', function() {
    gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('build/fonts/'));
});
//BUILD IMAGES
gulp.task('img:build', function() {
    gulp.src(['src/img/*.*'])
        .pipe(gulp.dest('build/img/'));
});

// .SCSS TO .CSS
gulp.task('sass', function () {
  return gulp.src('src/*/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/'));
});
//CONCAT .CSS
gulp.task('css:concat', ['sass'], function () {
  return gulp.src('src/*/*.css')
  .pipe(concatCss('style.main.css'))
  .pipe(gulp.dest('src/styles/'));
});
//MIN AND BUILD .CSS
gulp.task('css:compress', ['css:concat'], function () {
  gulp.src('src/styles/style.main.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(concat('style.main.min.css'))
    .pipe(gulp.dest('build/styles'));
});
//CONCAT JS
gulp.task('js:concat', function() {
  return gulp.src('src/*/*.js')
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

//WATCH
gulp.task('watch', function () {
  gulp.watch('src/*/*.scss', ['sass', 'css:concat', 'css:compress']);
  gulp.watch('src/*/*.js', ['js:concat', 'js:compress']);
  gulp.watch('src/*.html', ['html:build']);
});

gulp.task('default',
        ['html:build',
         'img:build',
         'fonts:build',
         'sass',
         'css:concat',
         'css:compress',
         'js:concat',
         'js:compress'
         ], function () {
});
