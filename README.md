# Ember-ace-shim - an Ember Shim for Ace

Currently you can use https://www.npmjs.com/package/ember-ace instead of this shim. But
if you want to be more free in what you want to do with ace, you can still use this plugin.
This shim was initially made to work with older versions of Ember-cli ( < 1.13) but that is no
longer relevant. The current version works with at least Ember 2.5.1.

# Guide
Install and save it to your dev dependencies
- `npm install --save-dev ember-ace-shim`

As we use the blueprint functionality of ember, it installs the ace bower
component automatically when install installing the ember-ace-shim. The path to the
ace files are defined in the `vendor/shims/ace.js` file.

~~~javascript
  ace.config.set('basePath', '/assets/javascript');
  ace.config.set('modePath', '/assets/javascript');
  ace.config.set('themePath', '/assets/javascript');
~~~

You will need to use `brocolli-funnel` to define where ember should load files from.

~~~javascript
  # The ember-cli-build.js in your project folder.
  var Funnel = require('broccoli-funnel');
  // Add relevant files for ace. When more modes or themes are needed, they will need to be
  // added to this list.
  var aceAssets = new Funnel('bower_components/ace-builds/src-noconflict/', {
    srcDir: '/',
    include: [
      'theme-ambiance.js',
      'theme-textmate.js',
      'mode-vala.js', // used for excel formula's
      'mode-twig.js', // used for SmartStrings
    ],
    destDir: '/assets/javascript'
  });

  // append the assets array to the build tree.
  return app.toTree([otherStuff, aceAssets]);
~~~

Then you should be all set. If you like to load them from another directory (it
really does not matter though, because the files are not really copied), you
will need to change the basePaths.
