/**
 * @file utilities-process-tasks.js
 *
 * Utilities for the main process tasks.
 * 
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2018 Bilger Yahov, all rights reserved.
 */

'use strict';

module.exports = {
    generateJavaScriptTemplate (moduleName) {
        // Remove all non-letters.
        moduleName = moduleName.replace(/[^a-z]/gi, '');
        return `
            const ${moduleName} = ( () => {
                const Logic = {
                    // Data fields.
                    _moduleName: '${moduleName}',

                    // Private functions.
                    _getTime () {
                        return new Date().getTime();
                    },

                    _getModuleName () {
                        return this._moduleName;
                    },

                    // Public functions.
                    getGreeting () {
                        return _getModuleName() + ' module says Hi at ' + _getTime();
                    }
                };

                // Expose public functions.
                return{
                    getGreeting () {
                        return Logic.getGreeting();
                    }
                }
            })();
        `;
    }
};