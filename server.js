var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    path = require('path');

var userList = [
  { id: 1, username: 'abby', email: 'abby@test.com', password: 'password' },
  { id: 2, username: 'bill', email: 'bill@test.com', password: 'password' },
  { id: 3, username: 'cate', email: 'cate@test.com', password: 'password' }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT');
  res.setHeader('Access-Control-Allow-Headers', 'content-type, Authorization');
  next();
});

app.use(morgan('dev'));

app.use(express.static(__dirname + '/app'));
app.use('/modules', express.static(path.join(__dirname + '/node_modules')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.get('/api/users/email_exists', (req, res) => {
  var email = req.query.email;

  console.log(email);

  var user = userList.find(u => {
    return u.email === email;
  });

  if (user === undefined) {
    user = false;
  }

  res.send(user);
});

app.get('/api/users/username_exists', (req, res) => {
  var username = req.query.username;

  var user = userList.find(user => {
    return user.username === username;
  });

  if (user === undefined) {
    user = false;
  }

  res.json(user);
})

app.get('/api/users/:id', (req, res) => {
  var id = req.params.id;

  var user = userList.find((u) => {
    return u.id === Number(id);
  });

  res.json(user);
});

app.put('/api/users/:id', (req, res) => {
  var id = req.params.id;
  var newEmail = req.body.email;

  var user = userList.find((u) => {
    return u.id === Number(id);
  });

  user.email = newEmail;

  res.json(user)
});







app.listen(8080);
console.log('listening on 8080');

module.exports = app;
