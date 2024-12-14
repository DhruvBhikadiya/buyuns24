const Services = require('../models/servicesModel');

exports.createService = async (req, res) => {
    try {
        console.log('req.body -->',req.body);
        
        const result = await Services.create(req.body);
        res.status(201).json({ message: 'Service created', id: result.insertId });
    } catch (err) {
        console.error('Error creating Service:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllServices = async (req, res) => {
    try {
        const results = await Services.getAll();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching Services:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateService = async (req, res) => {
    const id = req.params.id;
    try {
        await Services.update(id, req.body);
        res.status(200).json({ message: 'Service updated' });
    } catch (err) {
        console.error('Error updating Service:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteService = async (req, res) => {
    const id = req.params.id;
    try {
        await Services.delete(id);
        res.status(200).json({ message: 'Service deleted' });
    } catch (err) {
        console.error('Error deleting Service:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};