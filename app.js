// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const usersRouter = require('./routes/users');

mongoose.connect('mongodb://localhost/rest-api', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(bodyParser.json());

app.use('/users', usersRouter);

app.listen(3000, () => console.log('Server Started'));
