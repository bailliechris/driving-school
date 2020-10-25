// Load .env file details
require('dotenv').config();

// Import requirements
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

// Set up App initially
var app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}));

app.use('/api/testi', require('./routes/testi'));
app.use('/api/user', require('./routes/user'));



// Unknown Route Error
app.use(function (req, res) {
    res.status(404).send("Sorry can't find that!")
  });

app.listen(PORT, function() {
    console.log("Listening! on ", PORT);
})