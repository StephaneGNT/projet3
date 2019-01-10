CREATE DATABASE pimp_my_cake_admin;

USE pimp_my_cake_admin;

CREATE TABLE images 
( 
id INTEGER PRIMARY KEY AUTO_INCREMENT, 
name VARCHAR(90)
);

CREATE TABLE cake_bases 
( 
id INTEGER PRIMARY KEY AUTO_INCREMENT, 
name VARCHAR(90), 
size_diameter INTEGER,
nb_persons INTEGER,
price DECIMAL,
availability BOOLEAN,
info VARCHAR(150),
image_id INTEGER,
is_compatible BOOLEAN,
FOREIGN KEY(image_id) REFERENCES images(id)
);

CREATE TABLE cookie_bases
( 
id INTEGER PRIMARY KEY AUTO_INCREMENT, 
name VARCHAR(90),
size_diameter INTEGER,
price DECIMAL,
availability BOOLEAN,
info VARCHAR(150),
image_id INTEGER,
is_compatible BOOLEAN,
FOREIGN KEY(image_id) REFERENCES images(id)
);
CREATE TABLE brownie_bases LIKE cookie_bases;

CREATE TABLE toppings
( 
id INTEGER PRIMARY KEY AUTO_INCREMENT, 
name VARCHAR(90), 
portion VARCHAR(10),
price DECIMAL,
availability BOOLEAN,
info VARCHAR(150),
image_id INTEGER,
is_compatible BOOLEAN,
FOREIGN KEY(image_id) REFERENCES images(id)
);

CREATE TABLE fillings
( 
id INTEGER PRIMARY KEY AUTO_INCREMENT, 
name VARCHAR(30), 
size INTEGER,
price DECIMAL,
availability BOOLEAN,
info VARCHAR(150),
image_id INTEGER,
is_compatible BOOLEAN,
FOREIGN KEY(image_id) REFERENCES images(id)
);

CREATE TABLE icings LIKE fillings;
CREATE TABLE macaron_flavors LIKE fillings;
CREATE TABLE cheesecake_flavors LIKE fillings;

CREATE TABLE macaron_shells
( 
id INTEGER PRIMARY KEY AUTO_INCREMENT, 
name VARCHAR(20),
code VARCHAR(20),
is_compatible BOOLEAN
);

CREATE TABLE allergenes
( 
id INTEGER PRIMARY KEY AUTO_INCREMENT, 
name VARCHAR(90)
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
type VARCHAR(15),
size VARCHAR(5),
level INTEGER,
quantity INTEGER,
occasion VARCHAR(100),
price DECIMAL,
time INTEGER,
cake_base_id INTEGER,
cookie_base_id INTEGER,
icing_id INTEGER,
custom_wishes_id INTEGER,
macaron_flavor_id INTEGER,
macaron_color_id INTEGER,
cheesecake_flavor_id INTEGER,
FOREIGN KEY(cake_base_id) REFERENCES cake_bases(id),
FOREIGN KEY(cookie_base_id) REFERENCES cookie_bases(id),
FOREIGN KEY(icing_id) REFERENCES icings(id),
FOREIGN KEY(custom_wishes_id) REFERENCES custom_wishes(id),
FOREIGN KEY(macaron_flavor_id) REFERENCES macaron_flavors(id),
FOREIGN KEY(macaron_color_id) REFERENCES macaron_shells(id),
FOREIGN KEY(cheesecake_flavor_id) REFERENCES cheesecake_flavors(id)
);

CREATE TABLE final_orders
( 
id INTEGER PRIMARY KEY AUTO_INCREMENT,
customer_id INTEGER,
cake_id INTEGER,
order_date DATE,
delivery_date DATE,
customer_status VARCHAR(50),
admin_status VARCHAR(50),
customer_comment VARCHAR(300),
FOREIGN KEY(customer_id) REFERENCES customers(id),
FOREIGN KEY(cake_id) REFERENCES final_cakes(id)
);

CREATE TABLE admin
( 
id INTEGER PRIMARY KEY AUTO_INCREMENT,
admin_id VARCHAR(50),
admin_password VARCHAR(100)
);
