CREATE DATABASE pimp_my_cake_admin;

USE pimp_my_cake_admin;


CREATE TABLE ingredients
(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(90),
    type VARCHAR(20),
    size VARCHAR(20),
    price INTEGER,
    dispo BOOLEAN,
    description VARCHAR(250),
    image VARCHAR(100),
    isCompatible BOOLEAN,
    flavor VARCHAR(50),
    color VARCHAR(20)
);

CREATE TABLE allergenes
( 
id INTEGER PRIMARY KEY AUTO_INCREMENT, 
name VARCHAR(90)
);

CREATE TABLE admin
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    adminPassword VARCHAR(100)
);

CREATE TABLE calendar ( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    date VARCHAR(50),
    color VARCHAR(10)
);

CREATE TABLE fonts
( 
id INTEGER PRIMARY KEY AUTO_INCREMENT, 
name VARCHAR(50),
availability BOOLEAN
);

CREATE TABLE custom_wishes
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    deco1 VARCHAR(10),
    deco2 VARCHAR(10),
    photo1 VARCHAR(100),
    photo2 VARCHAR(100),
    msgContent	VARCHAR(100),
    msgColor VARCHAR(20),
    msgBgColor VARCHAR(20),
    msgFont VARCHAR(50)
);

CREATE TABLE customers
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    firstName VARCHAR(20),
    lastName VARCHAR(20),
    email VARCHAR(50) UNIQUE,
    phone VARCHAR(15),
    birthday VARCHAR(15)
);

CREATE TABLE final_cakes
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(20),
    size VARCHAR(20),
    quantity INTEGER,
    story INTEGER,
    occasion VARCHAR(90),
    price INTEGER,
    customWishes INTEGER,
    FOREIGN KEY(customWishes) REFERENCES custom_wishes(id) 

);

CREATE TABLE final_orders
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    cakeId INTEGER,
    deliveryDate VARCHAR(50),
    orderDate VARCHAR(50),
    customerId INTEGER,
    customerStatus VARCHAR(50),
    adminStatus VARCHAR(50),
    customerComment VARCHAR(300),
    customerMessage VARCHAR(300),
    FOREIGN KEY(customerId) REFERENCES customers(id),
    FOREIGN KEY(cakeId) REFERENCES final_cakes(id)
);

CREATE TABLE descriptions
(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    homePage VARCHAR(1000),
    contact VARCHAR(1000)
);