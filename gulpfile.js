var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html',  function() {
    browserSync.reload();
  });

  watch('./app/menu.html',  function() {
    browserSync.reload();
  });

  watch('./app/about.html',  function() {
    browserSync.reload();
  });

  watch('./app/contact.html',  function() {
    browserSync.reload();
  });

  watch('./app/work.html',  function() {
    browserSync.reload();
  });

  watch('./app/styles/**/*.css', function() {
    browserSync.reload();
  });
  watch('./app/script.js',  function() {
    browserSync.reload();
  });
});
