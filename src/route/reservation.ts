import  creatingReservation  from '../services/reservation/reservation';

const reservationRoute = (app :any) => {
    //route to create a section
    app.post('/createReservation', creatingReservation.creatingReservation);
    app.get('/getReservation/:customerName', creatingReservation.getReservation);
    app.delete('/deleteReservation/:reservationId', creatingReservation.cancelReservation);
    app.put('/updateReservation/:reservationId', creatingReservation.updateReservation); 
 }
 export default reservationRoute;
 
 