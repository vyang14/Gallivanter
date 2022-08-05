const router = require('express').Router();
const userRoute = require('./user-routes');
const tripRoute = require('./trip-routes');

router.use('/users', userRoute);
router.use('/trip', tripRoute);

module.exports = router;

