/**
 * @file utilities.js
 *
 * Helper functions.
 * 
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2018 Bilger Yahov, all rights reserved.
 */

'use strict';

module.exports = {
    MODULES_BASE_PATH: `./app/modules/`,
    
    getModulesBasePath: () => {
        return module.exports.MODULES_BASE_PATH;
    },
    
    constructSingleModuleBasePath: (moduleName) => {
        return `${module.exports.MODULES_BASE_PATH}${moduleName}/`;
    }
}