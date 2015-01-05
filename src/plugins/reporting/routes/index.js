/**
 * Created by roboto on 5/01/15.
 */

var routes = {};
routes.register = function(app) {
  routes.reporting = require('./reporting')(app);
};

module.exports = routes;