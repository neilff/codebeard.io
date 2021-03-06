'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var rimraf = require('gulp-rimraf');

var refresh = require('gulp-livereload');
var lrserver = require('tiny-lr')();
var express = require('express');
var livereload = require('connect-livereload');
var livereloadport = 35729;
var serverport = 5000;

var server = express();

server.use(livereload({port: livereloadport}));
server.use(express.static('./dist'));

// Redirect all routes back to index
server.all('/', function(req, res) {
    res.sendfile('index.html', { root: 'dist' });
});

var config = {
  bundle: 'bundle.js',
  index: 'client/index.html',
  app: 'client/app/app.js',
  appDir: 'client/app',
  js: ['client/app/**/*.js', 'gulpfile.js'],
  html: ['client/app/**/*.html', '!client/app/index.html'],
  distApp: 'dist/app',
  distImages: 'dist/img',
  distCss: 'dist/css',
  distFonts: 'dist/fonts',
  dist: 'dist/',
  images: ['client/img/**/*'],
  css: ['client/styles/vendor/**/*.css'],
  fonts: ['client/fonts/**/*'],
  scss: ['client/styles/*.scss']
};

/**
 *  JSLint Task
 *
 *  Lint all JS files
 */
gulp.task('lint', function() {
  gulp.src(config.js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

/**
 *  JSLint Build Task
 *
 *  Lint all JS files
 */
gulp.task('lint:build', function() {
  return gulp.src(config.js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

/**
 *  Browserify Task
 *
 *  Browserify the app.js file
 */
gulp.task('browserify', function() {
  gulp.src([config.app])
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))

    // Bundle to a single file
    .pipe(concat(config.bundle))

    // Output it to our dist folder
    .pipe(gulp.dest(config.distApp))
    .pipe(refresh(lrserver));
});

/**
 *  Browserify Build Task
 *
 *  Browserify the app.js file
 */
gulp.task('browserify:build', function() {
  return gulp.src([config.app])
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(concat(config.bundle))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(config.distApp));
});

/**
 *  Copy Files Task
 *
 *  Used to copy static files for
 */
gulp.task('copy', function() {
  gulp.src(config.index)
    .pipe(gulp.dest(config.dist));

  gulp.src(config.html)
    .pipe(gulp.dest(config.distApp));

  gulp.src(config.css)
    .pipe(gulp.dest(config.distCss));

  gulp.src(config.fonts)
    .pipe(gulp.dest(config.distFonts));

  gulp.src(config.images)
    .pipe(gulp.dest(config.distImages));
});

/**
 *  Views Task
 *
 *  Move HTML files to dist/
 */
gulp.task('views', function() {
  gulp.src(config.index)
    .pipe(gulp.dest(config.dist));

  gulp.src(config.html)
    .pipe(gulp.dest(config.distApp))
    .pipe(refresh(lrserver));
});

/**
 *  Images Task
 *
 *  Move images to dist/
 */
gulp.task('images', function() {
  gulp.src(config.images)
    .pipe(gulp.dest(config.distImages));
});

/**
 *  Vendor CSS Task
 *
 *  Move vendor css to dist/
 */
gulp.task('css', function() {
  gulp.src(config.css)
    .pipe(gulp.dest(config.distCss));
});

/**
 *  Fonts Task
 *
 *  Move fonts to dist/
 */
gulp.task('fonts', function() {
  gulp.src(config.fonts)
    .pipe(gulp.dest(config.distFonts));
});

/**
 *  Styles Task
 *
 *  Compile CSS and move to dist
 */
gulp.task('styles', function() {
  gulp.src(config.scss)
    // Prevent Gulp from crashing when it hits an error compiling SCSS
    .pipe(sass({onError: function(e) { console.log(e); } }))

    // Autoprefix Config
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest(config.distCss))
    .pipe(refresh(lrserver));
});

/**
 *  Styles Build Task
 *
 *  Compile CSS and move to dist
 */
gulp.task('styles:build', function() {
  return gulp.src(config.scss)
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(rename('styles.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.distCss));
});

/**
 *  Watch Task
 */
gulp.task('watch', ['lint', 'browserify', 'views', 'images', 'css', 'styles', 'fonts'], function() {
  gulp.watch([config.js], [
    'lint',
    'browserify'
  ]);

  gulp.watch([config.html, config.index], [
    'views'
  ]);

  gulp.watch(config.scss, [
    'styles'
  ]);
});

/**
 *  Clean Task
 */
gulp.task('clean', function() {
  return gulp.src(config.dist, { read: false })
    .pipe(rimraf());
});

/**
 *  Serve Task
 *
 *  Setup livereload, watch tasks
 */
gulp.task('serve', ['watch'], function() {
  server.listen(serverport);
  lrserver.listen(livereloadport);
});

/**
 *  Build Task
 *
 *  Compile build for deployment
 */
gulp.task('build', function(callback) {
  runSequence('clean', ['lint:build', 'browserify:build', 'styles:build'], 'copy', callback);
});