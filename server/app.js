const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');

const url = `mongodb://user:user123@ds255451.mlab.com:55451/testingalgo`;
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (!err) console.log('connected to database');
  else throw new Error(err);
});

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('home home home');
});

app.use('/data', require('./routes/data'));

app.listen(port, () => console.log(`app listening on ${port}`));