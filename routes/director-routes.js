const express = require('express');
const directorRoutes = express.Router();
const netflixHelper = require('../services/netflix-helper');
const directorControllers = require('../controllers/director-controller');

//import controllers
//import services
//define routes below

directorRoutes.get('/', (req, res) =>{
  res.render('search-director/search-director-index');
});

//directorRoutes.post('/results', netflixHelper.getMovieByDirector, directorControllers.results);

module.exports = directorRoutes;
