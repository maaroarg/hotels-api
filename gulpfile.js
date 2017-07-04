'use strict';

const gulp = require('gulp');
const jshint = require('gulp-jshint');

gulp.task('jshint', () => {});
gulp.src(['**/*.js','!node_modules/**','!public/**'])
.pipe(jshint())
.pipe(jshint.reporter('default'));
