const express = require('express');
const profileRoutes = express.Router();
const netflixHelper = require('../services/netflix-helper');
const actorControllers = require('../controllers/actor-controller');
const relationship = require('../controllers/title-controller');
const authHelpers = require('../services/auth/auth-helpers');
const profileControllers = require('../controllers/profile-controllers')

profileRoutes.get('/', authHelpers.loginRequired, profileControllers.userComments, profileControllers.userMovies, profileControllers.index);


module.exports = profileRoutes;
