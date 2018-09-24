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
    //                      Dependencies.
    // ------------------------------------------------------------

    // External.
    const gulp = require('gulp');
    const fs = require('fs');

    // Internal.
    const createModule = require('./create-module/create-module');
    const utilities = require('./utilities');

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

        // Check for presence of another module with the same name.
        if (fs.existsSync(utilities.constructSingleModuleBasePath(moduleName))) {
            console.error('gulp-tasks.js#createModule(): Module with this name has already been created!');
            return;
        }

        return createModule.directoryInit(moduleName)
            .then(() => {
                return createModule.filesInit(moduleName);
            })
            .then(() => {
                return createModule.generateJavaScriptTemplate(moduleName);
            })
            .then(() => {
                return createModule.generateHTMLMarkup(moduleName);
            })
            .catch((error) => {
                console.error('gulp-tasks.js#createModule(): Error!');
                console.error(error);
            });
    });
};