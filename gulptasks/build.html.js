var gulp = require('gulp'),
  config = require('../gulpfile.config'),
  nunjucks = require('gulp-nunjucks'),
  change_ext = require('gulp-ext-replace');

gulp.task('build:html', function () {
  gulp.src(config.paths.src.sectionTemplates)
  .pipe(nunjucks.compile())
  .pipe(change_ext('html'))
  .pipe(gulp.dest(config.paths.dist.root));
});