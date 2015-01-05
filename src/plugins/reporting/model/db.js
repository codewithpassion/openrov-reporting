var Q = require('q');
var FS = require("q-io/fs");

var db = function(mongoose) {
  var self = this;
  var mongoDb;

  self.connect = function() {
    var connection = Q.defer();

    mongoose.connect('mongodb://localhost/openrov-reporting');
    mongoDb = mongoose.connection;
    mongoDb.on('error', function(error) {connection.reject('Error while connecting to MongoDB: ' + error )});
    mongoDb.once('open', function () {
      loadModels(self)
        .then(function() {
          connection.resolve(self);
        });
    });

    return connection.promise;
  };

  function loadModels(instance) {
    return FS.list(__dirname)
      .then(function(files) {
        return files.filter(function(file) { return file.indexOf('Model') > -1 });
      })
      .then(function(modelFiles) {
        modelFiles.forEach(function(file) {
          var model = file.substring(0, file.indexOf('Model'));
          instance[model] = require(__dirname + '/' + file)(mongoose);
        })
      })
  }

  return self;
};

module.exports = db;