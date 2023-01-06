import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { company } from "../../../prisma";
import { compare } from "bcryptjs";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const got_company = await company.findUnique({
          where: { email: credentials.email },
          include: { access: true },
        });

        if (!got_company) throw new Error("invalid email");

        const checkedPassword = await compare(
          credentials.password,
          got_company.access.password
        );
        if (!checkedPassword) throw new Error("invalid password");
        return {
          name: got_company.owner,
          email: got_company.email,
          image: got_company.profilePicture.coso,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUT_SECRET,
};

export default NextAuth(authOptions);
