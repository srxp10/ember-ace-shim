# Ember-ace-shim - an Ember Shim for Ace

For older versions of Ember-cli - in this case 1.13.15 - the really great new
awesome ember-ace addons are useless.. they simply depend on a higher version
of ember and ember-cli. To cope with the problem, I've created this simple
ember addon to wrap Ace.

Multiple attempts were made with ember-browsify to make Ace work, without
success, making it an Ember addon works fine in this case.

# Guide
Use your normal way of installing this plugin, 

- Add srxp10/ember-ace-shim to your package.json devDependencies
- Note that you will need to add `ace-builds: "1.2.8"` in your bower.json too, there will need to be a blueprint folder inside of this addon probably to make this work out-of-the-box. But this needs some investigation still. In the mean time, just bower install ace-builds yourself.
