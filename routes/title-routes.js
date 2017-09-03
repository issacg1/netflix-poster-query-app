const express = require('express');
const titleRoutes = express.Router();
const netflixHelper = require('../services/netflix-helper');
const titleControllers = require('../controllers/title-controller');
const relationship = require('../controllers/title-controller');
const authHelpers = require('../services/auth/auth-helpers');


titleRoutes.get('/', authHelpers.loginRequired, titleControllers.index);
titleRoutes.post('/save', titleControllers.new, titleControllers.insert);
titleRoutes.post('/results', netflixHelper.getMovieByTitleAndYear, titleControllers.results);

module.exports = titleRoutes;
