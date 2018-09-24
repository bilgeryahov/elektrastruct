/**
 * @file create-module.js
 *
 * Contains small unit functions for all the steps to be taken
 * while creating a new module.
 * 
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2018 Bilger Yahov, all rights reserved.
 */

'use strict';

    // ------------------------------------------------------------
    //                      Dependencies.
    // ------------------------------------------------------------

// External.
const exec = require('child_process').exec;
const fs = require('fs');

// Internal.
const fileTemplates = require('./file-templates');

    // ------------------------------------------------------------
    //                      Unit function implementations.
    // ------------------------------------------------------------

module.exports = {
    /**
     * Creates the directory for the module. 
     * 
     * @param {string} moduleName Name, which will be used for naming the directory.
     * 
     * @returns {Promise} Promise object, which represents the result of creating the 
     * directory.
     */
    directoryInit = (moduleName) => {
        return new Promise((resolve, reject) => {
            exec(`mkdir "./app/modules/${moduleName}/"`, (error, stdout, stderr) => {
                if (error) {
                  reject(error);
                }
                console.log(`create-module.js#directoryInit(): stdout -> ${stdout}`);
                console.error(`create-module.js#directoryInit(): stderr -> ${stderr}`);
                resolve();
              });
        });
    },

    /**
     * Creates three files for the new module. An HTML markup file, a JavaScript controller
     * file and a SCSS styles file.
     * 
     * @param {string} moduleName Name, which will be used for naming the new files.
     * 
     * @returns {Promise} Promise object, which represents the result of creating those files.
     */
    filesInit = (moduleName) => {
        return new Promise((resolve, reject) => {
            exec(`touch ./app/modules/${moduleName}/${moduleName}.html` + ` ` +
                `./app/modules/${moduleName}/${moduleName}.scss` + ` ` + 
                `./app/modules/${moduleName}/${moduleName}.js`, (error, stdout, stderr) => {
                if (error) {
                  reject(error);
                }
                console.log(`create-module.js#filesInit(): stdout -> ${stdout}`);
                console.error(`create-module.js#filesInit(): stderr -> ${stderr}`);
                resolve();
              });
        });
    },

    /**
     * Generates basic code template for the JavaScript controller.
     * 
     * @param {string} moduleName Name, which will be used for naming the newly created
     * controller.
     * 
     * @returns {Promise} Promise object, which represents the result of a write operation
     * to the specified file.
     */
    generateJavaScriptTemplate = (moduleName) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(`./app/modules/${moduleName}/${moduleName}.js`, fileTemplates.getJavaScriptCode(moduleName),
                (error) => {
                    if (error) {
                        reject(error);
                    }
                    resolve();
                });
        });
    },

    /**
     * Generates basic markup template for the HTML file.
     * 
     * @param {string} moduleName Name, which will be used for naming the HTML 
     * <div> element for this module, as well as the Handlebard template.
     * 
     * @returns {Promise} Promise object, which represents the result of a write operation
     * to the specified file.
     */
    generateHTMLMarkup = (moduleName) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(`./app/modules/${moduleName}/${moduleName}.html`, fileTemplates.getHTMLMarkup(moduleName),
                (error) => {
                    if (error) {
                        reject(error);
                    }
                    resolve();
                });
        });
    },
};