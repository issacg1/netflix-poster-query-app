const express = require('express');
const actorRoutes = express.Router();
const netflixHelper = require('../services/netflix-helper');
const actorControllers = require('../controllers/actor-controller');

//import controllers
//import services
//define routes below
actorRoutes.get('/', (req,res) =>{
  res.render('search-actor/search-actor-index');
});

//actorRoutes.post('/results', netflixHelper.getMovieByActor, actorControllers.results);


module.exports = actorRoutes;
