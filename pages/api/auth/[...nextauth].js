import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { company, user } from "../../../prisma";
import { compare } from "bcryptjs";
import cloud from "../../../utils/cloudinary";

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
      }
      return true;
    },
  },
};

export default NextAuth(authOptions);
