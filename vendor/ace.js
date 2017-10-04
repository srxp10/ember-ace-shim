(function() {
    function generateModule(name, values) {
        define(name, [], function() {
            'use strict';

            // Set default path - this is going to help with selecting a correct theme for example.
            values.default.config.set('basePath', 'bower_components/ace-builds/src-noconflict');

            return values;
        });
    }

    generateModule('ace', { 'default': this.ace });
})();