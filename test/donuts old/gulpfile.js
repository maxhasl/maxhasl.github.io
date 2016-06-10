var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function () {
  return gulp.src('styles/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles/css/'));
});

gulp.task('watch', function () {
  gulp.watch('styles/sass/*.scss', ['sass']);
});

gulp.task('default',
        ['sass'
         ], function () {
});
