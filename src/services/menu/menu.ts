import { Request, Response } from 'express';
import { createMenu, validRestaurant,updateMenuItem,getMenuAndDelete, findMenu, getMenuByCat, getByMenuId, menuByName, menuByDesc } from '../../store/menu/menu';


async function creatingMenu(req: Request, res: Response) {
  try { 
    const { name, restaurantId }: any = req.body;
    // Check if the name is missing or empty
    if (!name) {
      return res.status(400).json({ message: "name is required." });
    }
    const validRestaurantInSchema: string = await validRestaurant(req, res);
    if (!validRestaurantInSchema) {
      return res.status(400).json({ message: "restaurant does not exists." });
    }
    // const validCategoryInSchema: string = await(req, res);
    // if (!validCategoryInSchema) {
    //   return res.status(400).json({ message: "category does not exists." });
    // }
    // Check if a employee with the same name already exists
    const existingMenu: string = await findMenu(req, res);
    if (existingMenu) {
      return res.status(400).json({ message: "menu already exists." });
    }
    // Create a new restaurant
    const newMenu: string = await createMenu(req, res);

    return res.status(201).json({
      message: 'menu added successfully.',
      data: newMenu, 
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error while adding menu.' });
  }
}


async function getMenuByCategory(req: Request, res: Response) {
  try {
    const category: string = req.params.category
    console.log(category)
    // const validCat = await validCategory(req, res);
    // if (!validCat) {
    //   return res.status(400).json({ message: "category does not exists." });
    // }

    const getByCategory = await getMenuByCat(req, res)

    console.log(getByCategory)
    return res.json({ message: getByCategory })
  } catch (error) {
    return res.status(500).json({ message: 'Error while retrieving menu.' });
  }
}


async function getMenuByMenuId(req: Request, res: Response) {
  try {
    const menuId: string = req.params.id

    const getByMenu = await getByMenuId(req, res)

    console.log(getByMenu)
    return res.json({ message: getByMenu })
  } catch (error) {
    return res.status(500).json({ message: 'Error while retrieving menu.' });
  }
}


async function getMenuByName(req: Request, res: Response) {
  try {
    const getByName = await menuByName(req, res)

    if(getByName){
    return res.status(200).json({ "Data recieved successfully": getByName })
    }
    else{
      return res.status(400).json({message: 'dish does not exists'})
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error while retrieving menu.' });
  }
}

async function getMenuByDescription(req: Request, res: Response) {
  try {
    const getByDesc = await menuByDesc(req, res)
    console.log(getByDesc)
    if(getByDesc){
    return res.status(200).json({ "Data recieved successfully": getByDesc })
    }else{
      return res.status(400).json({message: 'dish with this description does not exists'})
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error while retrieving menu.' });
  }
}

async function deleteMenu(req: Request, res: Response){
  try {
    const menuId: string= req.params.id
    console.log(menuId)
    const validMenu = await getMenuAndDelete(req, res)
    if (validMenu){
    return res.status(201).json({message: "item deleted successfully" ,validMenu})
    }
    return res.status(400).json({message: "Menu item does not exists"})
  } catch (error) {
    return res.status(500).json({ message: 'Error while deleting menu.' });
  }
}
 

async function updateMenu(req: Request, res: Response) {
  try {
    const { name  }: any = req.body;
    const menuId: string= req.params.id
    
    const validMenuId: any = await getByMenuId(req,res);
    if(!validMenuId){
      return res.status(400).json({message: 'menu item does not exists'})
    }
    const newMenu: any = await updateMenuItem(req, res);

    return res.status(201).json({
      message: 'menu updated successfully.',
      data: newMenu,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error while adding menu.' });
  }
}

 


 
export default {
  creatingMenu,
  getMenuByCategory,
  getMenuByMenuId,
  getMenuByName,
  getMenuByDescription,
  deleteMenu,
  updateMenu
}