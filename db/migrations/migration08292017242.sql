\c netflix

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  comment TEXT,
  username VARCHAR(255),
  title VARCHAR(200)
);
