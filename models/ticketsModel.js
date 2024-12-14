const db = require('../config/db');

const Tickets = {
  create: async (data) => {
    const sql = 'INSERT INTO tickets (subject,content,status,answer,serviceId,customerId, created_at, updated_at) VALUES (?,?,?,?,?,?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.subject,data.content,data.status,data.answer,data.serviceId,data.customerId]);
      
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
      const [results] = await db.execute('SELECT * FROM tickets ORDER BY created_at DESC');
      
      let dataJSON = {
        status: 'success',
        data: results
    }
      return dataJSON;
    } catch (err) {
      throw err;
    }
  },
  
  getTicketsByCustomerId: async (CustomerId) => {
    try {
      const [results] = await db.execute(`SELECT * FROM tickets WHERE customerId = ? ORDER BY created_at DESC`, [CustomerId]);
  
      return {
        status: 'success',
        data: results
      };
    } catch (err) {
      throw err;
    }
  },

  update: async (id, data) => {
    const sql = 'UPDATE tickets SET subject = ?, content = ?, answer = ?, status = ?, serviceId = ?, customerId = ?, updated_at = NOW() WHERE id = ?';
    try {
      const [results] = await db.execute(sql, [data.subject,data.content,data.answer,data.status,data.serviceId,data.customerId, id]);
      
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
      const [results] = await db.execute('DELETE FROM tickets WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Tickets;
