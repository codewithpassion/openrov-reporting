/**
 * Created by roboto on 5/01/15.
 */
app.post(
  '/reporting/reportRov',


  function(req, resp) {

    var rov = new db.rov({bbSerial: req.body.rovInformation.bbSerial});
    rov.save(function(err, rov) {
      if (err) return console.error(err);
      else { console.log('Successfully saved ROV with bb serial: ' + rov.bbSerial)}
    });

    resp.statusCode = 200;
    resp.end();
  }
);



module.exports = function(app, db) {

};