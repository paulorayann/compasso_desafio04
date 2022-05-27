const EmployeeService = require('../service/EmployeeService')

class EmployeeController {
    //Create
    async create(req, res) {
        try {
            const result = await EmployeeService.create(req.body)
            return  res.status(201).json(result)
        } catch(error) {
            return res.status(400).json(error)
    
        } 
    }
    //List All   
    async list(req, res) {
            const result = await EmployeeService.list(req.query)
            return res.status(200).json(result)
    }

    //List by Id
    async getById(req, res) {
        try {
          const result = await EmployeeService.getById(req.params.id);
          return res.status(200).json(result);
        } catch (error) {
          return res.status(400).json(error);
        }
      }
}

module.exports = new EmployeeController ()