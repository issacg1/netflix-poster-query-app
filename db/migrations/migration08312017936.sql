\c netflix;

DROP TABLE relationship;
CREATE TABLE relationship(
  movie_id INTEGER REFERENCES movies(id),
  user_id INTEGER REFERENCES users(id)
)
