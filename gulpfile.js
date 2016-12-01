var gulp = require('gulp'),
  config = require('./gulpfile.config'),
  requireDir = require('require-dir');

requireDir('./gulptasks');

gulp.task('watch', function () {
  gulp.watch(config.paths.bower(''), ['build:bower']);
  gulp.watch(config.paths.src.styl, ['build:styles']);
  gulp.watch(config.paths.src.js, ['build:js']);
  gulp.watch(config.paths.src.fonts, ['copy:fonts']);
  gulp.watch(config.paths.src.img, ['copy:images']);
});

gulp.task('nowatch', [
  'build:bower',
  'build:styles',
  'build:js',
  'copy:fonts',
  'copy:images'
]);

gulp.task('default', ['nowatch', 'watch']);