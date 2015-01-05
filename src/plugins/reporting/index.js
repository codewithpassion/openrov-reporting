var Q = require('q');
var routes = require('./routes');

module.exports = function(name, deps) {
  var socket = { emit: function(string, data) { console.log('shouldn\'t go here!'); }, broadcast: { emit: function() { console.log('shouldn\'t go here!'); } }};

  deps.io.on('connection', function (newSocket) {
    socket = newSocket;
  });

  routes.register(deps.app);

  var result = { };
  console.log("Loaded Report End Point plugin");
  return result;
};
