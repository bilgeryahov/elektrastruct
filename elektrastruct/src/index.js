/**
 * @file index.js
 *
 * Contains initial implementations of main process tasks.
 * 
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2018 Bilger Yahov, all rights reserved.
 */

'use strict';

module.exports = () => {
    const gulp = require('gulp');
    const exec = require('child-process-promise').exec;
    
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
        // Initialize files.
        return exec(`mkdir "./app/modules/${moduleName}/"`)
            .then((result) => {
                console.log('task - create_module: Logging standard output and standard error!');
                console.log(result.stdout);
                console.log(result.stderr);
                return exec(`touch ./app/modules/${moduleName}/${moduleName}.html` + ` ` +
                `./app/modules/${moduleName}/${moduleName}.scss` + ` ` + 
                `./app/modules/${moduleName}/${moduleName}.js`);
            })
            .then((result) => {
                console.log('task - create_module: Logging standard output and standard error!');
                console.log(result.stdout);
                console.log(result.stderr);
            })
            .catch((error) => {
                console.error(`task - create_module: Creating files failed!`);
                console.error(error);
            });
    });
};