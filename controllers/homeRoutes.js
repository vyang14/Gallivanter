const router = require("express").Router();
const { Trip, User } = require("../models");
const withAuth = require("../utils/auth");
const { get } = require("./api");


//Render Homepage
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));

    res.render("homepage", users);
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
router.get("/newTrip", async (req, res) => {
  try {
    const TripData = await Trip.findAll();
    const Trips = TripData.map((Trip) => Trip.get({ plain: true}));
    res.render("newTrip", {Trips})  
  } catch (err) {
    res.status(500).json(err);
  }  
});

//View all User's Trips
router.get("/myTrip", async (req, res) => {
  try {
    const TripData = await Trip.findAll();
    const Trips = TripData.map((Trip) => Trip.get({ plain: true }));
    res.render("myTrip", { Trips });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/myTrip", (req, res) => {

  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("myTrip");
});

module.exports = router;
