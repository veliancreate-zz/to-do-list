var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
  response.render('index');
});

// app.get('/hello', function(request, response) {
//   response.send('<h1>Welcome to GithubSearch</h1>')
// });

server.listen(port, function() {
  console.log("Server listenning on port " + port);
});

module.exports = server;