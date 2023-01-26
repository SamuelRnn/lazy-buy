import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { company, user } from "../../../prisma";
import { compare } from "bcryptjs";
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



export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const ERROR_MESSAGE =
          "Login failed, your email or password are incorrect, verify them before continue";
        const AUTH_BAN_MESSAGE =
          "There was an error while requesting your credentials, contact support";

        const got_company = await company.findUnique({
          where: { email: credentials.email },
          include: { access: true },
        });

        const gotUser = await user.findUnique({
          where: { email: credentials.email },
          include: { access: true },
        });

        if (!got_company && !gotUser) throw new Error(ERROR_MESSAGE);

        if (got_company) {
          if (got_company.isBanned) throw new Error(AUTH_BAN_MESSAGE);
          const checkedPassword = await compare(
            credentials.password,
            got_company.access.password
          );
          if (!checkedPassword) throw new Error(ERROR_MESSAGE);
          return {
            type: "company",
            name: got_company.owner,
            email: got_company.email,
            image: got_company.profilePicture.url,
          };
        }

        if (gotUser) {
          if (gotUser.isBanned) throw new Error(AUTH_BAN_MESSAGE);
          const checkedPassword = await compare(
            credentials.password,
            gotUser.access.password
          );
          if (!checkedPassword) throw new Error(ERROR_MESSAGE);
          return {
            type: "user",
            name: gotUser.userName,
            email: gotUser.email,
            image: gotUser.profilePicture.coso,
          };
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user: userData, account }) {
      if (account.provider === "google") {
        const found = await user.findUnique({
          where: { email: userData.email },
        });
        //return if accout exist
        if (found) return true;
        //upload to cloudinary
        const upToCloud = await cloud.uploader.upload(userData.image, {
          folder: "userProfilePictures",
        });
        const jsonProfilePicture = {
          public_id: upToCloud.public_id,
          url: upToCloud.secure_url,
        };
        await user.create({
          data: {
            email: userData.email,
            profilePicture: jsonProfilePicture,
            userName: userData.name,
          },
        });
        // console.log(userData.email);
        // console.log(userData.name);
        // console.log(jsonProfilePicture.url);

        try {
          await transporter.sendMail({
            from: '"Lazy Buy" <lazybuy03@gmail.com>', // sender address
            to: userData.email, // list of receivers
            subject: "Company Register", // Subject line
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
      <h1 class="card-title">Google Registration Successful</h1>
      <p>Information: </p>
      <p>Name: ${userData.name}</p>
      <p>Email: ${userData.email}</p>
      <img class="card-img" src="${jsonProfilePicture.url}" alt="image">
      <p>Welcome to Lazy Buy! Thank you for registering with your Google account. You can now enjoy a faster and safer shopping experience. Start browsing and find the best products at the best price! We're excited to have you as part of our community!</p>
    </div>
  </body>
  </html>`, // plain text body
          });
        } catch (e) {
          console.log(e);
        }
      }

      return true;
    },
  },
};

export default NextAuth(authOptions);
