const mostPopularRouter = require('express').Router();

const getMostPopular = require('../controllers/mostPopular');

mostPopularRouter.get('/mostpopular/:type/:amount', getMostPopular);

module.exports = mostPopularRouter;