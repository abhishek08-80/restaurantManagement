import  creatingMenu  from '../services/menu/menu';

const restaurantRoute = (app :any) => {
    app.post('/createMenu', creatingMenu.creatingMenu);
    app.get('/getMenu/:category', creatingMenu.getMenuByCategory);
    app.get('/getByMenuId/:id', creatingMenu.getMenuByMenuId) 
    app.get('/getMenuByName/:name', creatingMenu.getMenuByName);
    app.get('/getMenuByDescription/', creatingMenu.getMenuByDescription)
    app.delete('/deleteMenu/:id', creatingMenu.deleteMenu)
    app.put('/updateMenu/:id', creatingMenu.updateMenu)
}
 export default restaurantRoute;
 
 