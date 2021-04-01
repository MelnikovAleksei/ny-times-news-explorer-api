const fetch = require('node-fetch');

const handleOriginalRes = require('./handleOriginalRes');

const {
  NY_TIMES_API_BASE_URL,
  ARTICLE_SEARCH_URL,
} = require('../utils/constants');

const { NY_TIMES_API_KEY } = process.env;

const getArticle = (req, res, next) => {
    return fetch(`${NY_TIMES_API_BASE_URL}${ARTICLE_SEARCH_URL}.json?begin_date=${req.params.begin_date}&end_date=${req.params.end_date}&fq=${req.params.fq}&page=${req.params.page}&q=${req.params.query}&sort=${req.params.sort}&api-key=${NY_TIMES_API_KEY}`)
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
  getArticle
};