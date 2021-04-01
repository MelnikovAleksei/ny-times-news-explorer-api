const bookBestSellersListRouter = require('express').Router();

const {
  getBooksBestSellersListsNames,
  getBooksBestSellersListByDate,
} = require('../controllers/books');

bookBestSellersListRouter.get('/lists/names', getBooksBestSellersListsNames);
bookBestSellersListRouter.get('/lists/:date/:list/:offset', getBooksBestSellersListByDate);

module.exports = bookBestSellersListRouter;