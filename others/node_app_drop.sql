
-- foreign keys
ALTER TABLE wydarzenie
    DROP FOREIGN KEY wydarzenie_miejsce_wydarzenia;

ALTER TABLE wydarzenie
    DROP FOREIGN KEY wydarzenie_wydarzenie_typ;

ALTER TABLE wystep_wykonawca
    DROP FOREIGN KEY wystep_wykonawca_wydarzenie;

ALTER TABLE wystep_wykonawca
    DROP FOREIGN KEY wystep_wykonawca_wykonawca;

-- tables
DROP TABLE miejsce_wydarzenia;

DROP TABLE wydarzenie;

DROP TABLE wydarzenie_typ;

DROP TABLE wykonawca;

DROP TABLE wystep_wykonawca;

-- End of file.

