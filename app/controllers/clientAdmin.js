const ClientAdmin = require('../models/clientAdmin');

// Create Client Admin with companyId, name and status {active,inactive}
exports.createClientAdmin = async (req, res, next) => {
    try{
        const CLIENT_ADMIN_MODEL = {
            companyId: req.body.companyId,
            name: req.body.name,
            status: req.body.status,
        };

        try{
            const clientAdmin = await ClientAdmin.create(CLIENT_ADMIN_MODEL);
            console.log('Create Client Admin successful')
            return res.status(201).json(clientAdmin);
        } catch (error){
            return res.status(500).json(error);
        }
    } catch (error){
        return res.status(500).json(error);
    }
}