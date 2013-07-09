var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  console.log(data.toString('utf-8');
  var content = data.toString('utf-8');
app.get('/', function(request, response) {
  response.send(content);
});

});

/*
app.get('/', function(request, response) {
  response.send(content);
});
*/
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
