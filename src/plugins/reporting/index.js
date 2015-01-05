var Q = require('q');
var routes = require('./routes');
var mongoose = require('mongoose');
var DB = require('./model/db');

module.exports = function(name, deps) {
  var socket = { emit: function(string, data) { console.log('shouldn\'t go here!'); }, broadcast: { emit: function() { console.log('shouldn\'t go here!'); } }};


  deps.io.on('connection', function (newSocket) {
    socket = newSocket;
  });

  new DB(mongoose).connect()
    .then(function(db) {
      routes.register(deps.app, db);
      console.log("Loaded Report End Point plugin");

    });
  return this;
};
