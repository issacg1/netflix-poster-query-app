require('isomorphic-fetch');
require('dotenv').config();

//add the function to the correct route
function getMovieByTitleAndYear(req, res, next){
  let title = req.body.title.split(' ').join('%20');
  console.log(title)
  fetch(`http://netflixroulette.net/api/api.php?title=${title}`)
    .then(fetchRez => fetchRez.json())
    .then(titleResults => {
      res.locals.titleResults = titleResults;
      next();
    }).catch(err =>{
      console.log(err);
      next();
    })
}

function getMovieByDirector(req, res, next){
  let director = req.body.director.split(' ').join('%20');
  fetch(`http://netflixroulette.net/api/api.php?director=${director}`)
    .then(fetchRez => fetchRez.json())
    .then(directorResults => {
      res.locals.directorResults = directorResults;
      next();
    }).catch(err =>{
      console.log(err);
      next();
    })
}

function getMovieByActor(req, res, next){
  console.log(req.body.actor)
  let actor = req.body.actor.split(' ').join('%20');
  fetch(`http://netflixroulette.net/api/api.php?actor=${actor}`)
    .then(fetchRez => fetchRez.json())
    .then(actorResults => {
      res.locals.actorResults = actorResults;
      next();
    }).catch(err =>{
      console.log(err);
      next();
    })
}


module.exports = {
  getMovieByTitleAndYear,
  getMovieByDirector,
  getMovieByActor
}
