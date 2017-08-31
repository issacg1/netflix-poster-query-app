const db = require('../db/config');

const movies = {};
const comments = {};

movies.findAll = () =>{
  db.query(
    'SELECT * FROM movie RETURNING *'
  );
};

movies.findById = id =>{
  db.one(
    `SELECT * FROM movies WHERE id =$1 RETURNING *`, [id]
  );
};

movies.new = movie =>{
  db.one(`
    INSERT INTO movies
    (title, year, rating, category, actors, director, summary, runtime)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    [movie.title, movie.year, movie.rating, movie.category, movie.actors, movie.director, movie.summary, movie.runtime]
  );
}


module.exports = movies;
module.exports = comments;
