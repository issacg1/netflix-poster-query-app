\c netflix

CREATE TABLE movies(
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  year VARCHAR(4),
  rating VARCHAR(10),
  category VARCHAR(200),
  actors TEXT,
  director VARCHAR(100),
  summary TEXT,
  runtime VARCHAR (20)
);
