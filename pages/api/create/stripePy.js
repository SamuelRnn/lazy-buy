import stripe from "../../../utils/stripeConfig";

export default async function stripePay(req, res) {
  if (req.method !== "POST") {
    return res.status(400).send({ message: "Not found" });
  }

  // salen los datos de req.body
  let params = {
    submit_type: "pay",
    mode: "payment",
    payment_method_types:["card"],
    line_items: [
      {
        name: "Kavholm rental",
        amount: 1000,
        currency: "usd",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${req.headers.origin}?success=true`,
    cancel_url: `${req.headers.origin}?canceled=true`,
  };

  const session = await stripe.checkout.sessions.create(params);

  res.status(200).json(session);
}
