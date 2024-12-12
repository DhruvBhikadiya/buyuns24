const db = require('../config/db');

const pagescategory = {
  create: async (data) => {
    const sql = 'INSERT INTO pagescategory (name, displayOrder, created_at, updated_at) VALUES (?,?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.name , data.displayOrder]);
      
      let dataJSON = {
        status: 'success',
        data: results
    }
      return dataJSON;
    } catch (err) {
      throw err;
    }
  },

  getAll: async () => {
    try {
      const [results] = await db.execute(`SELECT * FROM pagescategory ORDER BY created_at DESC`);
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
    const sql = 'UPDATE pagescategory SET name = ?, displayOrder = ?, updated_at = NOW() WHERE id = ?';
    try {
      const [results] = await db.execute(sql, [data.name, data.displayOrder, id]);
      
      let dataJson = {
        status: 'success',
        data: results
    }
      return dataJson;
    } catch (err) {
      throw err;
    }
  },

  delete: async (id) => {
    try {
      const [results] = await db.execute('DELETE FROM pagescategory WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = pagescategory;
