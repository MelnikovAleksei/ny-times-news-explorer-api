const PORT_NUMBER = 3000;
const ALLOWED_CORS = [
  'http://localhost:8080',
];

const NY_TIMES_API_BASE_URL = 'https://api.nytimes.com/svc';
const TOP_STORIES_URL = '/topstories/v2';
const MOST_POPULAR_URL = '/mostpopular/v2';
const BOOKS_BEST_SELLERS_LISTS_URL = '/books/v3/lists';
const MOVIE_CRITICS_URL = '/movies/v2/critics';


const INTERNAL_SERVER_ERROR_MSG = 'An error occurred on the server';

module.exports = {
  PORT_NUMBER,
  ALLOWED_CORS,
  INTERNAL_SERVER_ERROR_MSG,
  NY_TIMES_API_BASE_URL,
  TOP_STORIES_URL,
  MOST_POPULAR_URL,
  BOOKS_BEST_SELLERS_LISTS_URL,
  MOVIE_CRITICS_URL,
};