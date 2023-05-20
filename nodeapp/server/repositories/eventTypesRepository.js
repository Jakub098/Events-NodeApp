const db = require('../db');

exports.getEventTypes = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM wydarzenie_typ`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

exports.getEventTypeById = (eventTypeId) => {
    const query = `SELECT p.id_typ as id_typ, 
    p.nazwa_typu as nazwa_typu
    FROM wydarzenie_typ p
    where p.id_typ = ?`;

    return new Promise((resolve, reject) => {
        db.query(query, [eventTypeId], (err, results) => {
            return resolve(results[0]);
        })
        
    })        
}

exports.createEventType = (eventTypeData) => {
    const sql = 'INSERT INTO wydarzenie_typ (nazwa_typu) VALUES (?)';
    return new Promise((resolve, reject) => {
        db.execute(sql, [eventTypeData.nazwa_typu], (err, results) => {
            return resolve('Ok');
        })
    })
}

exports.updateEventType = (eventTypeId, eventTypeData) => {
    const sql = 'UPDATE wydarzenie_typ SET nazwa_typu = ? WHERE id_typ = ?';
    return new Promise((resolve, reject) => {
        db.execute(sql, [eventTypeData.nazwa_typu, eventTypeId], (err, results) => {
            return resolve('Ok');
        })
    })
}

exports.deleteEventType = (eventTypeId) => {
    const sql = 'DELETE FROM wydarzenie_typ WHERE id_typ = ?';
    return new Promise((resolve, reject) => {
        db.execute(sql, [eventTypeId], (err, results) => {
            return resolve('Ok');
        })
    })
}