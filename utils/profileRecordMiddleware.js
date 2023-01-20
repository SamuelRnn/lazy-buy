import { getSession } from "next-auth/react";
import {user} from '../prisma'

export default async function profileMiddleware({ req }) {
  const session = await getSession({ req });
  // if user isn't is auth
  if (!session) return { redirect: { destination: "/", permanent: false } };

  let user_transaction = await user.findUnique({
    where: {email: session.user.email},
    include: {
        Transaction: {
            include:{
                product: true,
                company: true
            }
        },
    }
  });
  
  if (!user_transaction) return { redirect: { destination: "/", permanent: false } };
  
  return {
    props: { user: JSON.parse(JSON.stringify(user_transaction)) },
  };
}