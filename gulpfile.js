'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var path = require('path');

var less_source = './src/style/**/*.less';

gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: "./dist",
        ui: {
          port: 8000,
        }
    });
    let dist_files = 'dist/**/*';
    gulp.watch(less_source, ['less']);
    gulp.src(dist_files)
        .pipe(watch(dist_files))
        .on('change', browserSync.reload);

    gulp.src('src/**/*.html')
        .pipe(watch('src/**/*.html'))
        .pipe(gulp.dest('dist'));

    // gulp.src(['./src/**/*.js', './src/**/*.html', './src/**/*.css'])
    //     .pipe(watch(['./src/**/*.js', './src/**/*.html', './src/**/*.css']))
    //     .on('change', browserSync.reload);

});

gulp.task('less', function () {
    try {
        return gulp.src(less_source)
            // .pipe(watch(less_source))
            .pipe(
                less({
                    paths: [ path.join(__dirname, 'less', 'includes') ]
                })
                .on('error', function(err){
                    console.error(err);
                    this.emit('end');
                })
            )
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('./dist/style'))
            .pipe(browserSync.stream());

        // .pipe(connect.reload());
    } catch( e) {
        console.log ('has error', e);
    }
});

gulp.task('default', ['serve']);
