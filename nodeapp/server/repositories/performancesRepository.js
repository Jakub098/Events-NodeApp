const db = require('../db');

exports.getPerformances = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM wystep_wykonawca`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

exports.getPerformanceById = (performanceId) => {
    const query = `SELECT p.id_wystepu as id_wystepu, 
    p.id_wydarzenie as id_wydarzenie,
    p.id_wykonawca as id_wykonawca
    FROM wykonawca p
    where p.id_wystepu = ?`;

    return new Promise((resolve, reject) => {
        db.query(query, [performanceId], (err, results) => {
            return resolve(results[0]);
        })
        
    })        
}

exports.createPerformance = (performerData) => {
    const sql = 'INSERT INTO wystep_wykonawca (id_wydarzenie, id_wykonawca) VALUES (?, ?)';
    return new Promise((resolve, reject) => {
        db.execute(sql, [performerData.id_wydarzenie, performerData.id_wykonawca], (err, results) => {
            return resolve('Ok');
        })
    })
}

exports.updatePerformance = (performanceId, performanceData) => {
    const sql = 'UPDATE wystep_wykonawca SET id_wydarzenie = ?, id_wykonawca = ? WHERE id_wystepu = ?';
    return new Promise((resolve, reject) => {
        db.execute(sql, [performanceData.id_wydarzenie, performanceData.id_wystepu, performanceId], (err, results) => {
            return resolve('Ok');
        })
    })
}

exports.deletePerformance = (performanceId) => {
    const sql = 'DELETE FROM wystep_wykonawca WHERE id_wystepu = ?';
    return new Promise((resolve, reject) => {
        db.execute(sql, [performanceId], (err, results) => {
            return resolve('Ok');
        })
    })
}