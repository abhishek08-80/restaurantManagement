import employeeRoute from "./employee"
import restaurantRoute from "./restaurant"
import menuRoutes from './menu';
import reservationRoute from './reservation'
import orderRoute from './order';

const routes = async (app: any) =>{
    employeeRoute(app)
    restaurantRoute(app)
    menuRoutes(app)
    reservationRoute(app)
    orderRoute(app)
}



export {routes}