const express = require('express');

const feedRouter = require('./routes/feed');

const app = express();

app.use(express.json()); //instead of using bodyparser.json()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //allow domains
  res.setHeader('Access-Control-Allow-Methods','GET, POST, DELETE, PUT,PATCH');//allow methods
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');//allow headers that client may send
  next();
});

app.use('/feed',feedRouter);



app.listen(8080, ()=>{
  console.log('listening on 8080');
});