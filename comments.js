// Create web server
// Send back some JSON data

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
  res.json([
    {
      "id": 1,
      "author": "Pete Hunt",
      "text": "This is one comment"
    },
    {
      "id": 2,
      "author": "Jordan Walke",
      "text": "This is *another* comment"
    }
  ]);
});

app.listen(3000);
console.log('Server started: http://localhost:3000/');