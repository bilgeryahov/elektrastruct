/**
 * @file file-templates.js
 *
 * Auto-generated files for every module will contain some
 * basic template markup/code.
 * 
 * > HTML initial markup
 * > JavaScript initial controller code
 * > SCSS TODO: Write-up.
 * 
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2018 Bilger Yahov, all rights reserved.
 */

'use strict';

module.exports = {
    getJavaScriptCode = (moduleName) => {
        return `
            const ${moduleName} = ( () => {
                const Logic = {
                    // Data fields.

                    // Private functions.
                
                    // Public functions.   
                };

                // Expose public functions.
                return{
                    
                }
            })();
        `;
    },

    getHTMLMarkup = (moduleName) => {
        return `
            <div id="${moduleName}Module">
            </div>
            <script type="text/x-handlebars-template" id="${moduleName}Template">
            </script>
        `;
    }
};