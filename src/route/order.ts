import  creatingorder  from '../services/order/order';

const orderRoute = (app :any) => {
    //route to create a section
    
    app.post('/createOrder', creatingorder.createOrder);
    app.put('/updateOrder/:orderId', creatingorder.updateOrder);
    app.get('/getOrder/:orderId', creatingorder.getOrder);
    app.get('/getOrderByStatus/:orderStatus', creatingorder.getOrderIdByStatus);
    app.delete('/deleteOrder/:orderId', creatingorder.cancelOrder); 
}
 export default orderRoute;
 
 