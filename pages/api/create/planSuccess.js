import { company } from "../../../prisma";
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
  // console.log(req.body.planType)
  await transporter.sendMail({
    from: '"Lazy Buy" <lazybuy23.gmail.com>', // sender address
    to: req.body.email, // list of receivers
    subject: "Subcription payment ", // Subject line
    html: ` <h3>Subscription Payment Successful!</h3> <br/> <h4>Subscription:</h4>   ${req.body.planType} 
    <br/> <p>
    Thank you for choosing Lazy Buy! Your subscription has been received and processed successfully. You can now enjoy the exclusive benefits of having a subscription, such as expanding the limit of products published on our platform. We hope to continue providing you with an excellent shopping experience. Thank you again for choosing Lazy Buy!
    </p>`, // plain text body
  });

  return res.status(200).json(contante);
}
