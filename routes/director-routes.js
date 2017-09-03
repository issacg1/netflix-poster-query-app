const express = require('express');
const directorRoutes = express.Router();
const netflixHelper = require('../services/netflix-helper');
const directorControllers = require('../controllers/director-controller');
const relationship = require('../controllers/title-controller');
const authHelpers = require('../services/auth/auth-helpers');



directorRoutes.get('/', authHelpers.loginRequired, directorControllers.index);
directorRoutes.post('/results', netflixHelper.getMovieByDirector, directorControllers.results);
directorRoutes.post('/save', directorControllers.new, directorControllers.insert);
directorRoutes.post('/results/view-more', netflixHelper.getMovieByTitleAndYear, directorControllers.view)

module.exports = directorRoutes;
