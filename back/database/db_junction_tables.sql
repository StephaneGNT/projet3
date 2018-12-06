USE pimp_my_cake_admin;

CREATE TABLE junction_table_cake_bases_allergenes
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    cake_base_id INTEGER,
    allergene_id INTEGER,
    FOREIGN KEY(cake_base_id) REFERENCES cake_bases(id),
    FOREIGN KEY(allergene_id) REFERENCES allergenes(id)
);

CREATE TABLE junction_table_cake_bases_compatible_icings
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    cake_base_id INTEGER,
    icing_id INTEGER,
    FOREIGN KEY(cake_base_id) REFERENCES cake_bases(id),
    FOREIGN KEY(icing_id) REFERENCES icings(id)
);

CREATE TABLE junction_table_cake_bases_compatible_fillings
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    cake_base_id INTEGER,
    filling_id INTEGER,
    FOREIGN KEY(cake_base_id) REFERENCES cake_bases(id),
    FOREIGN KEY(filling_id) REFERENCES fillings(id)
);

CREATE TABLE junction_table_cake_bases_compatible_toppings
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    cake_base_id INTEGER,
    topping_id INTEGER,
    FOREIGN KEY(cake_base_id) REFERENCES cake_bases(id),
    FOREIGN KEY(topping_id) REFERENCES toppings(id)
);

CREATE TABLE junction_table_cookie_bases_allergenes
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    cookie_base_id INTEGER,
    allergene_id INTEGER,
    FOREIGN KEY(cookie_base_id) REFERENCES cookie_bases(id),
    FOREIGN KEY(allergene_id) REFERENCES allergenes(id)
);

CREATE TABLE junction_table_toppings_allergenes
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    topping_id INTEGER,
    allergene_id INTEGER,
    FOREIGN KEY(topping_id) REFERENCES toppings(id),
    FOREIGN KEY(allergene_id) REFERENCES allergenes(id)
);

CREATE TABLE junction_table_fillings_allergenes
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    filling_id INTEGER,
    allergene_id INTEGER,
    FOREIGN KEY(filling_id) REFERENCES fillings(id),
    FOREIGN KEY(allergene_id) REFERENCES allergenes(id)
);

CREATE TABLE junction_table_icings_allergenes
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    icing_id INTEGER,
    allergene_id INTEGER,
    FOREIGN KEY(icing_id) REFERENCES icings(id),
    FOREIGN KEY(allergene_id) REFERENCES allergenes(id)
);

CREATE TABLE junction_table_macaron_flavors_allergenes
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    macaron_flavor_id INTEGER,
    allergene_id INTEGER,
    FOREIGN KEY(macaron_flavor_id) REFERENCES macaron_flavors(id),
    FOREIGN KEY(allergene_id) REFERENCES allergenes(id)
);

CREATE TABLE junction_table_cheesecake_flavors_allergenes
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    cheesecake_flavor_id INTEGER,
    allergene_id INTEGER,
    FOREIGN KEY(cheesecake_flavor_id) REFERENCES cheesecake_flavors(id),
    FOREIGN KEY(allergene_id) REFERENCES allergenes(id)
);

CREATE TABLE junction_table_final_cake_fillings
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    final_cake_id INTEGER,
    filling_id INTEGER,
    FOREIGN KEY(final_cake_id) REFERENCES final_cakes(id),
    FOREIGN KEY(filling_id) REFERENCES fillings(id)
);

CREATE TABLE junction_table_final_cake_toppings
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    final_cake_id INTEGER,
    topping_id INTEGER,
    FOREIGN KEY(final_cake_id) REFERENCES final_cakes(id),
    FOREIGN KEY(topping_id) REFERENCES toppings(id)
);

CREATE TABLE junction_table_custom_wishes_fonts
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    custom_wish_id INTEGER,
    font_id INTEGER,
    FOREIGN KEY(custom_wish_id) REFERENCES custom_wishes(id),
    FOREIGN KEY(font_id) REFERENCES fonts(id)
);

CREATE TABLE junction_table_final_orders_customers
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    final_order_id INTEGER,
    customer_id INTEGER,
    FOREIGN KEY(final_order_id) REFERENCES final_orders(id),
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);

CREATE TABLE junction_table_final_orders_final_cakes
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    final_order_id INTEGER,
    final_cake_id INTEGER,
    FOREIGN KEY(final_order_id) REFERENCES final_orders(id),
    FOREIGN KEY(final_cake_id) REFERENCES final_cakes(id)
);
