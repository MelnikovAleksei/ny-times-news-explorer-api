const articleSearchRouter = require('express').Router();

const {
  getArticle,
} = require('../controllers/articleSearch');

articleSearchRouter.get('/articlesearch/:begin_date/:end_date/:fq/:page/:query/:sort', getArticle);

module.exports = articleSearchRouter;