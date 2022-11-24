const controller = require('../controllers/clientAdmin');
const router = require('express').Router();

// Add client admin
router.post('/', controller.createClientAdmin);

module.exports = router;