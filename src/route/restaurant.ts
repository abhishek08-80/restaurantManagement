
import  creatingRestaurant   from '../services/restaurant/restaurant';
import rateLimiter from '../middleware/rateLimiter'

const restaurantRoute = (app :any) => {
    //route to create a section
    app.post('/createRestaurant',rateLimiter, creatingRestaurant.creatingRestaurant);
    app.post('/loginRestaurant', rateLimiter,creatingRestaurant.loginRestaurant);
 }
 export default restaurantRoute;