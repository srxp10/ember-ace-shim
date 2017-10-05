/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ace-shim',
  included: function included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/ace-builds/src-noconflict/ace.js');

    app.import('vendor/ace.js', {
      exports: {
        ace: ['default']
      }
    });
  }
};