/**
 * @fileoverview Eslint rules for AdonisJs applications and addons
 * @author virk
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  configs: {
    typescriptPackage: require('./ts-package.json'),
    typescriptApp: require('./ts-app.json')
  }
}
