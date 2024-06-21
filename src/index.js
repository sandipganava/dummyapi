const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('express-flash');
const mongoose = require('./db/db');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(express.static('./'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
app.use(fileUpload({
  createParentPath: true
}));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes setup
const userRoute = require('./route/userRoute');
app.use('/api', userRoute);

app.use('/server', async (req, res) => {
  res.send("Hello World");
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  
  res.status(404).send("not found");
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
