const db = require('../db');

exports.getEvents = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM wydarzenie_typ`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

exports.getEventById = (evenId) => {
    const query = `SELECT p.id_typ as id_typ, 
    p.nazwa_typu as nazwa_typu
    FROM wydarzenie_typ p
    where p.id_typ = ?`;

    return new Promise((resolve, reject) => {
        db.query(query, [evenId], (err, results) => {
            return resolve(results[0]);
        })
        
    })        
}

exports.createEvent = (eventData) => {
    const sql = 'INSERT INTO wydarzenie_typ (nazwa_typu) VALUES (?)';
    return new Promise((resolve, reject) => {
        db.execute(sql, [eventData.nazwa_typu], (err, results) => {
            return resolve('Ok');
        })
    })
}

exports.updateEvent = (evenId, eventData) => {
    const sql = 'UPDATE wydarzenie_typ SET nazwa_typu = ? WHERE id_typ = ?';
    return new Promise((resolve, reject) => {
        db.execute(sql, [eventData.nazwa_typu, evenId], (err, results) => {
            return resolve('Ok');
        })
    })
}

exports.deleteEvent = (evenId) => {
    const sql = 'DELETE FROM wydarzenie_typ WHERE id_typ = ?';
    return new Promise((resolve, reject) => {
        db.execute(sql, [evenId], (err, results) => {
            return resolve('Ok');
        })
    })
}