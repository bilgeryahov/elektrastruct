/**
 * @file main-process-tasks.js
 *
 * Implementations of main process tasks.
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
    const exec = require('child-process-promise').exec;
    const fs = require('fs');
    
    // Internal.
    const utilities = require('./utilities-process-tasks');

    // ------------------------------------------------------------
    //                      Task implementations.
    // ------------------------------------------------------------

    gulp.task('create_module', () => {
        // Prepare name for the new module.
        if (process.argv.indexOf('--name') === -1) {
            console.error('task - create_module: Please provide --name flag!');
            return;
        }
        let moduleName = process.argv[process.argv.indexOf('--name') + 1];
        if (!moduleName || typeof moduleName === 'undefined' || moduleName === '') {
            console.error('task - create_module: Please provide a name for the module!');
            return;
        }
        // Remove all non-letters.
        moduleName = moduleName.replace(/[^a-z]/gi, '');
        // Initialize module files.
        return exec(`mkdir "./app/modules/${moduleName}/"`)
            .then(() => {
                return exec(`touch ./app/modules/${moduleName}/${moduleName}.html` + ` ` +
                `./app/modules/${moduleName}/${moduleName}.scss` + ` ` + 
                `./app/modules/${moduleName}/${moduleName}.js`);
            })
            .then(() => {
                return new Promise((resolve, reject) => {
                    fs.writeFile(`./app/modules/${moduleName}/${moduleName}.js`, utilities.generateJavaScriptTemplate(moduleName),
                        (error) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve();
                            }
                        });
                });
            })
            .then(() => {
                console.log(`task - create_module: Finished creating ${moduleName} module!`);
            })
            .catch((error) => {
                console.error(`task - create_module: Creating ${moduleName} module failed!`);
                console.error(error);
            });
    });
};