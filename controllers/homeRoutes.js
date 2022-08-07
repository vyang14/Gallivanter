const router = require("express").Router();
const {
  Trip,
  User,
} = require("../models");
const withAuth = require("../utils/auth");
const { get } = require("./api");

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();

          const users = userData.map((user) => user.get({ plain: true }));

        res.render('homepage',
           users
           )
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/myTrip', async (req, res) => {
  try {
      const TripData = await Trip.findAll();
      console.log("it is getting this")
        const Trips = TripData.map((Trip) => Trip.get({ plain: true }));
      res.render('myTrip',{Trips})
  } catch (err) {
      res.status(500).json(err);
  }
});

//Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//Create a Trip Route
router.get('/newTrip', (req, res) => { //require withAuth
    if (req.session.loggedIn) {
        res.redirect('/newTrip');
        return;
    }
    res.render('newTrip');
});

router.get('/myTrip', (req, res) => { //require withAuth
  if (req.session.loggedIn) {
      res.redirect('/login');
      return;
  }
  res.render('trip');
});

module.exports = router;
