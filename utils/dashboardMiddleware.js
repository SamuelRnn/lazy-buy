import { company } from "../prisma";
import { getSession } from "next-auth/react";

export default async function middleware({ req }) {
  const session = await getSession({ req });
  // if user isn't is auth
  if (!session) return { redirect: { destination: "/", permanent: false } };

  let got_company = await company.findUnique({
    where: { email: session.user.email },
    select: {
      email: true,
      name: true,
      profilePicture: true,
    },
  });
  if (!got_company) return { redirect: { destination: "/", permanent: false } };
  return {
    props: { company: got_company },
  };
}
