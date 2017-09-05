DROP TABLE comments;
CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  comment TEXT,
  user_id INTEGER,
  show_id INTEGER
);
