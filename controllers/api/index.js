const router = require('express').Router();
const userRoute = require('./user-routes');
const completedTripRoute = require('./completedTrip-routes');
const reviewsRoute = require('./reviewsRoutes');
const userRequestRoute = require('./userRequest-routes');

router.use('/users', userRoute);
router.use('/completedTrips', completedTripRoute);
router.use('/reviews', reviewsRoute);
router.use('/userRequests', userRequestRoute);

module.exports = router;

