
import  creatingEmployee  from '../services/employee/employee';

const restaurantRoute = (app :any) => {
    //route to create a section
    app.post('/createEmployee', creatingEmployee.creatingEmployee);
    app.get('/getEmployees/:id', creatingEmployee.getEmployeeByRest)
 }
 export default restaurantRoute;
 
     