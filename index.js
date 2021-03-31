require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const {
  PORT_NUMBER,
  ALLOWED_CORS,
} = require('./utils/constants');
const rateLimiter = require('./middlewares/rateLimit');
const errorHandler = require('./middlewares/errorHandler');

const router = require('./routes/index');

const app = express();

app.use(cors({
  origin: ALLOWED_CORS,
}));

const {
  PORT = PORT_NUMBER,
} = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use(rateLimiter);

app.use('/', router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`); /* eslint-disable-line no-console */
});