require('dotenv').config();
const express = require('express');

const database = require('./lib/db');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();

database(app);
middleware(app);
routes(app);
