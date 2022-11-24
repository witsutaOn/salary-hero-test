const Employee = require('../models/employee');

// Get All Employee
exports.getAllEmployee = async (req, res, next) => {
    try{
        const employeeLists = await Employee.findAll();
        return res.status(200).json(employeeLists);
    } catch (error){
        return res.status(500).json(error);
    }
}

// Get Employee by ID
exports.getEmployeeById = async (req, res, next) => {
    try{
        const employee = await Employee.findByPk(req.params.id); // find employee by id {primary key}
        return res.status(200).json(employee);
    } catch (error){
        return res.status(500).json(error);
    }
}

// Create Employee with companyId, name and role {employee, sales, ...}
exports.createEmployee  = async (req, res, next) => {
    try{
        const EMPLOYEE_MODEL = {
            companyId: req.body.companyId,
            name: req.body.name,
            role: req.body.role,
        };

        try{
            const employee = await Employee.create(EMPLOYEE_MODEL);
            console.log('Create employee successful')
            return res.status(201).json(employee);
        } catch (error){
            return res.status(500).json(error);
        }
    } catch (error){
        return res.status(500).json(error);
    }
}

// Update Employee with companyId, name and role {employee, sales, ...}
exports.updateEmployeeById = async (req, res, next) => {
    try{
        const EMPLOYEE_MODEL = {
            companyId: req.body.companyId,
            name: req.body.name,
            role: req.body.role,
        };

        try{
            await Employee.update(EMPLOYEE_MODEL, {where: { id: req.params.id }}) //where id = req.params.id
            return res.status(200).json({"message": "Update employee id " + req.params.id + " successful" });
        } catch (error){
            return res.status(500).json(error);
        }
    } catch (error){
        return res.status(500).json(error);
    }
}

// Delete Employee by ID
exports.deleteEmployeeById = async (req, res, next) => {
    try{
        await Employee.destroy({ where: { id: req.params.id } }); //where id = req.params.id
        return res.status(200).json({"message": "Delete employee id " + req.params.id + " successful" });
    } catch (error){
        return res.status(500).json(error);
    }
}