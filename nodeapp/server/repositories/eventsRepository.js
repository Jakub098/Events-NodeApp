const db = require('../db');

exports.getEvents = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM wydarzenie`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

exports.getEventById = (evenId) => {
    const query = `SELECT w.id_wydarzenie as id_wydarzenie, 
    w.nazwa_wydarzenie as nazwa_wydarzenie,
    w.data_wydarzenia as data_wydarzenia,
    w.czy_wyprzedane as czy_wyprzedane,
    t.id_typ as id_typ,
    m.id_miejsce as id_miejsce,
    FROM wydarzenie w
    LEFT JOIN wydarzenie_typ t ON w.id_typ = t.id_typ
    LEFT JOIN miejsce_wydarzenia m ON w.id_miejsce = m.id_miejsce
    where w.id_wydarzenie = ?`;

    return new Promise((resolve, reject) => {
        db.query(query, [evenId], (err, results) => {
            return resolve(results[0]);
        })
        
    })        
}

exports.createEvent = (eventData) => {
    const sql = 'INSERT INTO wydarzenie (nazwa_wydarzenie, data_wydarzenia, czy_wyprzedane, id_typ, id_miejsce) VALUES (?, ?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
        db.execute(sql, [eventData.nazwa_wydarzenie, eventData.data_wydarzenia, eventData.czy_wyprzedane, eventData.id_typ, eventData.id_miejsce], (err, results) => {
            return resolve('Ok');
        })
    })
}

exports.updateEvent = (evenId, eventData) => {
    const sql = 'UPDATE wydarzenie SET nazwa_wydarzenie = ? WHERE id_wydarzenie = ?';
    return new Promise((resolve, reject) => {
        db.execute(sql, [eventData.nazwa_wydarzenie, evenId], (err, results) => {
            return resolve('Ok');
        })
    })
}

exports.deleteEvent = (evenId) => {
    const sql = 'DELETE FROM wydarzenie WHERE id_wydarzenie = ?';
    return new Promise((resolve, reject) => {
        db.execute(sql, [evenId], (err, results) => {
            return resolve('Ok');
        })
    })
}