import order from '../../model/order/order'
import menuSchema from '../../model/menu/menu'


async function newOrder(req: any, res: any) {
  try {
    // console.log(itemName, customerName, phoneNo, restaurantId, address)
    const newReservation: any = await order.order.create(req.body)
    // .catch((error)=>{
    //   console.log(error)
    // })
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

