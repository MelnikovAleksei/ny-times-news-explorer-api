const router = require('express').Router();

const topStoriesRouter = require('./topStories');
const mostPopularRouter = require('./mostPopular');
const bookBestSellersListRouter = require('./bookBestSellersList');
const moviesRouter = require('./movies');
const articleSearchRouter = require('./articleSearch');

router.use(topStoriesRouter);
router.use(mostPopularRouter);
router.use(bookBestSellersListRouter);
router.use(moviesRouter);
router.use(articleSearchRouter);

module.exports = router;