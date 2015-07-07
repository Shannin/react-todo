var path = require('path');
var Express = require('express');

var app = Express();
var server;

const PATH_STYLES = path.resolve(__dirname, 'www/styles');
const PATH_DIST = path.resolve(__dirname, 'out/');

app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'out/index.html'));
});

server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});