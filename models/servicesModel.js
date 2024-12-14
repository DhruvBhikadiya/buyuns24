const db = require('../config/db');

const Services = {
    create: async (data) => {
        const sql = 'INSERT INTO services (name, url, created_at, updated_at) VALUES (?, ?, NOW(), NOW())';
        try {
            const [results] = await db.execute(sql, [data.name, data.url]);

            let dataJSON = {
                status: 'success',
                data: results
            }

            return dataJSON;
        } catch (err) {
            throw err; // Propagate the error to be handled later
        }
    },

    getAll: async () => {
        try {
            const [results] = await db.execute(`SELECT * FROM services ORDER BY created_at DESC`);

            let dataJSON = {
                status: 'success',
                data: results
            };

            return dataJSON;
        } catch (err) {
            throw err;
        }
    },
    update: async (id, data) => {
        const sqlUpdate = 'UPDATE services SET name = ?, url = ?, updated_at = NOW() WHERE id = ?';
        try {
            const [results] = await db.execute(sqlUpdate, [data.name, data.url, id]);
    
            let dataJSON = {
                status: 'success',
                data: results
            }
    
            return dataJSON;
        } catch (err) {
            throw err;
        }
    },

    delete: async (id) => {
        try {
            const [results] = await db.execute('DELETE FROM services WHERE id = ?', [id]);
            return results;
        } catch (err) {
            throw err;
        }
    },  
};

module.exports = Services;