const express = require('express');
const titleRoutes = express.Router();
const netflixHelper = require('../services/netflix-helper');
const titleControllers = require('../controllers/title-controller');


titleRoutes.get('/', titleControllers.index);
titleRoutes.post('/results', netflixHelper.getMovieByTitleAndYear, titleControllers.results);


module.exports = titleRoutes;
