\c netflix;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  lat_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  username VARCHAR(20) NOT NULL,
  password_digest INT
);
