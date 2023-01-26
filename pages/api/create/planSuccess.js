import { company } from "../../../prisma";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "lazybuy03@gmail.com",
    pass: "nxdrucgjlgvitpms",
  },
});

// transporter.verify().then(() => {
//   console.log("Mensaje enviado");
// });

export default async function handleSuccess(req, res) {
  if (req.method !== "POST") {
    return res.status(400).send({ message: "Not found" });
  }
  // console.log(req.body)

  const contante = await company.update({
    where: {
      email: req.body.email,
    },
    data: {
      plan: req.body.planType,
    },
  });
  // console.log(req.body.email)
  // console.log(req.body.planType) //---> encriptacion 
  try{
    await transporter.sendMail({
      from: '"Lazy Buy" <lazybuy03@gmail.com>', // sender address
      to: req.body.email, // list of receivers
      subject: "Subcription payment ", // Subject line
      html: `
      <html>
  <head>
    <style>
      /* Crear una clase para la card */
      .card {
        /* Añadir sombra de caja */
        box-shadow: 0px 0px 10px #ccc;
        /* Añadir estilos adicionales */
        padding: 20px;
        background-color: #fff;
        width: 400px;
        margin: 0 auto;
        text-align: center;
      }
  
      /* Crear una clase para el título */
      .card-title {
        /* Añadir estilos adicionales */
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1 class="card-title">Successful Payment</h1>
      <p>Plan: ${req.body.planType}</p>
      <p>Thank you for choosing Lazy Buy! Your subscription has been received and processed successfully. You can now enjoy the exclusive benefits of having a subscription, such as expanding the limit of products published on our platform. We hope to continue providing you with an excellent shopping experience. Thank you again for choosing Lazy Buy!</p>
    </div>
  </body>
  </html>`, // plain text body
    });
  }catch(e){
    console.log(e)
  }

  return res.status(200).json(contante);
}
