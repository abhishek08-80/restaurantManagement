import order from '../../model/order/order';
import menuSchema from '../../model/menu/menu';
import stripe from 'stripe';

import { STRIPE_SECRET_KEY } from '../../config/env'

const stripeInstance = new stripe(STRIPE_SECRET_KEY); // Create a Stripe instance


async function newOrder(req: any, res: any) {
  try {
    // console.log(itemName, customerName, phoneNo, restaurantId, address)
    // .catch((error)=>{
    //   console.log(error)
    // })

    const { itemName, source } = req.body;

    const value = itemName.item1
    console.log(value)
    const getValueDetail = await menuSchema.menu.findOne({
      where: {
        name: value
      }
    })
    const amount = await getValueDetail?.price
    console.log(amount)

    req.body.amount = amount
    const newReservation: any = await order.order.create(req.body)

    // Create a charge for the customer
    const charge = await stripeInstance.charges.create({
      amount: amount,
      currency: 'xaf',
      source: source,
    });
    // console.log(charge)

    return newReservation;
  } catch (error) {
    throw error;
  }
};

async function validItem(req: any, res: any) {
  try {
    const { itemName } = req.body
    console.log(itemName)
    const validItems = await menuSchema.menu.findAll({
      where: {
        // name: req.body.itemName.item1
        name: itemName.item1
      }
    })
    return validItems
  } catch (error) {
    throw error;
  }
}


async function validOrder(req: any, res: any) {
  try {
    const orderId: number = req.params.orderId
    const data: any = req.body

    const validOrderById = await order.order.findByPk(orderId)
    if (!validOrderById) {
      return null
    }
    await validOrderById.update(data)
    return validOrderById
  } catch (error) {
    throw error;
  }
}

async function validOrderAndGet(req: any, res: any) {
  try {
    const orderId: number = req.params.orderId

    const validOrderById = await order.order.findByPk(orderId)
    if (!validOrderById) {
      return null
    }
    return validOrderById
  } catch (error) {
    throw error;
  }
}

async function validOrderAndGetByStatus(req: any, res: any) {
  try {
    const orderStatus: string = req.params.orderStatus
    console.log(orderStatus)
    const validOrderById = await order.order.findAll({
      limit: 3,
      // offset:1,
      where: {
        status: orderStatus
      }
    })
    if (!validOrderById) {
      return null
    }
    return validOrderById
  } catch (error) {
    throw error;
  }
}

async function validOrderAndCancel(req: any, res: any) {
  try {
    const orderId: number = req.params.orderId
    // const status = req.body
    const validOrderById = await order.order.findByPk(orderId)
    if (!validOrderById) {
      return null
    }

    await validOrderById.destroy()
    return validOrderById
  } catch (error) {
    throw error;
  }
}

// async function validOrderAndCancel(req: any, res: any){
//   try {
//     const orderId: number = req.params.orderId
//     const 
//     // const status = req.body
//     const validOrderById = await order.order.findByPk(orderId)
//     if(!validOrderById){
//     return null
//     }

//    await validOrderById.update('status': cancelled)
//     return validOrderById
//   } catch (error) {
//     throw error;
//   } 
// }


export {
  newOrder,
  validItem,
  validOrder,
  validOrderAndGet,
  validOrderAndGetByStatus,
  validOrderAndCancel
}

