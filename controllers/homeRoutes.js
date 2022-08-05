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

//Login route
router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//Create a Trip Route
router.get('/newTrip', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('newTrip');
});

router.get('/myTrip', async (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }
  res.render('myTrip');
});

module.exports = router;
