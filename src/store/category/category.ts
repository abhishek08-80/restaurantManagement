import slugify from "slugify";
import category from "../../model/category/category";
import restaurantSchema from "../../model/restaurant/restaurant";

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


async function findCategory(req: any, res: any) {
try{
const {name, restaurantId}: any = req.body
const slug: string = slugify(name, {lower: true})
    
const existingCategory: any = await category.category.findOne({ where: {slug: slug, restaurantId: restaurantId} })
console.log(existingCategory)
  if (existingCategory) {
    return existingCategory; // Return the restaurant if found
  }
  return null;   // Return null if the restaurant is not found
} catch (error) {
  throw error;
}
}


async function createCategory(req: any, res: any) {
    try {
      const { name }: any = req.body;
     const slug: string = slugify(name, {lower: true})
    
        
      req.body.slug = slug
      const newCategory: any = await category.category.create(req.body);
      return newCategory;
          
  
      } catch (error) {
      throw error;
    }
  };
  


  export {
    createCategory,
    findCategory,
    validRestaurant
  }

