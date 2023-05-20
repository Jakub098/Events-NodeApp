INSERT INTO miejsce_wydarzenia (nazwa_miejsca, miejscowosc, kod_pocztowy, pojemnosc_miejsca) VALUES ('Stadion narodowy', 'Warszawa', '00-123', 1200), ('Politechnika Warszawska', 'Warszawa', '00-123', 800), ('Teatr krakowski', 'Kraków', '12-000', 200), ('Teatr wielki', 'Wrocław', '75-500', 250);

INSERT INTO wydarzenie_typ (nazwa_typu) VALUES ('Koncert muzyczny'), ('Spektakl teatralny'), ('Mecz piłki nożnej');

INSERT INTO wykonawca(nazwa_wykonawca) VALUES ('RKS chuwdu'), ('Metallica'), ('Shakira'), ('Maryla Rodowicz'), ('Zespół teatralny 1'), ('Zespół teatralny 2');

INSERT INTO wydarzenie(nazwa_wydarzenie, data_wydarzenia, czy_wyprzedane, id_typ, id_miejsce) VALUES ('Koncert metallica world tour', '2023-05-26', false, 1, 1), ('Koncert Maryli Rodowicz', '2023-12-31', false, 1, 2), ('Shakira live', '2023-07-15', true, 1, 2), ('Romeo i Julia', '2023-02-22', false, 2, 3), ('Wesele', '2023-04-12', false, 2, 4), ('RKS VS RKS', '2023-04-01', false, 3, 1);

INSERT INTO wystep_wykonawca (id_wydarzenie, id_wykonawca) VALUES(1, 2), (2, 4), (3, 3), (4, 5), (5, 6), (6, 1);