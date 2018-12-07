USE pimp_my_cake_admin;

INSERT INTO cake_bases (
  id, 
  name, 
  size_diameter,
  nb_persons,
  price,
  availability,
  info,
  image_id
) VALUES (
  null,
  'Base banane',
  25,
  30,
  65,
  true,
  'Une délicieuse base banane',
  (SELECT id FROM images as i WHERE i.id = 1)
),(
  null,
  'Base chocolat',
  25,
  30,
  65,
  true,
  'Une délicieuse base chocolat',
  (SELECT id FROM images as i WHERE i.id = 2)
);

INSERT INTO cookie_bases (id, name, size_diameter, price, availability, info, image_id) VALUES (null, 'Base classique', 6, 2, true, 'Une délicieuse base cookie', (SELECT id FROM images as i WHERE i.id = 3)),(null, 'Base tout chocolat', 6, 3, true, 'Une délicieuse base chocolatée', (SELECT id FROM images as i WHERE i.id = 4));

INSERT INTO toppings (id, name, portion, price, availability, info, image_id) VALUES (null, 'Noisette', '250g', 2, true, 'Noisettes', (SELECT id FROM images as i WHERE i.id = 5)),(null, 'Amandes', '120g', 3, true, 'Amandes', (SELECT id FROM images as i WHERE i.id = 6));

INSERT INTO fillings (id, name, size, price, availability, info, image_id) VALUES (null, 'Cream cheese', 18, 3.5, true, 'Cream cheese filling', (SELECT id FROM images as i WHERE i.id = 7)),(null, 'Fraise', 18, 8.4, true, 'Filling fraise', (SELECT id FROM images as i WHERE i.id = 8));

INSERT INTO icings (id, name, size, price, availability, info, image_id) VALUES (null, 'Sucre glace', 18, 3.5, true, 'Icing sucre glace', (SELECT id FROM images as i WHERE i.id = 9)),(null, 'Fruits de la passion', 18, 8.4, true, 'Icing fruit de la passion', (SELECT id FROM images as i WHERE i.id = 10));

INSERT INTO macaron_flavors (id, name, size, price, availability, info, image_id) VALUES (null, 'Chocolat', 18, 3.5, true, 'Parfum chocolat', (SELECT id FROM images as i WHERE i.id = 11)),(null, 'Fraise', 18, 8.4, true, 'Parfum fraise', (SELECT id FROM images as i WHERE i.id = 12));

INSERT INTO cheesecake_flavors (id, name, size, price, availability, info, image_id) VALUES (null, 'Chocolat', 18, 3.5, true, 'Parfum chocolat', (SELECT id FROM images as i WHERE i.id = 13)),(null, 'Fraise', 18, 8.4, true, 'Parfum fraise', (SELECT id FROM images as i WHERE i.id = 14));

-- INSERT INTO images (id, name) VALUES (1, 'Base banane'),(2, 'Base chocolat'),(3, 'Base cookie'),(4, 'Base tout chocolat'),(5, 'Noisettes'),(6, 'Amandes'),(7,'Filling cream cheese'),(8,'Filling fraise'),(9,'Icing sucre glace'), (10, 'Icing fruits de la passion'),(11,'Macaron parfum chocolat'),(12, 'Macaron parfum fraise'), (13,'Cheesecake parfum chocolat'),(14, 'Cheesecake parfum fraise');

INSERT INTO macaron_shells (id, name, code) VALUES (null, 'Rouge', '#ff0000'),(null, 'Vert', '#00ff00'),(null, 'Bleu', '#0000ff');

INSERT INTO allergenes (id, name) VALUES (null, 'Oeuf'), (null, 'Lactose'), (null, 'Arachide');

INSERT INTO fonts (id, name, availability) VALUES (null, 'Times New Roman', true), (null, 'Arial', true), (null, 'Comic San', false);

INSERT INTO custom_wishes (id, type, photo, msg_content, msg_color, msg_bg_color, msg_font_id) VALUES (null, 'Message', '', 'Joyeux anniversaire', '#00ff00', '#111111', 1);

-- INSERT INTO customers (id, firstName, lastName, email, tel_number, birthday) VALUES (null, 'Mathieu', 'De Armey', 'famousfour@hotmail.com', '0600000000', '1981-06-23'),(null, 'Kapu','Nielsen','kapunielsen@voila.fr', '0612345678', '1987-03-12');

INSERT INTO final_cakes (
  id, 
  type, 
  size, 
  level, 
  quantity, 
  occasion, 
  price, 
  time, 
  cake_base_id, 
  cookie_base_id, 
  icing_id, 
  custom_wishes_id, 
  macaron_flavor_id, 
  macaron_color_id, 
  cheesecake_flavor_id
) VALUES (
  null,
  'Cake',
  20,
  2,
  1,
  'Anniversaire',
  41,
  2,
  (SELECT id FROM cake_bases as cb WHERE cb.id = 1),
  null,
  (SELECT id FROM icings as i WHERE i.id = 1),
  (SELECT id FROM custom_wishes as cw WHERE cw.id = 2),
  null, 
  null,
  null
);

INSERT INTO final_orders (
  id,
  customer_id,
  cake_id,
  order_date,
  delivery_date,
  customer_status,
  admin_status,
  customer_comment
) VALUES (
  null,
  (SELECT id FROM customers as c WHERE c.id = 1),
  (SELECT id FROM final_cakes as fc WHERE fc.id = 1),
  '2018-12-06',
  '2018-12-12',
  'En cours de préparation',
  'Payée',
  ''
);