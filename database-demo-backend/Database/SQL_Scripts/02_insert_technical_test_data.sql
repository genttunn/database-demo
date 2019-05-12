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
      500, 'kpl', 2.5)
;

INSERT INTO Customer
  (firstName, lastName, email, phone, address, city, postcode,uid)
VALUES
  ('Sonja', 'Korhonen', 'sonja@mail.com', '0469525525', 'Hopeatie 10 B', 'Helsinki', '00440','fdsfsdfsd'),
  ('Myy',   'Järvinen', 'pikku@mail.com', '0469525535', 'Hopeatie 10 B', 'Helsinki', '00440','dsfiuhwi'),
  ( 'Kukka-Maaria', 'Pyykkönen', 'pekka@mail.com', '0469525545', 'Hopeatie 10 B', 'Helsinki', '00440','fsdhufvbsuh')
;

INSERT INTO Receipt
  (customerId, status)
VALUES
  (1, 1),
  (2, 0),
   (1, 1),
  (2, 0),
   (1, 1),
  (2, 0)
;


INSERT INTO Receipt_Product
  (receiptId, productId, quantity)
VALUES
  (2, 1, 1),
  (2, 2, 2),
  (2, 3, 3),
  (2, 4, 4),
  (2, 5, 5),
  (3, 2, 6),
  (3, 3, 7),
  (3, 4, 8),
  (3, 5, 9)
;
/* END */
