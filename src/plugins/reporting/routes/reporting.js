var RovReporter = require('../controllers/rovReporter');

module.exports = function(app, db) {

  var rovReporter = new RovReporter(db);

  app.post(
    '/reporting/reportRov',
    function(req, resp) {
      rovReporter.append(req.body)
        .then(function(rov) {
          resp.statusCode = 200;
          resp.send(rov);
          resp.end();
        }, function(error) {
          resp.statusCode = 500;
          resp.send(error);
          resp.end();
        })
        .done();
    }
  );

};