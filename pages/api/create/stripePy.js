import stripe from "../../../utils/stripeConfig";

export default async function stripePay(req, res) {
  if (req.method !== "POST") {
    return res.status(400).send({ message: "Not found" });
  }

  // salen los datos de req.body
    let params = {
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Bicleta Renault',
          },
          unit_amount: 2000,
        },
        quantity: 5,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000?success=true',
    cancel_url: 'http://localhost:3000?cancel=true',
    
  }; 
 /*  payment_intent_data: {
    application_fee_amount: 123,
    transfer_data: {
      destination: 'acct_1MPTsGEvNgChGIg5',
    },
  }, */

  try {
    const session = await stripe.checkout.sessions.create(params);
   /*  await stripe.charges.create({
        amount: 2000,
        currency: 'usd',
        source: 'tok_visa',
        application_fee_amount: 123,
        destination: {
          account: 'acct_1MPTsGEvNgChGIg5'
        },
        description: 'Example charge'
      })

   const pago = await stripe.transfers.create({
        amount: 2000,
        currency: 'usd',
        destination: 'acct_1MPTsGEvNgChGIg5',
        transfer_group: 'ORDER_95',
      }) */
    res.status(200).json(session);
  } catch (error) {
    res.status(400).json(error);
  }
}
