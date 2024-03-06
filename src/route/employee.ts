
import  creatingEmployee  from '../services/employee/employee';
import auth from '../middleware/verifyToken';
import rateLimiter from '../middleware/rateLimiter';

const restaurantRoute = (app :any) => {
    //route to create a section
    app.post('/createEmployee',auth,rateLimiter, creatingEmployee.creatingEmployee);
    app.get('/getEmployees/:id',auth,rateLimiter, creatingEmployee.getEmployeeByRest)
    app.post('/employeeLogin',rateLimiter, creatingEmployee.loginEmployee)
 }
 export default restaurantRoute;
 
     