const express = require('express');
const router = express.Router();
const basicAuth = require('express-basic-auth')

//Create User JSON object
const username = process.env.APP_USERNAME;
const password = process.env.APP_PASSWORD;
const users = {};
users[username] = password;

//Uses a JSON response body
router.use(function (req, res, next) {
    basicAuth({
        users,
        unauthorizedResponse: { auth: 'Failed' }
    });
    next()
});

//Check login route 
router.get('/login', function (req, res) {

    //set user cookie?
    req.session.user = 1;
    res.status(200).send({ details: 'Success' });
    console.log("User Request - Login Success");
});

// Create new post route
router.post('/create', function (req, res, next) {
    res.status(200).send({ details: 'Created Post' });
    console.log("Created post.");
    next();
});

module.exports = router;