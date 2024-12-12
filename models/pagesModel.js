const db = require('../config/db');

const Pages = {
  create: async (data) => {
    const sql = 'INSERT INTO pages (pagename, displayorder, url, icon,categoryId, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.pagename, data.displayorder, data.url, data.icon, data.categoryId]);
      
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
      // const [results] = await db.execute('SELECT * FROM pages ORDER BY created_at DESC');

      const [results] = await db.execute(`
        SELECT 
          pages.*, 
          pagescategory.name AS categoryName
        FROM pages
        LEFT JOIN pagescategory ON pages.categoryId = pagescategory.id
        ORDER BY pages.created_at DESC
      `);
      
      let dataJSON = {
        status: 'success',
        data: results
    }
      return dataJSON;
    } catch (err) {
      throw err;
    }
  },

  update: async (id, data) => {
    const sql = 'UPDATE pages SET pagename = ?, displayorder = ?,categoryId = ?, url = ?, icon = ?, updated_at = NOW() WHERE pageId = ?';
    try {
      const [results] = await db.execute(sql, [data.pagename, data.displayorder, data.categoryId, data.url, data.icon, id]);
      
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
      const [results] = await db.execute('DELETE FROM pages WHERE pageId = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Pages;