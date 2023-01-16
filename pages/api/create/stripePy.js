import { stripe } from "../../../utils/stripeConfig";
import { product, company } from "../../../prisma";

export default async function stripePay(req, res) {
  if (req.method !== "POST") {
    return res.status(400).send({ message: "Not found" });
  }

  console.log("body es : ", req.body);

  if (req.query.pay === "product") {
    let ids = [];
    let items = req.body.map((e) => {
      ids.push({ id: e.id, quantity: e.quantity });
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

      ids.forEach(async ({ id, quantity }) => {
        const producto = await product.findUnique({ where: { id } });

        if (producto && producto.stock >= 1) {
          await product.update({
            where: { id },
            data: { stock: producto.stock - quantity },
          });
        }
        const productoNew = await product.findUnique({ where: { id } });

        if (productoNew.stock < 1) {
          await product.update({
            where: {
              id,
            },
            data: { isVisible: false },
          });
        }
      });

      res.status(200).json(session);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  if (req.query.pay === "plan") {
    if (req.body.planType === "Standard") {
      console.log("hola estou aqui")

      await company.update({
        where: {
          email: req.body.email,
        },
        data: {
          plan: req.body.planType,
        },
      });
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
        success_url: `http://localhost:3000/dashboard/plan?success=true&planType=${req.body.planType}`,
        cancel_url: "http://localhost:3000/dashboard/plan?cancel=true",
      };

      const session = await stripe.checkout.sessions.create(paramsPlan);
      res.status(200).json(session);
    }
    if (req.body.planType === "Premium") {
      await company.update({
        where: {
          email: req.body.email,
        },
        data: {
          plan: req.body.planType,
        },
      });
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
        success_url: `http://localhost:3000/dashboard/plan?success=true&planType=${req.body.planType}`,
        cancel_url: "http://localhost:3000/dashboard/plan?cancel=true",
      };

      const session = await stripe.checkout.sessions.create(paramsPlan);
      res.status(200).json(session);
    }
  }
}
