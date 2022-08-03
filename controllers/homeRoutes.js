const router = require("express").Router();
const {
  Completedtrip,
  Reviews,
  UserRequest,
  Users,
  User,
} = require("../models");
const withAuth = require("../utils/auth");
const { get } = require("./api");

//Display Carousel
router.get("/", (req, res) => {
  res.render("homepage");
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

module.exports = router;
