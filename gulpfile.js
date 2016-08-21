var gulp = require('gulp'),
    gldr = require('gulp-load-plugins')({
        lazy: true
    }),
    del = require('del');

var Builder = require('systemjs-builder');

gulp.task('default', gldr.taskListing);

gulp.task('clean-build', function(){
   return del('public/js/*.min.js');
});

gulp.task('bundle-vendor',['clean-build'], function() {
  return gulp.src([
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',
    'systemjs.config.js'
  ])
  .pipe(gldr.concat('vendor.min.js'))
  .pipe(gldr.uglify())
  .pipe(gulp.dest('public/js'));
});

//good
gulp.task('build-app',['bundle-vendor'], function() {
  var builder = new Builder('', 'public/js/systemjs.config.js');

  return builder.buildStatic('app', 'public/js/app.min.js',{encodeNames: false})
    .catch(function(err) {
      console.error('>>> [systemjs-builder] Bundling failed'.bold.green, err);
    });
});
