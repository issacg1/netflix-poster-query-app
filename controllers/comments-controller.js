const movies = require('../models/movies');
const comments = require('../models/comments');
const user = require('../models/user');
const relationship = require('../models/relationship');

const commentsControllers = {};

commentsControllers.show = (req, res) =>{
  comments.findSpecificMovieComments(req.body.show_id)
  .then(comments => {
    console.log(comments)
      res.render('comments/comments-show', {
        comments: comments
    })
  })
}

commentsControllers.new = (req, res, next) =>{
  comments.create({
    comment: req.body.comment,
    user_id: req.user.id,
    show_id: req.body.show_id
  })
}

module.exports = commentsControllers;
