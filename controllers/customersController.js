const Customers = require('../models/customersModel');

exports.createCustomer = async (req, res) => {
    try {
        console.log('req.body -->',req.body);
        
        const result = await Customers.create(req.body);
        res.status(201).json({ message: 'Customer created', id: result.insertId });
    } catch (err) {
        console.error('Error creating Customer:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllCustomers = async (req, res) => {
    try {
        const results = await Customers.getAll();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching Customers:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateCustomer = async (req, res) => {
    const id = req.params.id;
    try {
        const results = await Customers.update(id, req.body);
        res.status(200).json(results);
    } catch (err) {
        console.error('Error updating Customer:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateCustomerStatus = async (req, res) => {
    const id = req.params.id;
    const { isActive } = req.body;
    
    try {
        await Customers.updateCustomerStatus(id, isActive);
        res.status(200).json({ message: 'Customer Status updated' });
    } catch (err) {
        console.error('Error updating Customer Status:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteCustomer = async (req, res) => {
    const id = req.params.id;
    try {
        await Customers.delete(id);
        res.status(200).json({ message: 'Customer deleted' });
    } catch (err) {
        console.error('Error deleting Customer:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.loginCustomer = async (req, res) => {
    try {
        const { email, password } = req.body;

        const Customer = await Customers.findByEmail(email); 
        if (!Customer || !Customer.data) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        if (password !== Customer.data.password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({
            message: 'Login successful',
            Customer: Customer.data,
        });

    } catch (err) {
        console.error('Error logging in Customer:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};