const fetch = require('node-fetch');

const {
  NY_TIMES_API_BASE_URL,
  MOVIE_CRITICS_URL,
} = require('../utils/constants');

const { NY_TIMES_API_KEY } = process.env;

const getMovieCritics = (req, res, next) => {
    return fetch(`${NY_TIMES_API_BASE_URL}${MOVIE_CRITICS_URL}/${req.params.name}.json?api-key=${NY_TIMES_API_KEY}`)
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .catch(next)
};

module.exports = {
  getMovieCritics,
};