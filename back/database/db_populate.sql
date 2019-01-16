USE pimp_my_cake_admin;

INSERT INTO ingredients (name, type, size, price, dispo, description, image, isCompatible, flavor, color)
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
('Crumble', 'Toppings', '250g', 4, true, 'some ingredient information', 'image_url', true, null, null);


INSERT INTO allergenes (name) 
VALUES ('Oeuf'), ('Lactose'), ('Arachide');

INSERT INTO fonts (name, availability)
VALUES ('Ewert', true), ('Frijole', true), ('Rochester', false);

INSERT INTO custom_wishes (type, photo, msgContent, msgColor, msgBgColor, msgFontId)
VALUES ('Message', '', 'Joyeux anniversaire', '#00ff00', '#111111',
  (SELECT id FROM fonts WHERE fonts.id = 1)
);

INSERT INTO customers (firstName, lastName, email, phone, birthday)
VALUES ( 'Mathieu', 'De Armey', 'famousfour@hotmail.com', '0600000000', '1981-06-23'),
('Kapu', 'Nielsen', 'kapunielsen@voila.fr', '0612345678', '1987-03-12');

INSERT INTO final_cakes (type, size, quantity, story, occasion, comments, price, customWishes)
VALUES ('Cake','50', null, 1, 'Anniversaire', 'some comment', 40, 
  (SELECT id FROM custom_wishes WHERE custom_wishes.id = 1)
);

INSERT INTO final_orders (cakeId, deliveryDate, orderDate, customerId, customerStatus, adminStatus, customerComment, customerMessage)
VALUES ((SELECT id FROM final_cakes WHERE final_cakes.id = 1),
  '2018-12-06',
  '2018-12-12',
  (SELECT id FROM customers WHERE customers.id = 1),
  'En cours de préparation',
  'Payée',
  'some customer comment',
  'some customer message'
);

INSERT INTO admin (name, adminPassword)
VALUES ('Giluna', 'aaaaaaa'),
('Giluna2','sudfhmlkfds');


INSERT INTO jt_allergenes (id_ingred, id_allergene)
VALUES (1, 1), (1, 2), (2, 3), (2, 2), (4, 1), (4, 3), (5, 1), (6, 2), (8, 1), (8, 3), (11, 2), (12, 2), (15, 1), (15, 2), (17, 1), (18, 3);

INSERT INTO jt_cake_ingredients (id_final_cake, id_ingred)
VALUES (1, 3), (1, 8), (1, 9), (1, 14), (1, 18);

INSERT INTO jt_compatibility (id_ingred1, id_ingred2)
VALUES (1, 8), (1, 9), (1, 10), (1, 11), (1, 12), (1, 12), (1, 13), (1, 14), (1, 15), (1, 16);

INSERT INTO jt_customers_orders (id_customer, id_order)
VALUES (1, 1);