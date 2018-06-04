const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const register = require('./routes/register.js');
const login = require('./routes/login.js')
const post = require('./routes/post.js');
const staticFiles = __dirname + './../build';

app.use(express.static(staticFiles));
app.use(function(req, res, next){
  res.set('Accept-Encoding', 'gzip');
  next();
});
app.use(compression());
app.use(bodyParser());
app.use('/register', register.router);
app.use('/login', login);
app.use('/post', post.router);

app.get('/post', (req, res)=>{
  res.json(post.posts);
})

const port = process.env.PORT || 3001;
app.listen(port);
