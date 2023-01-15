import { user } from "../prisma";
import { getSession } from "next-auth/react";

export default async function profileMiddleware({ req }) {
  const session = await getSession({ req });
  // if user isn't is auth
  if (!session) return { redirect: { destination: "/", permanent: false } };

  let got_user = await user.findUnique({
    where: { email: session.user.email },
    select: {
      email: true,
      userName: true,
      profilePicture: true,
    },
  });
  
  if (!got_user) return { redirect: { destination: "/", permanent: false } };
  
  return {
    props: { user: got_user },
  };
}