import stripe from 'stripe'; 

import { STRIPE_SECRET_KEY } from '../../config/env'

const stripeInstance = new stripe(STRIPE_SECRET_KEY); // Create a Stripe instance

// Define the addNewCard function
export const addNewCard = async (req: any, res: any) => {
    try {
        const { stripeEmail, stripeToken, name , address} = req.body;

        // Create a new customer
        const customer: any = await stripeInstance.customers.create({
            email: stripeEmail,
            source: stripeToken,    
            name: name,
            address: {  
                line1: address.line1,
                postal_code: address.postal_code,
                city: address.city,
                state: address.state,
                country: address.country,
            }
        });
        res.status(201).json({ message: "Success", customer });
    } catch (err) {
        res.status(500).send(err); 
    }
}




                
    // / Define the addNewCard function
export const addCharge = async (req: any, res: any) => {
    try {
        const { stripeEmail, stripeToken, amount, currency, source , } = req.body;
 
        // Create a charge for the customer
         const charge= await stripeInstance.charges.create({
            amount: amount, 
            currency: currency,
            source: source, 
            });
        // console.log(charge)
        
        res.status(201).json({ message: "Success",charge }); // If no error occurs
    } catch (err) {
        res.status(500).send(err); // If some error occurs
    }
}
