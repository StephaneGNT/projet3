USE pimp_my_cake_admin;

INSERT INTO ingredients (name, type, size, price, dispo, description, image, is_compatible, flavor, color)
VALUES ('Base banane', 'Base', 'S', 10, true, 'some ingredient information', 'image_url', true, null, null),
('Base chocolat', 'Base', 'S', 15, true, 'some ingredient information', 'image_url', true, null, null),
('Base vanille', 'Base', 'S', 20, true, 'some ingredient information', 'image_url', true, null, null),
('Amandes caramélisées', 'Base brownie', 'S', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Cacahuètes', 'Base brownie', 'S', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Chocolat amandes', 'Base cookie', 'S', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Cacahuètes', 'Base cookie', 'S', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Cream cheese', 'Garniture', 'S', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Crème chocolat', 'Garniture', 'S', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Ganache caramel', 'Garniture', 'S', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Cream cheese', 'Glaçage', 'S', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Ganache chocolat', 'Glaçage', 'S', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Ganache caramel', 'Glaçage', 'S', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Sucre glace', 'Glaçage', 'S', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Noisettes caramélisées', 'Toppings', '250g', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Dentelles chocolat', 'Toppings', '250g', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Noix caramélisées', 'Toppings', '250g', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Crumble', 'Toppings', '250g', 4, true, 'some ingredient information', 'image_url', true, null, null),


INSERT INTO allergenes (name) 
VALUES ('Oeuf'), ('Lactose'), ('Arachide');

INSERT INTO fonts (name, availability)
VALUES ('Ewert', true), ('Frijole', true), ('Rochester', false);

INSERT INTO custom_wishes (type, photo, msg_content, msg_color, msg_bg_color, msg_font_id)
VALUES ('Message', '', 'Joyeux anniversaire', '#00ff00', '#111111',
  (SELECT id FROM fonts WHERE fonts.id = 1)
);

INSERT INTO customers (firstName, lastName, email, tel_number, birthday)
VALUES ( 'Mathieu', 'De Armey', 'famousfour@hotmail.com', '0600000000', '1981-06-23'),
('Kapu', 'Nielsen', 'kapunielsen@voila.fr', '0612345678', '1987-03-12');

INSERT INTO final_cakes (type, size, quantity, story, occasion, comments, price, custom_wishes)
VALUES ('Cake','50', null, 'Anniversaire', 'some comment', 40, 
  (SELECT id FROM custom_wishes WHERE custom_wishes.id = 1)
);

INSERT INTO final_orders (cake_id, delivery_date, order_date, customer_id, customer_status, admin_status, customer_comment, customer_message)
VALUES ((SELECT id FROM final_cakes WHERE final_cakes.id = 1),
  '2018-12-06',
  '2018-12-12',
  (SELECT id FROM customers WHERE customers.id = 1),
  'En cours de préparation',
  'Payée',
  'some customer comment',
  'some customer message'
);

INSERT INTO admin (name, admin_password)
VALUES ('Giluna', 'aaaaaaa'),
('Giluna2','sudfhmlkfds');