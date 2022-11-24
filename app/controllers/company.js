const Company = require('../models/company');

// Get All Company
exports.getAllCompany = async (req, res, next) => {
    try{
        const companyLists = await Company.findAll();
        return res.status(200).json(companyLists);
    } catch (error){
        return res.status(500).json(error);
    }
}


// Get Company by ID
exports.getCompanyById = async (req, res, next) => {
    try{
        const company = await Company.findByPk(req.params.id); // find employee by id {primary key}
        return res.status(200).json(company);
    } catch (error){
        return res.status(500).json(error);
    }
}

// Create Company with name
exports.createCompany = async (req, res, next) => {
    try{
        const COMPANY_MODEL = {
            name: req.body.name
        };

        try{
            const company = await Company.create(COMPANY_MODEL);
            console.log('Create company successful')
            return res.status(201).json(company);
        } catch (error){
            return res.status(500).json(error);
        }
    } catch (error){
        return res.status(500).json(error);
    }
}

// Update Company with name
exports.updateCompanyById = async (req, res, next) => {
    try{
        const COMPANY_MODEL = {
            name: req.body.name
        };

        try{
            await Company.update(COMPANY_MODEL, {where: { id: req.params.id }}) //where id = req.params.id
            return res.status(200).json({"message": "Update company id " + req.params.id + " successful" });
        } catch (error){
            return res.status(500).json(error);
        }
    } catch (error){
        return res.status(500).json(error);
    }
}


// Delete Company by ID
exports.deleteCompanyById = async (req, res, next) => {
    try{
        await Company.destroy({ where: { id: req.params.id } }); //where id = req.params.id
        return res.status(200).json({"message": "Delete company id " + req.params.id + " successful" });
    } catch (error){
        return res.status(500).json(error);
    }
}