const fetch = require('node-fetch');

const handleOriginalRes = require('./handleOriginalRes');

const {
  NY_TIMES_API_BASE_URL,
  MOVIE_CRITICS_URL,
  MOVIE_REVIEWS_URL,
} = require('../utils/constants');

const { NY_TIMES_API_KEY } = process.env;

const getMovieCritics = (req, res, next) => {
    return fetch(`${NY_TIMES_API_BASE_URL}${MOVIE_CRITICS_URL}/${req.params.name}.json?api-key=${NY_TIMES_API_KEY}`)
      .then((response) => {
        return handleOriginalRes(response, res)
      })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.send(err);
        console.log(err);
      })
      .catch(next)
};

const getMovieReviews = (req, res, next) => {
  return fetch(`${NY_TIMES_API_BASE_URL}${MOVIE_REVIEWS_URL}/${req.params.type}.json?offset=${req.params.offset}&${req.params.order}&api-key=${NY_TIMES_API_KEY}`)
    .then((response) => {
      return handleOriginalRes(response, res)
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    })
    .catch(next)
};

module.exports = {
  getMovieCritics,
  getMovieReviews,
};