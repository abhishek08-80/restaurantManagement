import slugify from "slugify";
import menuSchema from "../../model/menu/menu";
import restaurantSchema from "../../model/restaurant/restaurant";
import categorySchema from "../../model/category/category"

async function validRestaurant(req: any, res: any) {
  try {
    const { restaurantId }: any = req.body;
    const restaurant: any = await restaurantSchema.Restaurant.findByPk(restaurantId);
    if (restaurant) {
      return restaurant; // Return the restaurant if found
    }
    return null;   // Return null if the restaurant is not found
  } catch (error) {
    throw error;
  }
};

async function validCategory(req: any, res: any) {
  try {
    const { categoryId }: any = req.body;
    const category: any = await categorySchema.category.findByPk(categoryId);
    if (category) {
      return category; // Return the restaurant if found
    }
    return null;   // Return null if the restaurant is not found
  } catch (error) {
    throw error;
  }
};



async function findMenu(req: any, res: any) {
try{
const {name, restaurantId}: any = req.body
const slug: string = slugify(name, {lower: true})

const existingMenu: any = await menuSchema.menu.findOne({
  where: {
     slug: slug, restaurantId: restaurantId
  }
});
console.log(existingMenu)
  if (existingMenu) {
    return existingMenu;
  }
  return null;  
} catch (error) {
  throw error;
}
} 


async function createMenu(req: any, res: any) {
    try {
      const { name }: any = req.body;
     const slug: string = slugify(name, {lower: true})
    
        
      req.body.slug = slug
      const newMenu: any = await menuSchema.menu.create(req.body);
      return newMenu;
          
  
      } catch (error) {
      throw error;
    }
  };
  


  export {
    createMenu,
    findMenu,
    validRestaurant,
    validCategory
  }

