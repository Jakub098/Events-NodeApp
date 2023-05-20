const db = require('../db');

exports.getPlaces = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM miejsce_wydarzenia`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

exports.getPlaceById = (placeId) => {
    const query = `SELECT p.id_miejsce as id_miejsce, 
    p.nazwa_miejsca as nazwa_miejsca,
    p.miejscowosc as miejscowosc,
    p.kod_pocztowy as kod_pocztowy,
    p.pojemnosc_miejsca as pojemnosc_miejsca
    FROM miejsce_wydarzenia p
    where p.id_miejsce = ?`;

    return new Promise((resolve, reject) => {
        db.query(query, [placeId], (err, results) => {
            return resolve(results[0]);
        })
        
    })        
}

exports.createPlace = (placeData) => {
    const sql = 'INSERT INTO miejsce_wydarzenia (nazwa_miejsca, miejscowosc, kod_pocztowy, pojemnosc_miejsca) VALUES (?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
        db.execute(sql, [placeData.nazwa_miejsca, placeData.miejscowosc, placeData.kod_pocztowy, placeData.pojemnosc_miejsca], (err, results) => {
            return resolve('Ok');
        })
    })
}

exports.updatePlace = (placeId, placeData) => {
    const sql = 'UPDATE miejsce_wydarzenia SET nazwa_miejsca = ?, miejscowosc = ?, kod_pocztowy = ?, pojemnosc_miejsca = ? WHERE id_miejsce = ?';
    return new Promise((resolve, reject) => {
        db.execute(sql, [placeData.nazwa_miejsca, placeData.miejscowosc, placeData.kod_pocztowy, placeData.pojemnosc_miejsca, placeId], (err, results) => {
            return resolve('Ok');
        })
    })
}

exports.deletePlace = (placeId) => {
    const sql = 'DELETE FROM miejsce_wydarzenia WHERE id_miejsce = ?';
    return new Promise((resolve, reject) => {
        db.execute(sql, [placeId], (err, results) => {
            return resolve('Ok');
        })
    })
}