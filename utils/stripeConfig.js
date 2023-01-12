import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY)

export default stripe;