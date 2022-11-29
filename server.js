// Requires
const express = require('express');
const mongoose = require('mongoose');

// Initiate app and Port
const app = express();
const PORT = process.env.PORT || 3001;

// Use routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

// Mongoose DB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pizza-hunt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Logs mono queries
mongoose.set('debug', true);
// Connects and listens on port 3001
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));