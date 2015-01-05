var Q = require('q');

var db = function(mongoose) {
  var self = this;
  var mongoDb;

  self.connect = function() {
    var connection = Q.defer();

    mongoose.connect('mongodb://localhost/openrov-reporting');
    mongoDb = mongoose.connection;
    mongoDb.on('error', function(error) {connection.reject('Error while connecting to MongoDB: ' + error )});
    mongoDb.once('open', function () {
      connection.resolve(mongoose);
    });

    return connection.promise;
  }
  return self;
};

module.exports = db;