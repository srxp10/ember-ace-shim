/*jshint node:true*/
module.exports = {
  description: 'Ace addon',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }

  normalizeEntityName: function() {
    // allows to run ember -g ember-chartist-shim and not blow up
    // because ember cli normally expects the format
    // ember generate <entityName> <blueprint>
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('ace-builds');
  }
};