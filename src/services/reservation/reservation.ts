import { Request, Response } from 'express';
import { createReservation, deleteReservation, getReservationByName, validEmployee, validReservation, validRestaurant } from '../../store/reservation/reservation';


async function creatingReservation(req: Request, res: Response) {
  try {
    const { customerName, restaurantId }: any = req.body;

    const validRestaurantInSchema: string = await validRestaurant(req, res);
    if (!validRestaurantInSchema) {
      return res.status(400).json({ message: "restaurant does not exists." });
    }
    const validCategoryInSchema: string = await validEmployee(req, res);
    if (!validCategoryInSchema) {
      return res.status(400).json({ message: "employee does not exists." });
    }
    // Create a new restaurant
    const newReservation: string = await createReservation(req, res);

    return res.status(201).json({
      message: 'reservation made successfully.',
      data: newReservation,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error while creating reservation.' });
  }
}



async function updateReservation(req: Request, res: Response) {
  try {
    const reservationId: string = req.params.reservationId
    const { customerName, numberOfGuests, phoneNo }: any = req.body

    const checkreservationId = await validReservation(req, res)

    if (!checkreservationId) {
      return res.status(400).json({ message: 'incorrect reservation' })
    }
    // const updateOrder = await updatedetails(req,res)
    return res.status(201).json({ message: 'reservation updated succesfully', data: checkreservationId })

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error while placing reservation.', error });
  }
}

async function getReservation(req: Request, res: Response) {
  try {
    const customerName: string = req.params.customerName

    const checkOrderId = await getReservationByName(req, res)

    if (!checkOrderId) {
      return res.status(400).json({ message: 'incorrect reservation' })
    }
    // const updateOrder = await updatedetails(req,res)
    return res.status(201).json({ message: 'reservation details retrieved succesfully', data: checkOrderId })

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error while retrieving reservation.', error });
  }
}


async function cancelReservation(req: Request, res: Response) {

  try {
    const reservationId: string = req.params.reservationId

    const checkOrderId = await deleteReservation(req, res)

    if (!checkOrderId) {
      return res.status(400).json({ message: 'incorrect reservation' })
    }
    // const updateOrder = await updatedetails(req,res)
    return res.status(201).json({ message: 'reservation cancelled succesfully', data: checkOrderId })

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error while placing reservation.', error });
  }
}

export default {
  creatingReservation,
  updateReservation,
  getReservation,
  cancelReservation
}