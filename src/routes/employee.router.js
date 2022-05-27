const EmployeeController = require('../app/controllers/EmployeeController')

module.exports = (server, routes, prefix='/api/v1/employee') => {
    routes.post('/', EmployeeController.create)
    routes.get('/', EmployeeController.list)
    routes.get('/:id', EmployeeController.getById)

    server.use(prefix, routes);

    

}