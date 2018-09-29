/**
 * @file utilities.test.js
 *
 * Unit tests for the helper functions.
 * 
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2018 Bilger Yahov, all rights reserved.
 */

'use strict';

const assert = require('assert');

const utilities = require('../../src/utilities');

describe('Unit testing of the "utilities.js"', () => {
    describe('getModulesBasePath()', () => {
        it('Should return the exact same path as set on the constant.', () => {
            assert.strictEqual(utilities.getModulesBasePath(), utilities.MODULES_BASE_PATH);
        });
    });
    describe('constructSingleModuleBasePath(moduleName)', () => {
        it('Should return the single module`s base path in the form of MODULES_BASE_PATH/moduleName/', () => {
            let testModuleName = 'testModule';
            assert.strictEqual(utilities.constructSingleModuleBasePath(testModuleName), 
            utilities.MODULES_BASE_PATH + testModuleName + '/');
        });
    });
});