const controller = require('../controllers/employee');
const router = require('express').Router();

// Employee CRUD
// Get all employee
router.get('/', controller.getAllEmployee)

// Get all employee by id
router.get('/:id', controller.getEmployeeById)

// Create all employee
router.post('/', controller.createEmployee)

// Update all employee by id
router.put('/:id', controller.updateEmployeeById)

// Delete company by id
router.delete('/:id', controller.deleteEmployeeById)

module.exports = router;