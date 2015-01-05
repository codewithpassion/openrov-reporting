/**
 * Created by roboto on 5/01/15.
 */
module.exports = function(app) {

  app.post(
    '/reporting/reportRov',
    function(req, resp) {
      console.log(req.body);
      resp.statusCode = 200;
      resp.end();
    }
  );

};