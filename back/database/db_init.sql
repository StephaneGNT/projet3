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
    is_compatible BOOLEAN,
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
    admin_password VARCHAR(100)
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
    type VARCHAR(10),
    photo VARCHAR(100),
    msg_content	VARCHAR(100),
    msg_color VARCHAR(20),
    msg_bg_color VARCHAR(20),
    msg_font_id INTEGER,
    FOREIGN KEY(msg_font_id) REFERENCES fonts(id)
);

CREATE TABLE customers
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    firstName VARCHAR(20),
    lastName VARCHAR(20),
    email VARCHAR(50) UNIQUE,
    tel_number VARCHAR(12),
    birthday DATE
);

CREATE TABLE final_cakes
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(20),
    size VARCHAR(20),
    quantity INTEGER,
    story INTEGER,
    occasion VARCHAR(90),
    comments VARCHAR(300),
    price INTEGER,
    custom_wishes INTEGER,
    FOREIGN KEY(custom_wishes) REFERENCES custom_wishes(id) 

);

CREATE TABLE final_orders
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    cake_id INTEGER,
    delivery_date DATE,
    order_date DATE,
    customer_id INTEGER,
    customer_status VARCHAR(50),
    admin_status VARCHAR(50),
    customer_comment VARCHAR(300),
    custmer_message VARCHAR(300),
    FOREIGN KEY(customer_id) REFERENCES customers(id),
    FOREIGN KEY(cake_id) REFERENCES final_cakes(id)
);



