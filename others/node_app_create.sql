-- tables
-- Table: miejsce_wydarzenia
CREATE TABLE miejsce_wydarzenia (
    id_miejsce int NOT NULL AUTO_INCREMENT,
    nazwa_miejsca varchar(64) NOT NULL,
    miejscowosc varchar(64) NOT NULL,
    kod_pocztowy varchar(6) NOT NULL,
    pojemnosc_miejsca bigint NOT NULL,
    CONSTRAINT miejsce_wydarzenia_pk PRIMARY KEY (id_miejsce)
);

-- Table: wydarzenie_typ
CREATE TABLE wydarzenie_typ (
    id_typ int NOT NULL AUTO_INCREMENT,
    nazwa_typu varchar(32) NOT NULL,
    CONSTRAINT wydarzenie_typ_pk PRIMARY KEY (id_typ)
);

-- Table: wydarzenie
CREATE TABLE wydarzenie (
    id_wydarzenie int NOT NULL AUTO_INCREMENT,
    nazwa_wydarzenie varchar(64) NOT NULL,
    data_wydarzenia date NOT NULL,
    czy_wyprzedane boolean NOT NULL,
    id_typ int NOT NULL,
    id_miejsce int NOT NULL,
    CONSTRAINT wydarzenie_pk PRIMARY KEY (id_wydarzenie)
);


-- Table: wykonawca
CREATE TABLE wykonawca (
    id_wykonawca int NOT NULL AUTO_INCREMENT,
    nazwa_wykonawca varchar(64) NOT NULL,
    CONSTRAINT wykonawca_pk PRIMARY KEY (id_wykonawca)
);

-- Table: wystep_wykonawca
CREATE TABLE wystep_wykonawca (
    id_wystepu int NOT NULL AUTO_INCREMENT,
    id_wydarzenie int NOT NULL,
    id_wykonawca int NOT NULL,
    CONSTRAINT wystep_wykonawca_pk PRIMARY KEY (id_wystepu)
);

-- foreign keys
-- Reference: wydarzenie_miejsce_wydarzenia (table: wydarzenie)
ALTER TABLE wydarzenie ADD CONSTRAINT wydarzenie_miejsce_wydarzenia FOREIGN KEY wydarzenie_miejsce_wydarzenia (id_miejsce)
    REFERENCES miejsce_wydarzenia (id_miejsce);

-- Reference: wydarzenie_wydarzenie_typ (table: wydarzenie)
ALTER TABLE wydarzenie ADD CONSTRAINT wydarzenie_wydarzenie_typ FOREIGN KEY wydarzenie_wydarzenie_typ (id_typ)
    REFERENCES wydarzenie_typ (id_typ);

-- Reference: wystep_wykonawca_wydarzenie (table: wystep_wykonawca)
ALTER TABLE wystep_wykonawca ADD CONSTRAINT wystep_wykonawca_wydarzenie FOREIGN KEY wystep_wykonawca_wydarzenie (id_wydarzenie)
    REFERENCES wydarzenie (id_wydarzenie);

-- Reference: wystep_wykonawca_wykonawca (table: wystep_wykonawca)
ALTER TABLE wystep_wykonawca ADD CONSTRAINT wystep_wykonawca_wykonawca FOREIGN KEY wystep_wykonawca_wykonawca (id_wykonawca)
    REFERENCES wykonawca (id_wykonawca);

-- End of file.

