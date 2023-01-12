import Stripe from "stripe";

const stripe = Stripe(process.env.SECRET_KEY)

export default stripe;