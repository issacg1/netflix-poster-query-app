const movies = require('../models/movies');
const comments = require('../models/comments');
const user = require('../models/user');
const relationship = require('../models/relationship');

const actorControllers = {};

actorControllers.index = (req,res) =>{
  res.render('search-actor/search-actor-index');
};

actorControllers.results = (req, res) =>{
  res.render('search-actor/search-actor-results', {
    results: res.locals.actorResults
  })
}

actorControllers.new = (req, res, next) =>{
  movies.findByShowId(req.body.show_id)
  .then((results)=>{
    console.log(results)
    if(Object.keys(results).length === 0){
      movies.new({
        title: req.body.title,
        year: req.body.year,
        rating: req.body.rating,
        category: req.body.category,
        actors: req.body.category,
        director: req.body.director,
        summary: req.body.summary,
        runtime: req.body.runtime,
        show_id: req.body.show_id
      }).then(() => {
        next();
      }).catch(err =>{
        console.log(err);
        res.status(500).json({
          message: 'Page Not Found',
          error: err
        })
      })
    } else {
      next();
    }
  })
  .catch(err => {
        console.log(err);
        res.status(500).json({
          message: 'Page Not Found',
          error: err
        });
    });
}

actorControllers.insert = (req, res) =>{
  relationship.insert(req.body.show_id, req.user.id)
  .then(()=>{
      res.end()
    }).catch(err => {
        console.log(err);
        res.status(500).json({
          message: 'Page Not Found',
          error: err
        });
    });
}

actorControllers.view = (req, res) => {
   res.render('search-actor/search-actor-single', {
    results: res.locals.titleResults
  })
}

module.exports = actorControllers;
