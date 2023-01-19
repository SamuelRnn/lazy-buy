import React from "react";
import { useGetUserListQuery } from "../../redux/userApi";
import Image from "next/image";

const UserComponent = () => {
  const { data, isLoading } = useGetUserListQuery();
  console.log(data);

    const handleDelete = (emailUser) => {
        
    }

  return (
    <>
    <h2 className="text-lg font-bold text-slate-700">{data && data.length} Users</h2>
    <br />
    <div className="overflow-auto rounded-lg shadow md:block">
      <table className="w-full">
        <thead className="bg-gray-800 text-gray-500">
          <tr>
            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
              User
            </th>
            <th className="p-3 w-20 text-sm font-semibold tracking-wide text-left">
              Email
            </th>
            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
              Country
            </th>
            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
              City
            </th>
            <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left text-fondo-400">
              Danger
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data &&
            data.map((c) => (
              <tr key={c.email} className="bg-white ">
                <td className="p-3 text-sm text-gray-700 flex flex-row items-center justify-center gap-3 whitespace-nowrap">
                  <Image
                    alt="img"
                    width={30}
                    height={30}
                    className=" rounded-full scale-125"
                    src={c.profilePicture.url}
                  />
                  <h2>{c.userName}</h2>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {c.email}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {c.country || "---"}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {c.city || "---"}
                </td>
                <td className="p-3 text-sm text-white whitespace-nowrap bg-fondo-400 font-bold hover:cursor-pointer hover:bg-fondo-300"
                onClick={()=>handleDelete(c.email)}
                >
                  Delete
                </td>
              </tr>
            ))}

          {isLoading && <div>Loading...</div>}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default UserComponent;
