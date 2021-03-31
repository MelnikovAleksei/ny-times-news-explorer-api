const router = require('express').Router();

const topStoriesRouter = require('./topStories');
const mostPopularRouter = require('./mostPopular');
const bookBestSellersListRouter = require('./bookBestSellersList');

router.use(topStoriesRouter);
router.use(mostPopularRouter);
router.use(bookBestSellersListRouter);

module.exports = router;