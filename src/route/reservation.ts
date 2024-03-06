import  creatingReservation  from '../services/reservation/reservation';
import rateLimiter from '../middleware/rateLimiter'

const reservationRoute = (app :any) => {
    //route to create a section
    app.post('/createReservation',rateLimiter, creatingReservation.creatingReservation);
    app.get('/getReservation/:customerName',rateLimiter, creatingReservation.getReservation);
    app.delete('/deleteReservation/:reservationId',rateLimiter, creatingReservation.cancelReservation);
    app.put('/updateReservation/:reservationId',rateLimiter, creatingReservation.updateReservation); 
 }
 export default reservationRoute;
 
 