import  creatingMenu  from '../services/menu/menu';
import authEmployee from '../middleware/employeeAuth';
import rateLimiter from '../middleware/rateLimiter';

const restaurantRoute = (app :any) => {
    app.post('/createMenu',authEmployee,rateLimiter, creatingMenu.creatingMenu);
    app.get('/getMenu/:category',rateLimiter, creatingMenu.getMenuByCategory);
    app.get('/getByMenuId/:id',rateLimiter, creatingMenu.getMenuByMenuId) 
    app.get('/getMenuByName/:name',rateLimiter, creatingMenu.getMenuByName);
    app.get('/getMenuByDescription/',rateLimiter, creatingMenu.getMenuByDescription)
    app.delete('/deleteMenu/:id',rateLimiter, creatingMenu.deleteMenu)
    app.put('/updateMenu/:id',rateLimiter, creatingMenu.updateMenu)
}
 export default restaurantRoute;
 
 