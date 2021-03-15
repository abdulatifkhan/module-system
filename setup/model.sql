-- create database super_app;
CREATE DATABASE super_app;

-- create table contacts
CREATE TABLE contacts (
  id serial not null primary key,
  user_name character varying(32),
  phone_number int not null
);

-- insert into contacts
INSERT INTO contacts (user_name, phone_number) VALUES ('Muhammad', 998961000);
INSERT INTO contacts (user_name, phone_number) VALUES ('Umar', 998001001);
INSERT INTO contacts (user_name, phone_number) VALUES ('Akbar', 998002931);
INSERT INTO contacts (user_name, phone_number) VALUES ('O''ktam', 998012931);


-- create table users
CREATE TABLE users (
  user_id serial not null primary key,
  user_username varchar(40) not null,
  user_password varchar(60) not null,
  user_first_name varchar(20) not null,
  user_last_name varchar(20),
  user_middle_name varchar(20),
  user_age smallint DEFAULT 1
);

INSERT INTO users (user_username, user_password, user_first_name, user_last_name) VALUES (
  'umar',
  'umar1',
  'Umar',
  'Umarov'
);

INSERT INTO users (user_username, user_password, user_first_name, user_last_name) VALUES (
  'muhammad',
  'muhammad1',
  'Muhammad',
  'MuhammadovMuhammad

[COLUMN_NAME] [DATA_TYPE] [CONSTRAINTS]