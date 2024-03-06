import  creatingorder  from '../services/order/order';
import rateLimiter from '../middleware/rateLimiter'

const orderRoute = (app :any) => {
    //route to create a section
    
    app.post('/createOrder',rateLimiter, creatingorder.createOrder);
    app.put('/updateOrder/:orderId',rateLimiter, creatingorder.updateOrder);
    app.get('/getOrder/:orderId',rateLimiter, creatingorder.getOrder);
    app.get('/getOrderByStatus/:orderStatus',rateLimiter, creatingorder.getOrderIdByStatus);
    app.delete('/deleteOrder/:orderId',rateLimiter, creatingorder.cancelOrder); 
}
 export default orderRoute;
 
 