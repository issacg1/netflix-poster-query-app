const db = require('../db/config');


const relationship = {};

relationship.insert = (show_id, user_id)=>{
  return db.none(`
    INSERT INTO relationship
    (movie_id, user_id)
    VALUES
    ($1, $2)`,
    [show_id, user_id])
}

module.exports = relationship;
