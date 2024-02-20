import { Request, Response } from 'express';
import {createMenu,validRestaurant,validCategory, findMenu } from '../../store/menu/menu';


async function creatingMenu(req: Request, res: Response) {
    try { 
      const { name, restaurantId }:any =  req.body;
      // Check if the name is missing or empty
      if (!name) {  
        return res.status(400).json({ message: "name is required." });
      }
      const validRestaurantInSchema: string = await validRestaurant(req,res);
      if(!validRestaurantInSchema){
        return res.status(400).json({ message: "restaurant does not exists." });
      }
      const validCategoryInSchema: string = await validCategory(req,res);
      if(!validCategoryInSchema){
        return res.status(400).json({ message: "category does not exists." });
      }
      // Check if a employee with the same name already exists
      const existingMenu: string = await findMenu (req, res);
      if (existingMenu) {
        return res.status(400).json({ message: "menu already exists." });
      }
      // Create a new restaurant
      const newMenu:string = await createMenu(req, res);
  
      return res.status(201).json({
        message: 'menu added successfully.',
        data: newMenu,
      });
    } catch (error) { 
      console.error(error);
      return res.status(500).json({ message: 'Error while adding menu.' }); 
    }
  }


  export default {
    creatingMenu
  }