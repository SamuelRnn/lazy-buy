import Layout from "../components/Layout";
import Banner from "../components/Elements/Banner";
import CardCarousel from "../components/Elements_Cards/CardCarousel";
import { getSession } from "next-auth/react";
import { user, company } from "../prisma";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSession } from "../redux/accountSlice";
import { toast } from "react-hot-toast";

export default function Home({ extendedSessionData, query }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSession(extendedSessionData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (query)
      toast.success("successful payment", {
        duration: 4000,
      });
    if (!query)
      toast.error("failed payment", {
        duration: 4000,
      });
  }, [query]);

  return (
    <Layout>
      {console.log(query)}
      <div className="py-12">
        <h1 className="main home_titles">New Products</h1>
        <CardCarousel />
        <div className="py-12">
          <Banner />
        </div>
        <h1 className="main home_titles">The best rated</h1>
        <CardCarousel />
        <br />
        <hr className="main my-4 text-zinc-300" />
        <br />
        <h1 className="main home_titles">Recommended by us</h1>
        <CardCarousel />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, query }) {
  const session = await getSession({ req });
  let extendedSessionData = "no-session";
  if (session) {
    const found_user = await user.findUnique({
      where: { email: session.user.email },
    });
    const found_company = await company.findUnique({
      where: { email: session.user.email },
    });
    extendedSessionData = { ...session.user };

    if (found_company) {
      extendedSessionData.type = "company";
    }
    if (found_user) {
      extendedSessionData.type = "user";
    }
  }

  return {
    props: {
      extendedSessionData,
      query: query.success ? true : query.cancel ? false : null,
    },
  };
}
