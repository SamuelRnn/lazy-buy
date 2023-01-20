import Layout from "../components/MainLayout";
import Banner from "../components/Elements/Banner";
import CardCarousel from "../components/Elements_Cards/CardCarousel";
import { getSession } from "next-auth/react";
import { user, company, product } from "../prisma";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSession } from "../redux/accountSlice";
import { toast } from "react-hot-toast";

export default function Home({
  extendedSessionData,
  newProducts,
  bestRatedProducts,
  recommendedProducts,
  query,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSession(extendedSessionData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (query === true)
      toast.success("successful payment", {
        duration: 4000,
      });
    if (!query && query !== "null")
      toast.error("failed payment", {
        duration: 4000,
      });
  }, [query]);

  return (
    <Layout>
      <div className="py-12">
        <h1 className="main home_titles">New Products</h1>
        <CardCarousel productArray={newProducts} />
        <div className="py-12">
          <Banner />
        </div>
        <h1 className="main home_titles">The best rated</h1>
        <CardCarousel productArray={bestRatedProducts} />
        <br />
        <hr className="main my-4 text-zinc-300" />
        <br />
        <h1 className="main home_titles">Recommended by us</h1>
        <CardCarousel productArray={recommendedProducts} />
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
      extendedSessionData.image = found_company.profilePicture.url;
      extendedSessionData.isAdmin = false;
    }
    if (found_user) {
      extendedSessionData.type = "user";
      extendedSessionData.isAdmin = found_user.isAdmin;
      extendedSessionData.image = found_user.profilePicture.url;
    }
  }
  let newProducts = await product.findMany({
    where: {
      isActive: true,
      isVisible: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 14,
    include: {
      company: {
        select: {
          name: true,
        },
      },
    },
  });
  newProducts = newProducts.map((p) => {
    p.createdAt = toString(p.createdAt);
    p.updatedAt = toString(p.updatedAt);
    return p;
  });
  let bestRatedProducts = await product.findMany({
    where: {
      isActive: true,
      isVisible: true,
    },
    orderBy: {
      averageRating: "desc",
    },
    take: 14,
    include: {
      company: {
        select: {
          name: true,
        },
      },
    },
  });
  bestRatedProducts = bestRatedProducts.map((p) => {
    p.createdAt = toString(p.createdAt);
    p.updatedAt = toString(p.updatedAt);
    return p;
  });
  let recommendedProducts = await product.findMany({
    //takes by priority order || TODO: add priority connection
    where: {
      isActive: true,
      isVisible: true,
    },
    // orderBy: {
    //   averageRating: "desc",
    // },
    take: 14,
    include: {
      company: {
        select: {
          name: true,
        },
      },
    },
  });
  recommendedProducts = recommendedProducts.map((p) => {
    p.createdAt = toString(p.createdAt);
    p.updatedAt = toString(p.updatedAt);
    return p;
  });
  return {
    props: {
      extendedSessionData,
      newProducts,
      bestRatedProducts,
      recommendedProducts,
      query: query.success ? true : query.cancel ? false : "null",
    },
  };
}
