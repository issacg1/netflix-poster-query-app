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
        comments: comments,
    })
  }).catch(err => {
        console.log(err);
        res.status(500).json({
          message: 'Page Not Found',
          error: err
        });
    });
}

commentsControllers.new = (req, res, next) =>{
  comments.create({
    comment: req.body.comment,
    user_id: req.user.id,
    show_id: req.body.show_id
  }).then(()=>{
    res.end()
  }).catch(err => {
        console.log(err);
        res.status(500).json({
          message: 'Page Not Found',
          error: err
        });
    });
}

commentsControllers.edit = (req, res) => {
  comments.findById(req.body.id)
  .then(comments => {
    res.render("comments/comments-edit", {
      comment: comments
    })
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      message: 'Page Not Found',
      error: err
    });
  });
};

commentsControllers.update = (req, res)=>{
    comments.update(req.body.comment_id, {
    comment: req.body.comment
  })
  .then(comment =>{
    res.redirect(`/profile`);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      message: 'Page Not Found',
      error: err
    });
  });
}

commentsControllers.delete = (req, res) =>{
  comments.destroy(req.body.comment_id)
  .then(comment =>{
    res.redirect(`/profile`);
  }).catch(err =>{
    console.log(err);
    res.status(500).json({
      message: 'Page Not Found',
      error: err
    });
  });
}

module.exports = commentsControllers;
