import { throws } from "assert";
import { product, transaction, user } from "../../../prisma";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "lazybuy23@gmail.com",
    pass: "sngktitaklqmvliq",
  },
});

transporter.verify().then(() => {
  console.log("Mensaje enviado");
});

export default async function success(req, res) {
  if (req.method !== "POST") {
    return res.status(400).send({ message: "Not found" });
  }

  try {
    if (!req.body.length) throw new Error("No products error");
    let { emailUser } = req.body[0];
    let arr = [];

    req.body.forEach(async ({ id, quantity }) => {
      const producto = await product.findUnique({
        where: { id },
        include: { company: { select: { name: true } } },
      });
      const { companyId, id: productId } = producto;
      const { id: userId } = await user.findUnique({
        where: { email: emailUser },
      });

      const tr = await transaction.create({
        data: {
          userId,
          companyId,
          productId,
          productAmount: quantity,
        },
      });
      

      const data = await product.findUnique({
        where: { id: tr.productId },
        select: {
          name: true,
        },
      });
      
      arr.push(data);

      let names = arr.map((item) => item.name);
      let namesproduct = `<ul>${names
        .map((name) => `<li>${name}</li>`)
        .join("")}</ul>`;

       await transporter.sendMail({
        from: '"Payment Completed" <lazybuy23.gmail.com>', // sender address
        to: emailUser, // list of receivers
        subject: "Payment Completed", // Subject line
        html: `<h2>Payment completed successfully!</h2> </br> <p>Purchased Products: <p/> </br> ${namesproduct}`,
      });
      

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

    // const data = await product.findUnique({
    //   where: { id: tr.productId },
    //   select: {
    //     name: true
    //   },
    // });
    // console.log(data)
    // arr.push(data);

    // let names = arr.map((item) => item.name);
    // let namesproduct = `<ul>${names.map(name => `<li>${name}</li>`).join('')}</ul>`

    // const pago = await transporter.sendMail({
    //   from: '"Payment Completed" <lazybuy23.gmail.com>', // sender address
    //   to: emailUser, // list of receivers
    //   subject: "Payment Completed", // Subject line
    //   html: `<h2>Payment completed successfully!</h2> </br> <p>Purchased Products<p/> </br> ${namesproduct}`,
    // });
    // res.status(200).json(pago)

    res.status(200).json({ transactionCreate: true, modifiedStock: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ transactionCreate: false, modifiedStock: false });
  }
}

/* ids.forEach(async ({ id, quantity }) => {
        const producto = await product.findUnique({ where: { id },include:{company:{select:{name:true}}} });
        const {companyId,id:productId} = producto
        // falta enviar por body el id del usuario ***********
        const transation = await transaction.create({
          data:{
            userId:"0f631a6d-15df-46e3-8a6e-aace8f191ef4",
            companyId,
            productId,
            productAmount:quantity,
          }
        })
        console.log(transation)

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
      }); */
