CREATE DATABASE product;

USE product

CREATE TABLE size (
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

CREATE TABLE color (
  id INT NOT NULL Auto_Increment,
  product_id INT NOT NULL,
  color varchar(255),
  picture LONGBLOB NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE product (
  product_id INT NOT NULL Auto_Increment,
  product_name varchar(255),
  product_brand varchar(255),
  product_price INT NOT NULL,
  PRIMARY KEY (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < database/schema.sql
 *  to create the database and the tables.*/

