// import STRIPE_SECRET_KEY  from "../../src/config/dbConfig";
import {addCharge, addNewCard} from '../store/payment/payment';

const paymentRoute = (app :any) => {
    
    app.post('/createCustomer', addNewCard);
    app.post('/addCharge', addCharge)
}
 export default paymentRoute;