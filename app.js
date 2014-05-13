var express = require('express');
var path = require('path');

var mongoose = require('mongoose');

var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes   = require('./backend/routes')

var app = express();

mongoose.set('debug', true);
mongoose.connect('mongodb://127.0.0.1/ember_node_todo');

app.set('port', process.env.PORT || 8080);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'frontend')));


app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

require('./backend/routes')(app);