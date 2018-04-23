(function() {
  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      // Set default path - this is going to help with selecting a correct theme for example.
      ace.config.set('basePath', '/assets/javascript');
      ace.config.set('modePath', '/assets/javascript');
      ace.config.set('themePath', '/assets/javascript');

      return values;
    });
  }

  generateModule('ace', {'default': this.ace});
})();
