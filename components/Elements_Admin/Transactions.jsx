import React from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";

export const Transactions = ({ transactions }) => {
  return (
    <table className="w-full">
      <thead className="bg-gray-800 text-gray-500">
        <tr>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
            Company
          </th>
          <th className="p-3 w-24 text-sm font-semibold tracking-wide text-left">
            User
          </th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
            Charge
          </th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
            Quantity
          </th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
            Date
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {transactions &&
          transactions.map((t) => (
            <tr key={t.id} className="bg-white">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <h3>{t.company.name}</h3>
              </td>

              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <h3>{t.user.userName}</h3>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <span className="text-fondo-400 font-bold">$</span>
                {t.product.price * t.productAmount}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {t.productAmount}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {JSON.stringify(new Date(t.createdAt).getFullYear())}/
                {parseInt(JSON.stringify(new Date(t.createdAt).getMonth()) + 1)}
                /{parseInt(JSON.stringify(new Date(t.createdAt).getDate())) + 1}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
