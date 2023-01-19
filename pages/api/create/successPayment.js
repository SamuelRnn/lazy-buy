import { product, transaction, user } from "../../../prisma";

export default async function success(req, res) {
  if (req.method !== "POST") {
    return res.status(400).send({ message: "Not found" });
  }

  let { emailUser } = req.body[0];
  try {
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
    res.status(200).json({ transactionCreate: true, modifiedStock: true });
  } catch (error) {
    console.log(error)
    res.status(200).json({ transactionCreate: false, modifiedStock: false });
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
