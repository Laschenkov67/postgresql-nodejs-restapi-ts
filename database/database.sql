CREATE DATABASE userapi;

\l

\c firstapi;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email)
    VALUES ('artem', 'artem@ibm.com'),
    ('arina', 'arina@ibm.com');

select * from users;