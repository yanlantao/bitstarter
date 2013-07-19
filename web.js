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
  sendResponse(data.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
