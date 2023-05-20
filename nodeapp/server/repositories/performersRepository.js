const db = require('../db');

exports.getPerformers = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM wykonawca`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

exports.getPerformerById = (performerId) => {
    const query = `SELECT p.id_wykonawca as id_wykonawca, 
    p.nazwa_wykonawca as nazwa_wykonawca
    FROM wykonawca p
    where p.id_wykonawca = ?`;

    return new Promise((resolve, reject) => {
        db.query(query, [performerId], (err, results) => {
            return resolve(results[0]);
        })
        
    })        
}

exports.createPerformer = (performerData) => {
    const sql = 'INSERT INTO wykonawca (nazwa_wykonawca) VALUES (?)';
    return new Promise((resolve, reject) => {
        db.execute(sql, [performerData.nazwa_wykonawca], (err, results) => {
            return resolve('Ok');
        })
    })
}

exports.updatePerformer = (performerId, performerData) => {
    const sql = 'UPDATE wykonawca SET nazwa_wykonawca = ? WHERE id_wykonawca = ?';
    return new Promise((resolve, reject) => {
        db.execute(sql, [performerData.nazwa_wykonawca, performerId], (err, results) => {
            return resolve('Ok');
        })
    })
}

exports.deletePerformer = (performerId) => {
    const sql = 'DELETE FROM wykonawca WHERE id_wykonawca = ?';
    return new Promise((resolve, reject) => {
        db.execute(sql, [performerId], (err, results) => {
            return resolve('Ok');
        })
    })
}