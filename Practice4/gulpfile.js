var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('default', [ 'concat', 'html']);

gulp.task('concat', function() {
  return gulp.src(['./src/styles/header.css', './src/styles/content.css', './src/styles/footer.css'])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('html', function () {
    gulp.src('./src/templates/index.html')
        .pipe(gulp.dest('./build/'));
});


