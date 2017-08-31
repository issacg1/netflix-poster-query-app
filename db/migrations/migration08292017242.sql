\c netflix

DROP TABLE comments;
CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  comment TEXT,
  username VARCHAR(255),
  title VARCHAR(200)
);
