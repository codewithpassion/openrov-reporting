/**
 * Created by roboto on 5/01/15.
 */

var routes = {};
routes.register = function(app, db) {
  routes.reporting = require('./reporting')(app, db);
};

module.exports = routes;