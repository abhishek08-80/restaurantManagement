import employeeRoute from "./restaurant"
import restaurantRoute from "./restaurant"
import categoryRoutes from "./category"
import menuRoutes from './menu'

const routes = async (app: any) =>{
    employeeRoute(app)
    restaurantRoute(app)
    categoryRoutes(app)
    menuRoutes(app)
}



export {routes}