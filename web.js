var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var sendResponse = function (content) {
  app.get('/', function(request, response) {
    response.send(content);
  });
};

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  console.log(data.toString('utf-8'));
  sendResponse(data.toString('utf-8'));
});
/*
var sendReponse = function (content) {
  app.get('/', function(request, response) {
    response.send(content);
  });
};

app.get('/', function(request, response) {
  response.send(content);
});
*/
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
