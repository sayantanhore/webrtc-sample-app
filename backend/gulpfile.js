let gulp = require('gulp');
let mocha = require('gulp-mocha');

gulp.task('test', () => {
  let stream = gulp.src('test/**/*.test.js')
    .pipe(mocha({
      reporter: 'spec'
    }))
});

gulp.task('watch', () => {
  gulp.watch(['test/**/*.test.js'], ['test']);
});
