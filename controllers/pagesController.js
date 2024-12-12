const Pages = require('../models/pagesModel');

exports.createPage = async (req, res) => {
  try {
    const result = await Pages.create(req.body);
    res.status(201).json({ message: 'Page created', id: result.insertId });
  } catch (err) {
    console.error('Error creating Page:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllPages = async (req, res) => {
  try {
    const results = await Pages.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Pages:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updatePage = async (req, res) => {
  const id = req.params.id;
  try {
    await Pages.update(id, req.body);
    res.status(200).json({ message: 'Page updated' });
  } catch (err) {
    console.error('Error updating Page:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deletePage = async (req, res) => {
  const id = req.params.id;
  try {
    await Pages.delete(id);
    res.status(200).json({ message: 'Page deleted' });
  } catch (err) {
    console.error('Error deleting Page:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
