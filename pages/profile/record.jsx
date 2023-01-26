import Profile from ".";
// import profileMiddleware from "../../utils/profileMiddleware";
import profileRecordMiddleware from "../../utils/profileRecordMiddleware";
import UserProfile from "../../components/Profile/UserProfile";
// import { useGetTransactionQuery } from '../../redux/userTransaction'
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { MdInventory } from "react-icons/md";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Spinner from "../../components/Spinners/Spinner";
import Link from "next/link";

const Record = ({ user }) => {
  const [transactions, setTransactions] = useState(user.Transaction);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(transactions.length / cardsPerPage);

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const paginatedCards = transactions.slice(startIndex, endIndex);

  const products = paginatedCards.map((item) => {
    return (
      <motion.div
        key={item.id}
        whileHover={{ scale: 1.02 }}
        transition={{ bounce: false, duration: 0.3 }}
        initial={{ x: -200, y: 10, opacity: 0 }}
        whileInView={{ x: 2, opacity: 1 }}
        viewport={{ once: true }}
        className="relative bg-zinc-50 rounded-lg w-[160px] shadow-md shadow-zinc-400"
      >
        <div>
          <Link href={"/products/" + item.product.slug}>
            <div className="px-3 py-2  text-fondo-200">
              <h2 className=" overflow-hidden whitespace-nowrap text-ellipsis font-bold w-full hover:text-fondo-500">
                {item.product.name}
              </h2>
            </div>
            <div>
              <Image
                alt={item.product.name}
                title={item.product.name}
                src={item.product.mainImage.url}
                width={320}
                height={100}
                className="w-[160px] h-[160px] object-cover"
              />
            </div>
          </Link>
          {/* <p>{item.product.category}</p>
        <p>{item.product.description}</p> */}
          <div className="bg-zinc-600 py-2 px-6 text-zinc-100 text-sm rounded-b-lg">
            <p className="flex font-bold">
              <MdInventory className="mr-1 mt-[3px]" />
              {item.product.price}
            </p>
            <p>{item.product.category}</p>
            {/* <p>{item.product.description}</p>  */}
          </div>
        </div>
      </motion.div>
    );
  });

  // {
  //   console.log('Estos son los products', products)
  // }
  // console.log(transactions)
  return (
    <UserProfile user={user} headerTitle="Your last purchases!">
      {/* {console.log(products)} */}
      {products.length > 0 ? (
        <>
          <div>
            <div className="grid-container p-10 w-full">{products}</div>
          </div>

          <div className="text-center d-flex justify-content-between">
            <div>
              <button
                className="mx-auto my-2 border rounded-lg bg-fondo-100 hover:bg-fondo-200 "
                onClick={handlePrevClick}
                disabled={currentPage === 1}
              >
                <HiChevronLeft className="" />
              </button>
              <button
                className="mx-auto my-2 border rounded-lg bg-fondo-100 hover:bg-fondo-200"
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
              >
                <HiChevronRight />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center mt-20 ">
          <Spinner />
        </div>
      )}
    </UserProfile>
  );
};
export default Record;

export async function getServerSideProps(context) {
  return await profileRecordMiddleware(context);
}
