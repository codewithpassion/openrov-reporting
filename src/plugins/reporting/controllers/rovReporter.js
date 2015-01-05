var Q = require('q');
var rovReporter = function(db) {
  var self = this;

  self.append = function(reportDto) {

    var result = Q.defer();

    var rov = new db.rov({bbSerial: reportDto.rovInformation.bbSerial});
    rov.save(function(err, savedRov) {
      if (err) result.reject(err);
      else { result.resolve(rov); }
    });

    return result.promise;
  };

};

module.exports = rovReporter;