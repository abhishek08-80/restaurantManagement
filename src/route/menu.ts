import  creatingMenu  from '../services/menu/menu';

const restaurantRoute = (app :any) => {
    //route to create a section
    app.post('/createMenu', creatingMenu.creatingMenu);
 }
 export default restaurantRoute;
 
 