import { useSession, getSession } from "next-auth/react";

const Products = ({ isActive }) => {
  const { data: session } = useSession();
  return (
    <div>
      {isActive.products ? (
        <div>
          <p className="text-gray-700 text-3xl mb-16 font-bold">
            {session.user.email}
          </p>

          <div className="grid lg:grid-cols-3 gap-5 mb-16">
            <div className="rounded bg-gray-900 h-40 shadow-sm"></div>
            <div className="rounded bg-gray-900 h-40 shadow-sm"></div>
            <div className="rounded bg-gray-900 h-40 shadow-sm"></div>
          </div>
          <div className="grid col-1 bg-gray-900 h-96 shadow-sm"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Products;
