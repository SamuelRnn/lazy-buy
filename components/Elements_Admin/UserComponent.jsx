import React from "react";
import {
  useDeleteUserMutation,
  useGetUserListQuery,
} from "../../redux/userApi";
import Image from "next/image";
import { toast } from "react-hot-toast";

const UserComponent = ({data}) => {
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (emailUser, name, banned) => {
    if (banned) {
      toast.success(`You unban ${name} with email ${emailUser}`, {
        duration: 5000,
      });
    }
    if (!banned) {
      toast.error(`You banned ${name} with email ${emailUser}`, {
        duration: 5000,
      });
    }
    await deleteUser(emailUser);
  };
  const handleClick = (email, name, banned) => {
    handleDelete(email, name, banned);
  };

  return (
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
                {c.userName}
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
              <td
                className={`p-3 text-sm text-white rounded whitespace-nowrap bg-fondo-400 ${
                  c.isBanned
                    ? "bg-slate-400  hover:bg-slate-500"
                    : "bg-fondo-400 hover:bg-fondo-500"
                } font-bold hover:cursor-pointer `}
                onClick={() => handleClick(c.email, c.userName, c.isBanned)}
              >
                {c.isBanned ? "Unban" : "Ban"}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default UserComponent;
