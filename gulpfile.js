//걸프 의존성//걸프 의존성
 const gulp = require('gulp');
 const babel = require('gulp-babel');
 const eslint = require('gulp-eslint');

 gulp.task('default',function() {
   // 걸프작업
   gulp.src(["es6/**/*.js","public/es6/**/*.js"])
   .pipe(eslint())
   .pipe(eslint.format());

   gulp.src("es6/**/*.js")
   .pipe(babel())
   .pipe(gulp.dest("dist"));

   gulp.src("public/es6/**/*.js")
   .pipe(babel())
   .pipe(gulp.dest("public/dist"));

 });
