var gulp = require('gulp');
var sass = require('gulp-sass');
var preFixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var sourceMaps = require('gulp-sourcemaps');
var rigger = require('gulp-rigger');
var cssMin = require('gulp-minify-css');
var rimRaf = require('rimraf');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var path = {
  build : {
    html : 'build/',
    js : 'build/js/',
    css: 'build/css/'
  },
  src : {
    html : 'app/index.html',
    js: 'app/js/code.js',
    style: 'app/css/styles.css'
  },
  clean : './build'
};

gulp.task('sass', function(){
  gulp.src('app/scss/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'));
});
gulp.task('watch', function(){
  gulp.watch('app/scss/*.scss', ['sass']);
  // Other watchers
});
gulp.task('html:build', function(){
  gulp.src(path.src.html)
  .pipe(rigger())
  .pipe(gulp.dest(path.build.html));
});
gulp.task('js:build', function(){
  gulp.src(path.src.js)
  .pipe(rigger())
  .pipe(uglify())
  .pipe(gulp.dest(path.build.js))
});
gulp.task('style:build', function(){
  gulp.src(path.src.style)
  .pipe(preFixer())
  .pipe(cssMin())
  .pipe(gulp.dest(path.build.css))
});
gulp.task('build' , [
  'html:build',
  'js:build',
  'style:build',
]);
