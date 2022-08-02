const router = require('express').Router();
const userRoutes = require('./userRoutes');
const completedtripRoute = require('./completedtripRoute');
const reviewsRoutes = require('./reviewsRoutes');
const userrequestRoute = require('./userrequestRoute');

router.use('/users', userRoutes);
router.use('/completedtrips', completedtripRoute);
router.use('/reviews', reviewsRoutes);
router.use('/completedtrips', userrequestRoute);

module.exports = router;

