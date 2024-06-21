
const express = require('express');
const mongoose = require('./db/db');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// Require your routes and use them here
const userRoute = require('./route/userRoute');
app.use('/api', userRoute);
app.use('/', async (req, res) => {
  res.send("Hello World")
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
