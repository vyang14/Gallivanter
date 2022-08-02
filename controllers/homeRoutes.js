const router = require('express').Router();
const { Completedtrip, Reviews, UserRequest, Users, User } = require('../models');
const withAuth = require('../utils/auth');
const { get } = require('./api');


router.get('/', async (req, res) => {
    const userData = await User.findAll({
        include: [{ model: UserRequest}]        
    });

    const users = userData.map((trip) => trip.get({ plain: true }));
    res.render('homepage', {
        users,
        loggedIn: req.session.loggedIn,
    });
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
router.get('/homepage', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('trip');
});

module.exports = router;