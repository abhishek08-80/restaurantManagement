
import  creatingRestaurant   from '../services/restaurant/restaurant';

const restaurantRoute = (app :any) => {
    //route to create a section
    app.post('/createRestaurant', creatingRestaurant.creatingRestaurant);
    app.post('/loginRestaurant', creatingRestaurant.loginRestaurant);
 }
 export default restaurantRoute;