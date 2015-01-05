(function (window, document) {
  var Index = function Index(csocket) {
    this.socket = csocket;
    this.loadPlugins();
    console.log('loaded plugins');
    // Register the various event handlers
    this.listen();
  };
  Index.prototype.listen = function listen() {
    var Index = this;
  };
  Index.prototype.loadPlugins = function loadPlugins() {
    var Index = this;
    Index.plugins.forEach(function (plugin) {
      try {
        new plugin(Index);
      } catch (err) {
        console.log('error loading a plugin');
        console.log(err.message);
        throw err;
      }
    });
    Index.plugins = [];  //flush them out for now. May move to a loaded array if we use in the future
  };
  Index.prototype.addPlugin = function addPlugin(plugin) {
    var Index = this;
    Index.plugins.push(plugin);
    new plugin(Index);
  };
  // Static array containing all plugins to load
  Index.plugins = [];
  window.Index = Index;
}(window, document));