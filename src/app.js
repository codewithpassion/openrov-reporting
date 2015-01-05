var forever = require('forever-monitor');
var child = new forever.Monitor(__dirname + '/reporting.js', {
    max: 3,
    silent: process.env.NODE_DEBUG === 'false',
    options: [],
    'logFile': '/var/log/openrov.reporting.log',
    'outFile': '/var/log/openrov.reporting.log',
    'errFile': '/var/log/openrov.reporting.err.log'
  });
child.on('exit', function () {
  console.log('reporting.js has exited after 3 restarts');
});
if (process.platform === 'linux') {
  process.on('SIGTERM', function () {
    console.error('got SIGTERM, shutting down...');
    child.stop();
  });
  process.on('SIGINT', function () {
    console.error('got SIGINT, shutting down...');
    child.stop();
  });
}
child.start();
