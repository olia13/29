var express = require('express');
var app = express();
var fs = require('fs');

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    console.log('call /');
  res.send('hello world');
});

app.get('/persons', function(req, res) {

  fs.readFile(__dirname + '/credential/cred.json', 'utf8', function (err, data) {
    res.send(data);
    res.end(data);
  });
});


app.listen(3000, function(){
    console.log('connect 3000');
});