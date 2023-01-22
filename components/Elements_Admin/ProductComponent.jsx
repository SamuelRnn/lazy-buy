import React from "react";
import Image from "next/image";
import { useDeleteProductMutation } from "../../redux/productsApi";
import { toast } from "react-hot-toast";

const ProductComponent = ({ data }) => {
  const [deleted] = useDeleteProductMutation();

  const strFake = (str) => {
    if (!(str.length > 60)) return str;
    return `${str.substring(0, 60)} ...`;
  };

  const handleDelete = async (id, name, company, isActive) => {
    if (!isActive) {
      toast.success(
        `you have unbanned the product ${name} of the ${company} company`
      );
    }
    //you have banned the product cos of the bravo company
    if (isActive) {
      toast.success(
        `you have banned the product ${name} of the ${company} company`
      );
    }
    await deleted(id);
  };

  return (
    <table className="w-full">
      <thead className="bg-gray-800 text-gray-500">
        <tr>
          <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
            Product
          </th>
          <th className="p-3 w-20 text-sm font-semibold tracking-wide text-left">
            Description
          </th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
            Stock
          </th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
            Category
          </th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
            Company
          </th>
          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
            Owner
          </th>
          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left text-fondo-400">
            Danger
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {data &&
          data.map((c) => (
            <tr key={c.id} className="bg-white">
              <td className="p-4 px-4 text-sm text-gray-700 flex flex-row items-center justify-start gap-3 whitespace-nowrap">
                <Image
                  alt="img"
                  width={30}
                  height={30}
                  className=" rounded-full scale-125"
                  src={c.mainImage.url}
                />
                {c.name}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {strFake(c.description)}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {c.price}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {c.category}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {c.company.name}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {c.company.owner}
              </td>
              <td
                className={`p-3 text-sm text-white rounded whitespace-nowrap bg-fondo-400 ${
                  !c.isActive
                    ? "bg-slate-400  hover:bg-slate-500"
                    : "bg-fondo-400 hover:bg-fondo-500"
                } font-bold hover:cursor-pointer `}
                onClick={() =>
                  handleDelete(c.id, c.name, c.company.name, c.isActive)
                }
              >
                {!c.isActive ? "Unban" : "Ban"}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ProductComponent;
