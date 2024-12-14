const express = require('express');
const router = express.Router();
const TicketsController = require('../controllers/ticketsController');

router.post('/createTicket', TicketsController.createTicket);
router.get('/getAllTickets', TicketsController.getAllTickets);
router.get('/getTicketsByCustomerId/:customerId', TicketsController.getTicketsByCustomerId);
router.put('/updateTicket/:id', TicketsController.updateTicket);
router.delete('/deleteTicket/:id', TicketsController.deleteTicket);

module.exports = router;