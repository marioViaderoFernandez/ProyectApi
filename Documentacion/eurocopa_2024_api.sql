-- Creación de tablas
CREATE TABLE grupos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  group_name VARCHAR(1) NOT NULL UNIQUE
);

CREATE TABLE selecciones (
  id INT PRIMARY KEY AUTO_INCREMENT,
  selection_name VARCHAR(50) NOT NULL UNIQUE,
  capital VARCHAR(50) NOT NULL,
  group_name INT,
  population BIGINT,
  coach VARCHAR(50),
  FOREIGN KEY (group_id) REFERENCES grupos(id)
);

CREATE TABLE estadios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  city VARCHAR(50) NOT NULL,
  capacity INT,
  selection_name INT,
  FOREIGN KEY (selection_name) REFERENCES selecciones(id)
);

CREATE TABLE partidos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  equipo_1 INT,
  equipo_2 INT,
  estadio INT,
  match_time TIME,
  FOREIGN KEY (equipo_1_id) REFERENCES selecciones(id),
  FOREIGN KEY (equipo_2_id) REFERENCES selecciones(id),
  FOREIGN KEY (estadio_id) REFERENCES estadios(id)
);

-- Inserción de datos

-- Grupos
INSERT INTO grupos (group_name) VALUES
('A'), ('B'), ('C'), ('D'), ('E'), ('F');

-- Selecciones
INSERT INTO selecciones (selection_name, capital, group_name, population, coach) VALUES
('Alemania', 'Berlín', 1, 83200000, 'Julian Nagelsmann'),
('Suiza', 'Berna', 1, 8700000, 'Murat Yakin'),
('Hungría', 'Budapest', 1, 9600000, 'Marco Rossi'),
('Escocia', 'Edimburgo', 1, 5400000, 'Steve Clarke'),
('España', 'Madrid', 2, 47420000, 'Luis de la Fuente'),
('Italia', 'Roma', 2, 59110000, 'Luciano Spalletti'),
('Croacia', 'Zagreb', 2, 3900000, 'Zlatko Dalić'),
('Albania', 'Tirana', 2, 2800000, 'Sylvinho'),
('Inglaterra', 'Londres', 3, 56000000, 'Gareth Southgate'),
('Dinamarca', 'Copenhague', 3, 5800000, 'Kasper Hjulmand'),
('Eslovenia', 'Liubliana', 3, 2100000, 'Matjaž Kek'),
('Serbia', 'Belgrado', 3, 6700000, 'Dragan Stojković'),
('Austria', 'Viena', 4, 9000000, 'Ralf Rangnick'),
('Francia', 'París', 4, 67000000, 'Didier Deschamps'),
('Países Bajos', 'Ámsterdam', 4, 17500000, 'Ronald Koeman'),
('Polonia', 'Varsovia', 4, 38000000, 'Michał Probierz'),
('Rumania', 'Bucarest', 5, 19000000, 'Edward Iordănescu'),
('Bélgica', 'Bruselas', 5, 11500000, 'Domenico Tedesco'),
('Eslovaquia', 'Bratislava', 5, 5400000, 'Francesco Calzona'),
('Ucrania', 'Kiev', 5, 41000000, 'Serhiy Rebrov'),
('Portugal', 'Lisboa', 6, 10300000, 'Roberto Martínez'),
('Turquía', 'Ankara', 6, 82000000, 'Vincenzo Montella'),
('Georgia', 'Tiflis', 6, 3700000, 'Willy Sagnol'),
('Chequia', 'Praga', 6, 10700000, 'Jaroslav Šilhavý');

-- Estadios
INSERT INTO estadios (name, city, capacity, selection_name) VALUES
('Allianz Arena', 'Munich', 75000, 1),
('Stade de Suisse', 'Berna', 31000, 2),
('Puskás Aréna', 'Budapest', 67000, 3),
('Hampden Park', 'Glasgow', 51866, 4),
('Santiago Bernabéu', 'Madrid', 81044, 5),
('Stadio Olimpico', 'Roma', 70634, 6),
('Stadion Poljud', 'Split', 35000, 7),
('Arena Kombëtare', 'Tirana', 22500, 8),
('Wembley Stadium', 'Londres', 90000, 9),
('Parken Stadium', 'Copenhague', 38000, 10),
('Stadion Stožice', 'Liubliana', 16000, 11),
('Stadion Rajko Mitić', 'Belgrado', 53000, 12),
('Ernst Happel Stadion', 'Viena', 50000, 13),
('Stade de France', 'Saint-Denis', 81338, 14),
('Johan Cruijff Arena', 'Ámsterdam', 54000, 15),
('Stadion Narodowy', 'Varsovia', 58500, 16),
('Arena Națională', 'Bucarest', 55000, 17),
('King Baudouin Stadium', 'Bruselas', 50000, 18),
('Tehelné pole', 'Bratislava', 22500, 19),
('Olympic Stadium', 'Kiev', 70050, 20),
('Estadio do Dragão', 'Oporto', 50033, 21),
('Türk Telekom Stadium', 'Estambul', 52650, 22),
('Batumi Stadium', 'Batumi', 20000, 23),
('Sinobo Stadium', 'Praga', 19370, 24);

-- Partidos
-- NOTA: Aquí asumiremos que los IDs de las selecciones y estadios coinciden con el orden de inserción
INSERT INTO partidos (equipo_1, equipo_2, estadio, match_time) VALUES
(1, 2, 1, '15:00'), (3, 4, 3, '18:00'), (5, 6, 5, '21:00'),
(7, 8, 7, '15:00'), (9, 10, 9, '18:00'), (11, 12, 11, '21:00'),
(13, 14, 13, '15:00'), (15, 16, 15, '18:00'), (17, 18, 17, '21:00'),
(19, 20, 19, '15:00'), (21, 22, 21, '18:00'), (23, 24, 23, '21:00'),
(1, 3, 1, '15:00'), (2, 4, 2, '18:00'), (5, 7, 5, '21:00'),
(6, 8, 6, '15:00'), (9, 11, 9, '18:00'), (12, 10, 12, '21:00'),
(13, 15, 13, '15:00'), (14, 16, 14, '18:00'), (17, 19, 17, '21:00'),
(18, 20, 18, '15:00'), (21, 23, 21, '18:00'), (22, 24, 22, '21:00'),
(1, 4, 1, '15:00'), (2, 3, 2, '18:00'), (5, 6, 5, '21:00'),
(7, 8, 7, '15:00'), (9, 12, 9, '18:00'), (10, 11, 10, '21:00'),
(14, 15, 14, '15:00'), (16, 13, 16, '18:00'), (17, 18, 17, '21:00');
