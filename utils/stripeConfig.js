import Stripe from "stripe";



//back
export const stripe = new Stripe(process.env.SECRET_KEY)

 