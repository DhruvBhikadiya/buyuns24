const Tickets = require('../models/ticketsModel');


exports.createTicket = async (req, res) => {
  try {
    const result = await Tickets.create(req.body);
    res.status(201).json({ message: 'Ticket created', id: result.insertId });
  } catch (err) {
    console.error('Error creating Ticket:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllTickets = async (req, res) => {
  try {
    const results = await Tickets.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Tickets:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getTicketsByCustomerId = async (req, res) => {
  const CustomerId = req.params.customerId;
  try {
    const results = await Tickets.getTicketsByCustomerId(CustomerId);
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Projects:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateTicket = async (req, res) => {
  const id = req.params.id;
  try {
    await Tickets.update(id, req.body);
    res.status(200).json({ message: 'Ticket updated' });
  } catch (err) {
    console.error('Error updating Ticket:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteTicket = async (req, res) => {
  const id = req.params.id;
  try {
    await Tickets.delete(id);
    res.status(200).json({ message: 'Ticket deleted' });
  } catch (err) {
    console.error('Error deleting Ticket:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
