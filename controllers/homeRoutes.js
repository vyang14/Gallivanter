const router = require('express').Router();
const { Completedtrip, Reviews, UserRequest, Users, User } = require('../models');
const withAuth = require('../utils/auth');
const { get } = require('./api');

//Display Carousel
router.get('/', (req, res) => {
    try {
        res.render("homepage")
    } catch (err) {
        res.status(500).json(err);
    }
});

//Login route
router.get('/login', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

//Create a Trip Route
// router.get('/newTrip', async (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }
//     res.render('trip');
// });

module.exports = router;