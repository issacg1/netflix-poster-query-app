const db = require('../db/config');

const comments = {};


comments.findSpecificMovieComments = (show_id) =>{
  return db.query(`
    SELECT *
    FROM comments
    WHERE show_id = $1`,
    [show_id])
};

//add create comment function


module.exports = comments;
