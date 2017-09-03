const movies = require('../models/movies');
const comments = require('../models/comments');
const user = require('../models/user');
const relationship = require('../models/relationship')

const titleControllers = {};


titleControllers.index = (req, res) =>{
  res.render('search-title/search-title-index');
};

titleControllers.results = (req, res) =>{
  res.render('search-title/search-title-results', {
    results: res.locals.titleResults,
  })
}

titleControllers.new = (req, res, next) =>{
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


titleControllers.insert = (req, res) =>{
  console.log(req.user.id)
  console.log(req.body.show_id)
  relationship.insert(req.body.show_id, req.user.id)
}

module.exports = titleControllers;
