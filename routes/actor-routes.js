const express = require('express');
const actorRoutes = express.Router();
const netflixHelper = require('../services/netflix-helper');
const actorControllers = require('../controllers/actor-controller');
const relationship = require('../controllers/title-controller');
const authHelpers = require('../services/auth/auth-helpers');


actorRoutes.get('/', authHelpers.loginRequired, actorControllers.index);
actorRoutes.post('/results', netflixHelper.getMovieByActor, actorControllers.results);
actorRoutes.post('/save', actorControllers.new, actorControllers.insert);
actorRoutes.post('/results/view-more', netflixHelper.getMovieByTitleAndYear, actorControllers.view);

module.exports = actorRoutes;
