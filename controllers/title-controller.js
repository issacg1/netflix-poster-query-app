const titleControllers = {};


titleControllers.index = (req, res) =>{
  res.render('search-title/search-title-index');
};

titleControllers.results = (req, res) =>{
  //create a db query for all comments related to this movie
  res.render('search-title/search-title-results', {
    results: res.locals.titleResults
  })
}

module.exports = titleControllers;
