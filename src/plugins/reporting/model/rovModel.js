var rovModel = function(mongoose) {

  var rovSchema = mongoose.Schema({
    bbSerial: String,
    installedPackages: [{ package: String, version: String}],
    locations: [{location: {lat: String, long: String, date: Date}}],
    lastUpdate: {type: Date, default: Date.now()}
  });

  var ROV = mongoose.model('ROV', rovSchema);
  return ROV;
};

module.exports = rovModel;