var gulp = require('gulp'),
  config = require('../gulpfile.config'),
  nunjucksRender = require('gulp-nunjucks-render');

gulp.task('build:html', function () {
  gulp.src(config.paths.src.sectionTemplates)
  .pipe(nunjucksRender({
    path: config.paths.src.templatesFolder,
    ext: '.html',
    inheritExtension: false
  }))
  .pipe(gulp.dest(config.paths.dist.root));
});