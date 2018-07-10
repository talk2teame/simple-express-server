var express = require('express');
var app = express();

var userdata = require("./user.json");
 
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/api/users', function (req, res){
    res.json(userdata);
})
app.listen(3000);