import { company } from "../../../prisma";
import bcrypt from "bcryptjs";
import cloud from "../../../utils/cloudinary";
import nodemailer from "nodemailer";
//------------------------------------------
//TODO: foto no obligatoria en la creacion de la cuenta
//------------------------------------------

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

export default async function createCompany(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const companyData = req.body;
  if (
    !companyData.name ||
    !companyData.owner ||
    !companyData.email ||
    !companyData.password ||
    !companyData.city ||
    !companyData.country ||
    !companyData.plan
  ) {
    return res.status(400).json({
      message: "Datos incompletos, asegurese de llenar todos los campos",
    });
  }
  const hashedPassword = await bcrypt.hash(companyData.password, 8);
  companyData.password = hashedPassword;

  try {
    // const cloudUpload = await cloud.uploader.upload(
    //   companyData.profilePicture,
    //   { folder: "lazy-buy" }
    // );
    // companyData.profilePicture = {
    //   public_id: cloudUpload.public_id,
    //   url: cloudUpload.secure_url,
    // };
    companyData.profilePicture = {
      public_id: "lazy-buy/Diseño_sin_título_r4admw",
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673480864/lazy-buy/Dise%C3%B1o_sin_t%C3%ADtulo_r4admw.png",
    };
    const newCompany = await company.create({
      data: {
        name: companyData.name,
        owner: companyData.owner,
        email: companyData.email,
        city: companyData.city,
        country: companyData.country,
        profilePicture: companyData.profilePicture,
        plan: companyData.plan,
        access: {
          create: { password: companyData.password },
        },
      },
    });


    try{
      await transporter.sendMail({
        from: '"Lazy Buy" <lazybuy03@gmail.com>', // sender address
        to: companyData.email, // list of receivers
        subject: "Company register", // Subject line
        html:`
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
  
        /* Crear una clase para la imagen */
        .card-img {
          /* Añadir estilos adicionales */
          width: 200px;
          height: 200px;
          margin: 0 auto;
          margin-bottom: 20px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1 class="card-title">Registration Completed</h1>
        <p>${companyData.name}</p>
        <p>${companyData.email}</p>
        <img class="card-img" src="https://res.cloudinary.com/dl5hwebwa/image/upload/v1673480864/lazy-buy/Dise%C3%B1o_sin_t%C3%ADtulo_r4admw.png" alt="image">
        <p>Welcome to Lazy Buy Corporation! We are thrilled to have you on board as a valued member of our team. We are confident that your skills and expertise will help us continue to provide top-notch service to our customers. We believe that our company culture is the key to our success, and we strive to create a positive and productive work environment. We value communication and teamwork, and we are here to support you in any way we can. Thank you for joining us, we can't wait to see the great things you will achieve here at Lazy Buy Corporation</p>
      </div>
    </body>
    </html>`, // plain text body
      });
    }catch(e){
      console.log(e)
    }

    return res.status(200).json(newCompany);
  } catch (error) {
    console.log({ error, message: error.message });
    return res.status(500).json({ error });
  }
}
