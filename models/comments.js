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
//add create comment function


module.exports = comments;
