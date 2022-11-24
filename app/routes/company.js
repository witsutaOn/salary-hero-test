const controller = require('../controllers/company');
const router = require('express').Router();

// Company CRUD
// Get all company
router.get('/', controller.getAllCompany)

// Get company by id
router.get('/:id', controller.getCompanyById)

// Create company
router.post('/', controller.createCompany)

// Update company by id
router.put('/:id', controller.updateCompanyById)

// Delete company by id
router.delete('/:id', controller.deleteCompanyById)

module.exports = router;