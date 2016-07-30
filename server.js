var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

app.use(morgan('dev'));

app.use(express.static(__dirname + '/app'));
app.use('/modules', express.static(path.join(__dirname + './node_modules')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(8080);
console.log('listening on 8080');

module.exports = app;
