const topStoriesRouter = require('express').Router();

const getTopStories = require('../controllers/topStories');

topStoriesRouter.get('/topstories/:section', getTopStories);

module.exports = topStoriesRouter;