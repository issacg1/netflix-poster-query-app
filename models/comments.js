const db = require('../db/config');

const comments = {};


comments.findSpecificMovieComments = (show_id) =>{
  return db.query(`
    SELECT *
    FROM comments
    WHERE show_id = $1`,
    [show_id])
};

comments.create = (comment) =>{
  return db.none(`
    INSERT INTO comments
    (comment, user_id, show_id)
    VALUES ($1, $2, $3)`,
    [comment.comment, comment.user_id, comment.show_id])
}

//comments.edit

comments.findUserComments = (user_id) =>{
  return db.query(`
    SELECT * FROM comments
    JOIN users ON users.id = comments.user_id
    WHERE users.id = $1`,
    [user_id])
}

module.exports = comments;
