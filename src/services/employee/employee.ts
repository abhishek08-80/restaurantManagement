import { Request, Response } from 'express';
import { createEmployee,findEmployee, validRestaurant, getEmployees,validRestCheckByParams } from '../../store/employee/employee';


async function creatingEmployee(req: Request, res: Response) {
    try { 
      const { email, restaurantId }:any = req.body;
      // Check if the email is missing or empty
      if (!email) {
        return res.status(400).json({ message: "email is required." }); 
      }
      const validRestaurantInSchema: string = await validRestaurant(req,res);
      if(!validRestaurantInSchema){
        return res.status(400).json({ message: "restaurant does not exists." });
      }
      // Check if a employee with the same email already exists
      const existingEmployee: string = await findEmployee(req, res);
      if (existingEmployee) {
        return res.status(400).json({ message: "employee already exists." });
      }
      // Create a new restaurant
      const newEmployee:string = await createEmployee(req, res);
  
      return res.status(201).json({
        message: 'employee added successfully.', 
        data: newEmployee,
      });
    } catch (error) { 
      console.error(error);
      return res.status(500).json({ message: 'Error while adding employee.' }); 
    }
  }

 

  async function getEmployeeByRest(req:Request, res:Response){
    try { 
      const restaurantId:any = req.params.id
      console.log(restaurantId)
      const validRest = await validRestCheckByParams(req,res);
      if(!validRest){
        return res.status(400).json({ message: "restaurant does not exists." });
      } 
       
      const getByRestaurant = await getEmployees(req,res)

      console.log(getByRestaurant)
      if (getByRestaurant === null){
      return res.json({message:'no employee is linked with this restaurant'})    

      }
      return res.json({message: getByRestaurant})
    } catch (error) {
      return res.status(500).json({ message: 'Error while adding employee.' }); 
    }
  }   

 

  export default {
    creatingEmployee,
    getEmployeeByRest
  }