const db = require('../db/config');

const movies = {};

movies.findAll = () =>{
  return db.query(
    'SELECT * FROM movie RETURNING *'
  );
};

movies.findById = id =>{
  return db.one(
    `SELECT * FROM movies WHERE id = $1 RETURNING *`, [id]
  );
};

movies.new = movie =>{
  return db.one(`
    INSERT INTO movies
    (title, year, rating, category, actors, director, summary, runtime, show_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
    [movie.title, movie.year, movie.rating, movie.category, movie.actors, movie.director, movie.summary, movie.runtime, movie.show_id]
  );
}

movies.findByShowId = show_id =>{
  return db.query(`SELECT * FROM movies WHERE show_id = $1`, [show_id]);
}

movies.findUserMovies = user_id =>{
  return db.query(`
    SELECT * FROM movies
    JOIN relationship ON relationship.movie_id = movies.show_id
    JOIN users ON users.id = relationship.user_id
    WHERE users.id = $1`,
    [user_id])
}


module.exports = movies;

