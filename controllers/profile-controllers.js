const movies = require('../models/movies');
const comments = require('../models/comments');
const user = require('../models/user');
const relationship = require('../models/relationship');

const profileControllers = {};

profileControllers.index = (req, res) =>{
  res.render('profile/profile-view',{
    comments: res.locals.comments
  })
}

profileControllers.userComments = (req, res, next) =>{
  comments.findUserComments(req.user.id)
  .then(comments =>{
    res.locals.comments = comments;
      next();
    }).catch(err =>{
      console.log(err);
      next();
    })
}

//create controller to search for all
module.exports = profileControllers;
