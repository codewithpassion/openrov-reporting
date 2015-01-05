module.exports = {
  setup: function(deps) {

    deps.io.sockets.on('connection', function (socket) {
      deps.socket = socket;
    });
  }
};
