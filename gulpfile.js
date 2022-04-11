'use strict';

var gulp = require('gulp'),
  fs = require('fs'),
  path = require('path'),
  sass = require('gulp-sass'), // module 선언
  sourcemaps = require('gulp-sourcemaps'),
  rename = require('gulp-rename'),
  handlebars = require('gulp-compile-handlebars'),
  spritesmith = require('gulp.spritesmith');


// Sass
gulp.task('sass', function() { // gulp $ 명령어
  gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      indentType: 'tab',
      indentWidth: 1
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./src/css'));
});


gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});


gulp.task('sprite', ['makeSprite', 'makeSpriteMap']);

function getFolders(dir) {
  return fs.readdirSync(dir)
    .filter(file => fs.statSync(path.join(dir, file)).isDirectory());
}

gulp.task('makeSprite', () => {
  var stream_arr = [];
  var options = {
    spritesmith: function(folder) {
      return {
        imgPath: path.posix.relative('src/css', path.posix.join('src/img', 'sp_' + folder + '.png')),
        imgName: 'sp_' + folder + '.png',
        cssName: '_sp_' + folder + '.scss',
        cssFormat: 'scss',
        padding: 10,
        cssTemplate: './gulpconf/sprite_template.hbs',
        cssSpritesheetName: 'sp_' + folder
      }
    }
  };

  getFolders('src/sprite').map(folder => {
    var spriteData = gulp.src(path.join('src/sprite', folder, '*.png'))
      .pipe(spritesmith(options.spritesmith(folder)));
    stream_arr.push(new Promise(function(resolve) {
      spriteData.img
        .pipe(gulp.dest('src/img'))
        .on('end', resolve);
    }));
    stream_arr.push(new Promise(function(resolve) {
      spriteData.css
        .pipe(gulp.dest(path.join('src/scss', 'sprite')))
        .on('end', resolve);
    }));
  });
  return Promise.all(stream_arr);
});

gulp.task('makeSpriteMap', ['makeSprite'], () => {
  gulp.src('gulpconf/sprite_maps_template.hbs')
    .pipe(handlebars({
      prefix: 'sp_',
      path: path.posix.relative(path.posix.join('src/scss', 'import'), path.posix.join('src/scss', 'sprite')),
      import: getFolders('src/sprite'),
      ratio: 2
    }))
    .pipe(rename('_sprite_maps.scss'))
    .pipe(gulp.dest(path.join('src/scss', 'import')));
});
