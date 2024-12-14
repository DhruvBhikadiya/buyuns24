const db = require('../config/db');

const Customers = {
    create: async (data) => {
        const sql = 'INSERT INTO customers (name, password, mobile, email, balance, isActive, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())';
        try {
            console.log('data -->',data);
            
            const [results] = await db.execute(sql, [data.name, data.password, data.mobile, data.email, data.balance, data.isActive]);

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
            const [results] = await db.execute(`SELECT * FROM customers ORDER BY created_at DESC`);

            let dataJSON = {
                status: 'success',
                data: results
            };

            return dataJSON;
        } catch (err) {
            throw err;
        }
    },
    getCustomerStatus: async (id) => {
        const sql = 'SELECT * FROM customers WHERE id = ?';
        try {
            const [results] = await db.execute(`SELECT * FROM customers WHERE id = ?`, [id]);

            let dataJSON = {
                status: 'success',
                data: results[0]
            };

            return dataJSON;
        } catch (err) {
            throw err;
        }
    },

    update: async (id, data) => {
        const sqlUpdate = 'UPDATE customers SET name = ?, password = ?, balance = ?, isActive = ?, mobile = ?, email = ?, updated_at = NOW() WHERE id = ?';
        try {
            const [updateResults] = await db.execute(sqlUpdate, [data.name, data.password, data.balance, data.isActive, data.mobile, data.email, id]);
    
            const sqlSelect = 'SELECT * FROM customers WHERE id = ?';
            const [updatedCustomer] = await db.execute(sqlSelect, [id]);
    
            if (updatedCustomer.length === 0) {
                throw new Error('Customer not found');
            }
    
            let dataJSON = {
                status: 'success',
                data: updatedCustomer[0]
            }
    
            return dataJSON;
        } catch (err) {
            throw err;
        }
    },

    updateCustomerStatus: async (id, isActive) => {
        const sql = 'UPDATE customers SET isActive = ?, updated_at = NOW() WHERE id = ?';
        try {
            const [results] = await db.execute(sql, [isActive, id]);

            let dataJSON = {
                status: 'success',
                data: results
            };

            return dataJSON;
        } catch (err) {
            throw err;
        }
    },

    delete: async (id) => {
        try {
            const [results] = await db.execute('DELETE FROM customers WHERE id = ?', [id]);
            return results;
        } catch (err) {
            throw err;
        }
    },
    findByEmail: async (email) => {
        const sql = 'SELECT * FROM customers WHERE email = ?';
        try {
            
            const [results] = await db.execute(sql, [email]);
    
            if (results.length > 0) {
                return {
                    status: 'success',
                    data: results[0]
                };
            } else {
                return {
                    status: 'not_found',
                    data: null
                };
            }
        } catch (err) {
            throw err;
        }
    },
    verifyPassword: async function (inputPassword, storedPassword) {
        try {
            return inputPassword === storedPassword;
        } catch (err) {
            throw err;
        }
    },    
};

module.exports = Customers;