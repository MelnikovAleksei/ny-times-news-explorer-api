const fetch = require('node-fetch');

const handleOriginalRes = require('./handleOriginalRes');

const {
  NY_TIMES_API_BASE_URL,
  MOST_POPULAR_URL,
} = require('../utils/constants');

const { NY_TIMES_API_KEY } = process.env;

const getMostPopular = (req, res, next) => {
    return fetch(`${NY_TIMES_API_BASE_URL}${MOST_POPULAR_URL}/${req.params.type}/${req.params.amount}.json?api-key=${NY_TIMES_API_KEY}`)
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

module.exports = getMostPopular;