\c netflix;

DROP TABLE relationship;
CREATE TABLE relationship(
  movie_id INTEGER,
  user_id INTEGER,
  timestamp timestamp default current_timestamp
)
