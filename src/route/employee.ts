
import  creatingEmployee  from '../services/employee/employee';

const restaurantRoute = (app :any) => {
    //route to create a section
    app.post('/createEmployee', creatingEmployee.creatingEmployee);
 }
 export default restaurantRoute;
 
 