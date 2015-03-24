var express = require('express');
var app = express();
var morgan = require('morgan');  // log requests to the console (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var mongojs = require('mongojs');
var db = mongojs('mongodb://heroku_app35103118:43bjs4b1b91djq2vvgs3oe90bv@ds053838.mongolab.com:53838/heroku_app35103118', ['todolist']);
var bodyParser = require('body-parser');  // pull information from HTML POST (express4)

app.set('views', __dirname + '/public');
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.set('view engine', 'ejs');
var server = require('http').createServer(app);

// listen (start app with node server.js) ======================================

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/todolist', function(req, res){
  db.todolist.find(function(err, docs){
    res.json(docs);
  });
});

app.post('/todolist', function(req, res){
  console.log(req.body);
  db.todolist.insert(req.body, function(err, docs){
    res.json(docs);
  });
});

app.delete('/todolist/:id', function(req, res){
  var id = req.params.id;
  console.log(id);
  db.todolist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  });
});  

app.get('/todolist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.todolist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/todolist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.todolist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {content: req.body.content}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});


app.listen(3000);
console.log("App listening on port 3000");


module.exports = server;