DROP DATABASE IF EXISTS product;

CREATE DATABASE IF NOT EXISTS product;

USE product

CREATE TABLE products (
  product_id INT NOT NULL Auto_Increment,
  product_name varchar(255),
  product_brand varchar(255),
  product_price INT NOT NULL,
  product_rating INT NOT NULL,
  product_ratings INT NOT NULL,
  PRIMARY KEY (product_id)
);

CREATE TABLE colors (
  id INT NOT NULL Auto_Increment,
  product_id INT NOT NULL,
  color varchar(255),
  picture varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE sizes (
  id INT NOT NULL Auto_Increment,
  product_id INT NOT NULL,
  number INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE availability (
  product_id INT NOT NULL,
  color_id INT NOT NULL,
  size_id INT NOT NULL
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < database/schema.sql
 *  to create the database and the tables.*/

