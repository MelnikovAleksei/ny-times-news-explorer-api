const fetch = require('node-fetch');

const handleOriginalRes = require('./handleOriginalRes');

const {
  NY_TIMES_API_BASE_URL,
  BOOKS_BEST_SELLERS_LISTS_URL,
} = require('../utils/constants');

const { NY_TIMES_API_KEY } = process.env;

const getBooksBestSellersListsNames = (req, res, next) => {
    return fetch(`${NY_TIMES_API_BASE_URL}${BOOKS_BEST_SELLERS_LISTS_URL}/names.json?api-key=${NY_TIMES_API_KEY}`)
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

const getBooksBestSellersOverview = (req, res, next) => {
  return fetch(`${NY_TIMES_API_BASE_URL}${BOOKS_BEST_SELLERS_LISTS_URL}/overview.json?published_date=${req.params.date}&api-key=${NY_TIMES_API_KEY}`)
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

const getBooksBestSellersListByDate = (req, res, next) => {
  return fetch(`${NY_TIMES_API_BASE_URL}${BOOKS_BEST_SELLERS_LISTS_URL}/${req.params.date}/${req.params.list}.json?${req.params.offset}&api-key=${NY_TIMES_API_KEY}`)
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
  getBooksBestSellersListsNames,
  getBooksBestSellersOverview,
  getBooksBestSellersListByDate,
};