/**
 * @file gulpfile.js
 *
 * Define the Gulp tasks that will be used in the project.
 * 
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2018 Bilger Yahov, all rights reserved.
 */

'use strict';

const gulp = require('gulp');
require('./src/index.js')();

gulp.task('cm', ['create_module']);