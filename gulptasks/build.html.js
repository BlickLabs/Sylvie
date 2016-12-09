var gulp = require('gulp'),
  config = require('../gulpfile.config'),
  nunjucksRender = require('gulp-nunjucks-render')
  data = require('gulp-data');

gulp.task('build:html', function () {
  gulp.src(config.paths.src.sectionTemplates)
  .pipe(data(function (file) {
    var sectionName = file.relative.split('.njk')[0];
    return {
      section: sectionName
    }
  }))
  .pipe(nunjucksRender({
    path: config.paths.src.templatesFolder,
    ext: '.html',
    inheritExtension: false
  }))
  .pipe(gulp.dest(config.paths.dist.root));
});
