/* INSERT TEST DATA */
-- ------------------------- 80-character-line marker  ------------------------
INSERT INTO ProductLine (name)
VALUES
  ('Fresh food'),
  ('Dried food'),
  ('Gardening'),
  ('Kitchen'),
  ('Beauty')
;

INSERT INTO Product
  (productLineId, name, description, quantity, unit, price)
VALUES
  (1, 'Tofu noodle salad (gluten-free, dairy-free)', 
      'Gluten-free, dairy-free and low-carb tofu noodle salads',
      50, 'portions', 6.9),
  (2, 'Dried gluten-free soy-based noodle', 
      'Cold-dried soy-based noodle',
      500, 'pkt', 10.0),
  (3, 'Soy-based fertilizer', 
      'Organic fertilizer made from soy bean and organic waste',
      500, 'kgs', 4.5),
  (4, 'Grass straws', 
      'Straw that are made from grass, environmental friendly',
      5000, 'pkt', 3.5),
  (5, 'Soy-based scrub', 
      'Organic natural scrub for a health skin',
      500, 'kpl', 2.5),
  (1, 'Fresh fried daily tofu', 
      'Freshly made every morning',
      30, 'portions',2.6),
  (1, 'Tofu coffee', 
      'Freshly made every morning',
      60, 'portions',2.2),
  (1, 'Soy bean tea', 
      'Freshly made every morning',
      60, 'portions',2.2),
  (1, 'Tofu omelette', 
      'Freshly made every morning',
      30, 'portions',3.2),
  (2, 'Dried soya beans', 
      'For home-made soy milk',
      300, 'pkt', 4.3),
  (2, 'Pre-made tofu omelette', 
      'Reheat and enjoy',
      200, 'pkt', 2.3),
  (3, 'Mung bean grow kit', 
      'Compact growing kit for home-made organic mung bean, everything included',
      80, 'pkt', 6.8)
;

INSERT INTO Customer
  (firstName, lastName, email, phone, address, city, postcode,uid)
VALUES
  ('Sonja', 'Korhonen', 'sonja@mail.com', '0469525525', 'Hopeatie 10 B', 'Helsinki', '00440','fdsfsdfsd'),
  ('Myy',   'Järvinen', 'pikku@mail.com', '0469525535', 'Hopeatie 10 B', 'Helsinki', '00440','dsfiuhwi'),
  ( 'Kukka-Maaria', 'Pyykkönen', 'pekka@mail.com', '0469525545', 'Hopeatie 10 B', 'Helsinki', '00440','fsdhufvbsuh'),
    ('Martti', 'Korhonen', 'martt@mail.com', '0469524825', 'Hopeatie 10 E', 'Helsinki', '00440','test1'),
  ('Thomas',   'Järvinen', 'tommen@mail.com', '0469532935', 'Hopeatie 10 C', 'Helsinki', '00440','test2'),
  ( 'Marie', 'Korhonen', 'mary@mail.com', '0463482145', 'Hopeatie 10 F', 'Helsinki', '00440','test3')
;