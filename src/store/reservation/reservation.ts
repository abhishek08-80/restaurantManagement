import restaurantSchema from "../../model/restaurant/restaurant";
import employeeSchema from "../../model/employees/employees"
import reservationSchema from '../../model/reservation/reservation'


async function validRestaurant(req: any, res: any) {
  try {
    const { restaurantId }: any = req.body;
    const restaurant: any = await restaurantSchema.Restaurant.findByPk(restaurantId);
    if (restaurant) {
      return restaurant; // Return the restaurant if found
    }
    return null;   // Return null if the restaurant is not found
  } catch (error) {
    throw error;
  }
};

async function validEmployee(req: any, res: any) {
  try {
    const { employeeId }: any = req.body;
    const employee: any = await employeeSchema.employee.findByPk(employeeId);
    if (employee) {
      return employee; // Return the employee if found
    }
    return null;   // Return null if the employee is not found
  } catch (error) {
    throw error;
  }
};


async function createReservation(req: any, res: any) {
  try {

    const newReservation: any = await reservationSchema.reservation.create(req.body);
    return newReservation;

  } catch (error) {
    throw error;
  }
};


async function validReservation(req: any, res: any) {
  try {
    const reservationId: number = req.params.reservationId;
    const data = req.body
    const reservation: any = await reservationSchema.reservation.findByPk(reservationId);
    if (!reservation) {
      return null;
    }
    await reservation.update(data)
    return reservation
  } catch (error) {
    throw error;
  }
};

async function getReservationByName(req: any, res: any) {
  try {
    const name: string = req.params.customerName;
    const reservation: any = await reservationSchema.reservation.findAll({
      limit: 2,
      where: {
        customerName: name
      }
    });
    if (!reservation) {
      return null;
    }
    return reservation
  } catch (error) {
    throw error;
  }
};


async function deleteReservation(req: any, res: any) {
  try {
    const reservationId: number = req.params.reservationId;
    const reservation: any = await reservationSchema.reservation.findByPk(reservationId);
    if (!reservation) {
      return null;
    }
    await reservation.destroy()
    return reservation
  } catch (error) {
    throw error;
  }
};


export {
  createReservation,
  validRestaurant,
  validEmployee,
  validReservation,
  getReservationByName,
  deleteReservation
}

