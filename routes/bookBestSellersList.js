const bookBestSellersListRouter = require('express').Router();

const {
  getBooksBestSellersListsNames,
  getBooksBestSellersOverview,
  getBooksBestSellersListByDate,
} = require('../controllers/books');

bookBestSellersListRouter.get('/lists/names', getBooksBestSellersListsNames);
bookBestSellersListRouter.get('/lists/overview/:date', getBooksBestSellersOverview);
bookBestSellersListRouter.get('/lists/:date/:list/:offset', getBooksBestSellersListByDate);

module.exports = bookBestSellersListRouter;