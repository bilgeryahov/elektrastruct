/**
 * @file gulp-tasks.js
 *
 * Implementations of main Gulp tasks.
 * 
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2018 Bilger Yahov, all rights reserved.
 */

'use strict';

module.exports = () => {
    // ------------------------------------------------------------
    //                      Dependencies section.
    // ------------------------------------------------------------

    // External.
    const gulp = require('gulp');

    // ------------------------------------------------------------
    //                      Gulp tasks implementations.
    // ------------------------------------------------------------

    gulp.task('createModule', () => {
        // Prepare name for the new module.
        if (process.argv.indexOf('--name') === -1) {
            console.error('gulp-tasks.js#createModule(): Please provide --name flag!');
            return;
        }
        let moduleName = process.argv[process.argv.indexOf('--name') + 1];
        if (!moduleName || typeof moduleName === 'undefined' || moduleName === '') {
            console.error('gulp-tasks.js#createModule(): Please provide a name for the module!');
            return;
        }
        // Remove all non-letters.
        moduleName = moduleName.replace(/[^a-z]/gi, '');

        // TODO: Check for presence of another module with the same name.

        // TODO: Take all the process steps for creating a new module.
    });
};