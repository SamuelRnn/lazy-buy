import Profile from '.'
import UserProfile from '../../components/Profile/UserProfile'
import { useGetTransactionQuery } from '../../redux/userTransaction'
import { useState } from 'react'
import Image from 'next/image'
import { MdInventory } from "react-icons/md";

const Record = ({ user }) => {

  const [transactions, setTransactions] = useState(user.Transaction)

  const products = transactions.map((item) => {
    return <div key={item.id} className="relative bg-zinc-50 rounded-lg w-[250px] sm:w-[320px] md:w-[500px] shadow-md shadow-zinc-400">
    <div
      className="relative bg-zinc-50 rounded-lg w-[250px] sm:w-[320px] md:w-[500px] shadow-md shadow-zinc-400 "
    >
      <div className="px-3 py-2  text-fondo-200">
        <h2 className=" overflow-hidden whitespace-nowrap text-ellipsis font-bold w-3/4">
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
      {/* <p>{item.product.category}</p>
        <p>{item.product.description}</p> */}
      <div className="bg-fondo-100 py-2 px-5 text-zinc-100 text-sm rounded-b-lg">
      <p className="flex font-bold">
      <MdInventory className="mr-1 mt-[3px]" />
        {item.product.price}
        </p>
        <p>{item.product.category}</p>
        {/* <p>{item.product.description}</p>  */}
      </div>
    </div>
    </div>
  })
  console.log(transactions)
  return (
    <UserProfile user={user} title="Record">
      {/* {transactions.map((transaction, i) => (
        <div key={i}>
        </div>
      ))} */}
      <div className="grid gap-6 place-items-center grid-cols-2">{products}</div>
    </UserProfile>
  )
}
export default Record

export async function getServerSideProps(context) {
  return await profileRecordMiddleware(context)
}
