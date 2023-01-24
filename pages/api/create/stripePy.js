import { stripe } from "../../../utils/stripeConfig";
import { product, company, transaction } from "../../../prisma";

function fake(str) { 
  return str.split("")
  .map((e, i) => e + i + "-")
  .join("");
}

export default async function stripePay(req, res) {
  if (req.method !== "POST") {
    return res.status(400).send({ message: "Not found" });
  }

  if (req.query.pay === "product") {
    const email = req.body[0].userEmail;
    const otro = email
      .split("")
      .map((e, i) => e + i + "-")
      .join("");
    let items = req.body.map((e) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: e.name,
          },
          unit_amount: e.unit_amount * 100,
        },
        quantity: e.quantity,
      };
    });
    // salen los datos de req.body
    let params = {
      line_items: items,
      mode: "payment",
      success_url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/paymentIs?status=${otro}`,
      cancel_url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/paymentIs?cancel=true`,
    };

    try {
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  // *****************************************************

  if (req.query.pay === "plan") {
    if (req.body.planType === "Standard") {
      
      let paramsPlan = {
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: `New Plan ${req.body.planType}`,
              },
              unit_amount: 49 * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }/dashboard/plan?success=true&planType=${fake(req.body.planType)}`,
        cancel_url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }/dashboard/plan?cancel=true`,
      };

      const session = await stripe.checkout.sessions.create(paramsPlan);
      res.status(200).json(session);
    }
    if (req.body.planType === "Premium") {
      
      let paramsPlan = {
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: `New Plan ${req.body.planType}`,
              },
              unit_amount: 99 * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }/dashboard/plan?success=true&planType=${fake(req.body.planType)}`,
        cancel_url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }/dashboard/plan?cancel=true`,
      };

      const session = await stripe.checkout.sessions.create(paramsPlan);
      res.status(200).json(session);
    }
  }
}
