'use strict';

const gulp = require('gulp'),
    autoPrefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    sourceMaps = require('gulp-sourcemaps'),
    imageMin = require('gulp-imagemin'),
    pngQuant = require('imagemin-pngquant'),
    browserSync = require('browser-sync').create();

const path = {
    public: {
        css: 'public/css',
        img: 'public/img',
        fonts: 'public/fonts'
    },

    src: {
        style: 'src/scss/main.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },

    watch: {
        style: 'src/scss/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },

    clean: './public'
};

const serverConfig = {
    server: {
        baseDir: "./public"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "My_project",
    files: [path.public.css, path.public.img, 'public/*.html']
};

gulp.task('style:build', function() {
    return gulp.src(path.src.style)
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(minifyCss())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.public.css))
        .pipe(browserSync.stream());
});

gulp.task('image:build', function() {
    return gulp.src(path.src.img)
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngQuant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.public.img))
        .pipe(browserSync.stream());
});

gulp.task('fonts:build', function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.public.fonts))
        .pipe(browserSync.stream());
});

gulp.task('build', gulp.series('style:build', 'image:build', 'fonts:build'));

gulp.task('serve', function() {
    browserSync.init(serverConfig);
});

gulp.task('start', function() {
    gulp.watch(path.src.style, gulp.series('style:build'));
    gulp.watch(path.src.img, gulp.series('image:build'));
    gulp.watch(path.src.fonts, gulp.series('fonts:build'));
});


