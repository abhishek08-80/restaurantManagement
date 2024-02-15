import restaurantModel from "../../model/restaurant/restaurant";
import bcrypt from "bcrypt";
async function findRestaurant(req: any, res: any) {
  try {
    const { email }: any = req.body;
    const restaurant: any = await restaurantModel.Restaurant.findOne({
      where: {
        email: email
      }
    });
    if (restaurant) {
      return restaurant; // Return the restaurant if found
    }
    return null;   // Return null if the restaurant is not found
  } catch (error) {
    throw error;
  }
};

async function createRestaurant(req: any, res: any) {
  try {
    const { password }: any = req.body;
    const saltRounds: number = 10;
    const hashedPassword: string = await bcrypt.hash(password, saltRounds);
    req.body.password = hashedPassword


    const newRestaurant: any = await restaurantModel.Restaurant.create(req.body);
    return newRestaurant;
  } catch (error) {
    throw error;
  }
};

async function validPassword(req: any, res: any){
  try {
    const {password, email} = req.body
    const restaurant:any = await restaurantModel.Restaurant.findOne({
      where: {
        email: email
      }
    })

    const checkPassword = await bcrypt.compare(password, restaurant?.password)

    if (checkPassword){
        return checkPassword
    }else{
      return null;
    }
  } catch (error) {
    throw error;
  }
}




export {
  createRestaurant,
  findRestaurant,
  validPassword
};
