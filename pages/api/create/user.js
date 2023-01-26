import { user } from "../../../prisma";
import bcrypt from "bcryptjs";
import cloud from "../../../utils/cloudinary";
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

export default async function createUser(req, res) {
  if (req.method !== "POST")
    return res.status(400).send({ message: "Not found" });
  req.body.fullName = `${req.body.firstname} ${req.body.lastname}`;
  const {
    isAdmin,
    fullName,
    userName,
    password,
    email,
    profilePicture,
    city,
    country,
  } = req.body;
  delete req.body.cpassword;
  delete req.body.lastname;
  delete req.body.firstname;
  delete req.body["password"];

  if (!fullName || !email || !password)
    return res.status(400).send({ message: "Not enough data" });

  const passwordHashed = await bcrypt.hash(password, 8);

  let jsonProfilePicture;
  let upToCloud;

  if (profilePicture) {
    upToCloud = await cloud.uploader.upload(profilePicture, {
      folder: "userProfilePictures",
    });

    jsonProfilePicture = {
      public_id: upToCloud.public_id,
      url: upToCloud.secure_url,
    };
  } else {
    jsonProfilePicture = {
      public_id: "lazy-buy/Diseño_sin_título_r4admw",
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673480864/lazy-buy/Dise%C3%B1o_sin_t%C3%ADtulo_r4admw.png",
    };
  }

  await user.create({
    data: {
      ...req.body,
      profilePicture: jsonProfilePicture,
      access: {
        create: {
          password: passwordHashed,
        },
      },
    },
  });
  // {console.log(email)}
  try {
    await transporter.sendMail({
      from: '"Lazy Buy" <lazybuy03@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "User register", // Subject line
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
      <p>${userName}</p>
      <p>${email}</p>
      <img class="card-img" src="https://res.cloudinary.com/dl5hwebwa/image/upload/v1673480864/lazy-buy/Dise%C3%B1o_sin_t%C3%ADtulo_r4admw.png" alt="image">
      <p>Welcome to Lazy Buy! We are excited to have you as a part of our lazy shoppers community. You can now enjoy a comfortable and effortless shopping experience on our platform. Take advantage of our exclusive deals and promotions to make your purchases in style! If you have any questions or need help, don't hesitate to reach out to our customer service team. Thank you for choosing Lazy Buy!</p>
    </div>
  </body>
  </html>`, // plain text body
    });
  } catch (e) {
    console.log(e);
  }

  return res.status(200).json({
    ...req.body,
    password: passwordHashed,
    profilePicture: jsonProfilePicture,
  });
}
