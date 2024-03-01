import { Request, Response, request } from 'express';
import { newOrder, validItem, validOrder, validOrderAndCancel, validOrderAndGet, validOrderAndGetByStatus } from '../../store/order/order';


async function createOrder(req: Request, res: Response) {
    try {
        const { itemName, customerName, restaurantId, phoneNo, address, status } = req.body
        // console.log(itemName)

        // const payload = itemName.map((itemName:string)=>({
        //         customerName,
        //         restaurantId,
        //         phoneNo,
        //         address,
        //         status,
        //         itemName,
        // }))

        const validItems = await validItem(req, res)
        if (!validItems) {
            return res.json({ message: 'nonon' })
        }
        const saveOrder = await newOrder(req, res)
        // if(saveOrder){ 
        return res.status(201).json({ message: 'order placed succesfully', data: saveOrder })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error while placing order.', error });
    }
}



async function updateOrder(req: Request, res: Response) {
    try {
        const orderId: string = req.params.orderId
        const { status, address }: any = req.body

        const checkOrderId = await validOrder(req, res)

        if (!checkOrderId) {
            return res.status(400).json({ message: 'incorrect order' })
        }
        // const updateOrder = await updatedetails(req,res)
        return res.status(201).json({ message: 'order updated succesfully', data: checkOrderId })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error while placing order.', error });
    }
}

async function getOrder(req: Request, res: Response) {
    try {
        const orderId: string = req.params.orderId

        const checkOrderId = await validOrderAndGet(req, res)

        if (!checkOrderId) {
            return res.status(400).json({ message: 'incorrect order' })
        }
        // const updateOrder = await updatedetails(req,res)
        return res.status(201).json({ message: 'order details retrieved succesfully', data: checkOrderId })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error while placing order.', error });
    }
}


async function getOrderIdByStatus(req: Request, res: Response) {
    try {
        const orderStatus: string = req.params.orderStatus
        console.log(orderStatus)
        const checkOrderId = await validOrderAndGetByStatus(req, res)

        if (!checkOrderId) {
            return res.status(400).json({ message: 'incorrect order' })
        }
        // const updateOrder = await updatedetails(req,res)
        return res.status(201).json({ message: 'order details retrieved succesfully', data: checkOrderId })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error while placing order.', error });
    }
}

async function cancelOrder(req: Request, res: Response) {

    try {
        const orderId: string = req.params.orderId

        const checkOrderId = await validOrderAndCancel(req, res)

        if (!checkOrderId) {
            return res.status(400).json({ message: 'incorrect order' })
        }
        // const updateOrder = await updatedetails(req,res)
        return res.status(201).json({ message: 'order cancelled succesfully', data: checkOrderId })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error while placing order.', error });
    }
}

export default {
    createOrder,
    updateOrder,
    getOrder,
    getOrderIdByStatus,
    cancelOrder
}