import { Request, Response } from 'express';
import { findCategory,validRestaurant,createCategory } from '../../store/category/category';


async function creatingCategory(req: Request, res: Response) {
    try { 
      const { name, restaurantId }:any = req.body;
      // Check if the name is missing or empty
      if (!name) {
        return res.status(400).json({ message: "name is required." });
      }
      const validRestaurantInSchema: string = await validRestaurant(req,res);
      if(!validRestaurantInSchema){
        return res.status(400).json({ message: "restaurant does not exists." });
      }
      // Check if a employee with the same name already exists
      const existingCategory: string = await findCategory (req, res);
      if (existingCategory) {
        return res.status(400).json({ message: "category already exists." });
      }
      // Create a new restaurant
      const newCategory:string = await createCategory(req, res);
  
      return res.status(201).json({
        message: 'category added successfully.',
        data: newCategory,
      });
    } catch (error) { 
      console.error(error);
      return res.status(500).json({ message: 'Error while adding employee.' }); 
    }
  }


  export default {
    creatingCategory
  }