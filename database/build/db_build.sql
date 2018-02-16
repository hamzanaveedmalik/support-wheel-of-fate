BEGIN;

DROP TABLE IF EXISTS engineers CASCADE;
DROP TABLE IF EXISTS shifts CASCADE;

CREATE TABLE engineers (
  id                    SERIAL,
name                    VARCHAR     PRIMARY KEY     UNIQUE,
  shifts_worked         INTEGER
);

CREATE TABLE shifts (
  id                 SERIAL,
  shift_today        VARCHAR[],
  shift_yesterday    VARCHAR[]
);

INSERT INTO shifts
  (shift_today, shift_yesterday)
VALUES
('{"name1", "name2"}',
'{"name3", "name4"}');


INSERT INTO engineers
  (name, shifts_worked)
VALUES
  ('Gustavo', 0),
  ('Morales', 0),
  ('Hamza', 0),
  ('Naveed', 0),
  ('Tom', 0),
  ('Umar', 0),
  ('Robin', 0),
  ('Alex', 0),
  ('Amir', 0),
  ('Mohammad', 0);

COMMIT;
