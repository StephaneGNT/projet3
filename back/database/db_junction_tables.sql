USE pimp_my_cake_admin;

CREATE TABLE jt_compatibility
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    id_ingred1 INTEGER,
    id_ingred2 INTEGER,
    FOREIGN KEY(id_ingred1) REFERENCES ingredients(id),
    FOREIGN KEY(id_ingred2) REFERENCES ingredients(id)
);

CREATE TABLE jt_allergenes
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    id_ingred INTEGER,
    id_allergene INTEGER,
    FOREIGN KEY(id_ingred) REFERENCES ingredients(id),
    FOREIGN KEY(id_allergene) REFERENCES allergenes(id)
);

CREATE TABLE jt_cake_ingredients
(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_final_cake INTEGER,
    id_ingred INTEGER,
    FOREIGN KEY(id_ingred) REFERENCES ingredients(id),
    FOREIGN KEY(id_final_cake) REFERENCES final_cakes(id)
);

CREATE TABLE jt_customers_orders
(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_customer INTEGER,
    id_order INTEGER,
    FOREIGN KEY(id_customer) REFERENCES customers(id),
    FOREIGN KEY(id_order) REFERENCES final_orders(id)
);
