const moviesRouter = require('express').Router();

const {
  getMovieCritics,
  getMovieReviews,
} = require('../controllers/movies');

moviesRouter.get('/critics/:name', getMovieCritics);
moviesRouter.get('/reviews/:type/:offset/:order', getMovieReviews);

module.exports = moviesRouter;