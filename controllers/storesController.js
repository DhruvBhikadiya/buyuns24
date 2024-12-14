const Stores = require('../models/storesModel');
const Pagecategorys = require('../models/pagescategoryModel');

exports.createStore = async (req, res) => {
    try {
        console.log('req.body -->',req.body);
        
        const result = await Stores.create(req.body);
        res.status(201).json({ message: 'Store created', id: result.insertId });
    } catch (err) {
        console.error('Error creating Store:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllStores = async (req, res) => {
    try {
        const results = await Stores.getAll();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching Stores:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateStore = async (req, res) => {
    const id = req.params.id;
    try {
        await Stores.update(id, req.body);
        res.status(200).json({ message: 'Store updated' });
    } catch (err) {
        console.error('Error updating Store:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteStore = async (req, res) => {
    const id = req.params.id;
    try {
        await Stores.delete(id);
        res.status(200).json({ message: 'Store deleted' });
    } catch (err) {
        console.error('Error deleting Store:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};