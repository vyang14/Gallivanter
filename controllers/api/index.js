const router = require('express').Router();
const userRoutes = require('./userRoutes');
const completedtripRoute = require('./completedtripRoute');
const reviewsRoutes = require('./reviewsRoutes');
const userrequestRoute = require('./userrequestRoute');

router.use('/readers', readerRoutes);
router.use('/cards', libraryCardRoutes);

module.exports = router;

