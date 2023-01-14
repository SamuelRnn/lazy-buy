import { stripe } from "../../../utils/stripeConfig";
import { product } from "../../../prisma";

export default async function stripePay(req, res) {
  if (req.method !== "POST") {
    return res.status(400).send({ message: "Not found" });
  }
  console.log(req.body);
  let ids = [];
  let items = req.body.map((e) => {
    ids.push(e.id);
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
    success_url: "http://localhost:3000/paymentIs?success=true",
    cancel_url: "http://localhost:3000/paymentIs?cancel=true",
  };

  try {
    const session = await stripe.checkout.sessions.create(params);

    ids.forEach(async (e) => {
      const producto = await product.findUnique({
        where: {
          id: e,
        },
      });

      if (producto.stock < 1) {
        producto.isVisible = false;
      }
      if (producto.stock >= 1) {
        producto.stock = producto.stock - 1;
      }
    });

    res.status(200).json(session);
  } catch (error) {
    res.status(400).json(error);
  }
}
