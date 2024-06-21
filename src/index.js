
const express = require('express');
const fileUpload = require('express-fileupload');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const flash = require('express-flash');
const mongoose = require('./db/db');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// Require your routes and use them here
app.use(fileUpload({
  createParentPath: true
}));

app.use(flash());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/uploads', express.static(path.join(__dirname, './uploads')));
app.use('/public', express.static(path.join(__dirname, './public')));
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const userRoute = require('./route/userRoute');
app.use('/api', userRoute);
app.use('/', async (req, res) => {
  res.send("Hello World")
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
