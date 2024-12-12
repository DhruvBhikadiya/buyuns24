const Pagecategorys = require('../models/pagescategoryModel');

exports.createPagecategory = async (req, res) => {
  try {
    const result = await Pagecategorys.create(req.body);
    res.status(201).json({ message: 'Pagecategory created', id: result.insertId });
  } catch (err) {
    console.error('Error creating Pagecategory:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllPagecategorys = async (req, res) => {
  try {
    const results = await Pagecategorys.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Pagecategorys:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updatePagecategory = async (req, res) => {
  const id = req.params.id;
  try {
    await Pagecategorys.update(id, req.body);
    res.status(200).json({ message: 'Pagecategory updated' });
  } catch (err) {
    console.error('Error updating Pagecategory:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deletePagecategory = async (req, res) => {
  const id = req.params.id;
  try {
    await Pagecategorys.delete(id);
    res.status(200).json({ message: 'Pagecategory deleted' });
  } catch (err) {
    console.error('Error deleting Pagecategory:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
