USE pimp_my_cake_admin;

INSERT INTO ingredients (name, type, size, price, dispo, description, image, isCompatible, flavor, color)
VALUES ('Base banane', 'Base', 'S', 10, true, 'De la banane fraîche pour accompagner une base moëlleuse', 'https://image.noelshack.com/fichiers/2019/04/5/1548410929-base-banane2.png
', true, null, null),
('Base chocolat', 'Base', 'S', 15, true, "Parce que le chocolat, c'est la vie !", 'https://image.noelshack.com/fichiers/2019/04/5/1548410929-base-chocolat2.png', true, null, null),
('Base vanille', 'Base', 'S', 20, true, 'Avec de la vanille de Madagascar', 'https://image.noelshack.com/fichiers/2019/04/5/1548410929-base-vanille2.png', true, null, null),
('Amandes caramélisées', 'Base brownie', 'S', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Cacahuètes', 'Base brownie', 'S', 4, true, 'ok', 'image_url', true, null, null),
('Chocolat amandes', 'Base cookie', 'S', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Chocolat amandes', 'Base cookie', 'M', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Chocolat amandes', 'Base cookie', 'L', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Cacahuètes', 'Base cookie', 'S', 4, true, 'some ingredient information', 'image_url', true, null, null),
('Cream cheese', 'Garniture', 'S', 4, true, 'Une garniture cream cheese !!', 'https://image.noelshack.com/fichiers/2019/04/5/1548411090-filling-creamcheese.png', true, null, null),
('Crème chocolat', 'Garniture', 'S', 4, true, "Parce que le chocolat, c'est la vie !", 'https://image.noelshack.com/fichiers/2019/04/5/1548411052-filling-chocolat.png', true, null, null),
('Ganache caramel', 'Garniture', 'S', 4, true, 'Du caramel fait maison', 'https://image.noelshack.com/fichiers/2019/04/5/1548411013-filling-caramel.png', true, null, null),
('Cream cheese', 'Glaçage', 'S', 4, true, 'Encore un peu de cream cheese ?', 'https://image.noelshack.com/fichiers/2019/04/5/1548411134-glacage-creamcheese.png', true, null, null),
('Ganache chocolat', 'Glaçage', 'S', 4, true, "Parce qu'il n'y a jamais trop de chocolat", 'https://image.noelshack.com/fichiers/2019/04/5/1548411134-glacage-chocolat.png', true, null, null),
('Ganache caramel', 'Glaçage', 'S', 4, true, "Encooooooooore du caramel !!", 'https://image.noelshack.com/fichiers/2019/04/5/1548411134-glacage-caramel.png', true, null, null),
('Sucre glace', 'Glaçage', 'S', 4, true, 'Un petit nappage en sucre glace ??', 'https://image.noelshack.com/fichiers/2019/04/5/1548411134-glacage-cream.png', true, null, null),
('Noisettes caramélisées', 'Toppings', '250g', 4, true, "Parce que les noisettes, c'est pas que pour les écureuils...", 'https://image.noelshack.com/fichiers/2019/04/5/1548411226-topping-noisettes.png', true, null, null),
('Dentelles chocolat', 'Toppings', '250g', 4, true, 'Chocolaaaaat....', 'https://image.noelshack.com/fichiers/2019/04/5/1548411226-topping-billechocolat.png', true, null, null),
('Noix caramélisées', 'Toppings', '250g', 4, true, 'De délicieuses noix caramélisées maison', 'https://image.noelshack.com/fichiers/2019/04/5/1548411226-topping-noix.png', true, null, null),
('Crumble', 'Toppings', '250g', 4, true, 'Un peu de crumble sur votre gâteau ?', 'https://image.noelshack.com/fichiers/2019/04/5/1548411226-topping-crumble.png', true, null, null);


INSERT INTO allergenes (name) 
VALUES ('Oeuf'), ('Lactose'), ('Arachide');

INSERT INTO fonts (name, availability)
VALUES ('Frijole', true), ('Rochester', true), ('Bungee Hairline', true), ('Creepster', true), ('Fontdiner Swanky', true), ('Knewave', true), ('Jim Nightshade', true), ('Mystery Quest', true), ('Permanent Marker', true), ('Rock Salt', true), ('Stalinist One', true), ('UnifrakturMaguntia', true), ('Quando', true), ('Meddon', true), ('Gloria Hallelujah', true), ('Fredoka One', true), ('Fredericka the Great', true), ('Leckerli One', true);

INSERT INTO custom_wishes (deco1, deco2, photo1, photo2, msgContent, msgColor, msgBgColor, msgFont, description3D)
VALUES ('Message', '', '', '', 'Bon anniversaire !', '#00ff00', '#111111', 'Times New Roman', '');

INSERT INTO customers (firstName, lastName, email, phone, birthday)
VALUES ( 'Mathieu', 'De Armey', 'famousfour@hotmail.com', '0600000000', '1981-06-23'),
('Kapu', 'Nielsen', 'kapunielsen@voila.fr', '0612345678', '1987-03-12');

INSERT INTO final_cakes (type, size, quantity, story, occasion, price, customWishes)
VALUES ('Cake','50', null, 1, 'Anniversaire', 40, 
  (SELECT id FROM custom_wishes WHERE custom_wishes.id = 1)
);

INSERT INTO final_orders (cakeId, deliveryDate, orderDate, customerId, customerStatus, adminStatus, customerComment, customerMessage)
VALUES (
  (SELECT id FROM final_cakes WHERE final_cakes.id = 1),
  '2018-12-06',
  '2018-12-12',
  (SELECT id FROM customers WHERE customers.id = 1),
  'En cours de préparation',
  'Payée',
  'some customer comment',
  'some customer message'
);

INSERT INTO custom_prices (decoration, price) 
VALUES ('price_customMessage', 4), ('price_2D', 6);

INSERT INTO admin (name, adminPassword)
VALUES ('Giluna', '$2b$10$zuvDfB67g.0QUzQJE20Vaea/TCbXYvjSGsLuxesG2UDILdp92dcse');


INSERT INTO jt_allergenes (id_ingred, id_allergene)
VALUES (1, 1), (1, 2), (2, 3), (2, 2), (4, 1), (4, 3), (5, 1), (6, 2), (8, 1), (8, 3), (11, 2), (12, 2), (15, 1), (15, 2), (17, 1), (18, 3);

INSERT INTO jt_cake_ingredients (id_final_cake, id_ingred)
VALUES (1, 3), (1, 8), (1, 9), (1, 14), (1, 18);

INSERT INTO jt_compatibility (id_ingred1, id_ingred2)
VALUES (1, 8), (1, 9), (1, 10), (1, 11), (1, 12), (1, 12), (1, 13), (1, 14), (1, 15), (1, 16);

INSERT INTO jt_customers_orders (id_customer, id_order)
VALUES (1, 1);

INSERT INTO descriptions (homePage, contact)

VALUES ('Nous vous proposons des gâteaux, cheesecake et autres pâtisseries entièrement à votre goût et personnalisées à votre demande. Nous sommes à votre écoute pourtoute demande supplémentaire !', 'Avec notre savoir-faire toutes les fantaisies sont possibles : vous pouvez personnaliser à votre guise le moindre détail jusqu’à la boîte du gâteau. Laissez-vous donc guider et découvrez la variété des parfums possibles, nous avons sélectionnés des mariages parmi une large variété des saveurs. Avez-vous rêvé de créer un gâteau complètement unique qui correspond à vos goûts et à vos besoins? Avec cette application c’est désormais possible! Pimp my cake vous permet de confectionner le gâteau de vos rêves.');
