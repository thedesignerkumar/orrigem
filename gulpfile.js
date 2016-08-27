var gulp = require('gulp');
var webserver = require('gulp-webserver');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

gulp.task('scripts', function() {
    gulp.src('dev/scripts/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/assets/js'))
});

gulp.task('styles', function() {
	gulp.src('dev/scss/styles.scss')
		.pipe(compass({
			config_file: './config.rb',
			css: 'app/assets/css',
			sass: 'dev/sass'
		}))
        .pipe(gulp.dest('app/assets/css'))
});

gulp.task('images', function(){
	gulp.src('dev/images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('app/assets/images'))
});

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('watch', function() {
    gulp.watch('dev/sass/**/*.scss', ['styles']);
    gulp.watch('dev/scripts/**/*.js', ['scripts']);
    gulp.watch('dev/images/**/*', ['images']);
});

gulp.task('default', ['watch', 'styles', 'scripts', 'images', 'webserver']);
