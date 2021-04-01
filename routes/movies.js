const moviesRouter = require('express').Router();

const {
  getMovieCritics,
} = require('../controllers/movies');

moviesRouter.get('/critics/:name', getMovieCritics);

module.exports = moviesRouter;