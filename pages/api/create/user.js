import { user } from "../../../prisma";
import bcrypt from "bcryptjs";
import cloud from "../../../utils/cloudinary";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "lazybuy02@gmail.com",
    pass: "yctqpuqbiutnfebc",
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


  try {
    await transporter.sendMail({
      from: '"Lazy Buy" <lazybuy02@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "User register", // Subject line
      html: `<h3>Registration Completed<h3> 
      <h6>Information: <h6/> 
      <p>UserName: ${userName}</p>
      <p>Email: ${email}</p>
      <p>Welcome to Lazy Buy! We are excited to have you as a part of our lazy shoppers community. You can now enjoy a comfortable and effortless shopping experience on our platform. Take advantage of our exclusive deals and promotions to make your purchases in style! If you have any questions or need help, don't hesitate to reach out to our customer service team. Thank you for choosing Lazy Buy!</p>
      `, // plain text body
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
