import React from "react";
import { useGetCompaniesQuery } from "../../redux/companyApi";

export const Companies = () => {
  const { isLoading, data } = useGetCompaniesQuery();

  return (
    <table className="w-full">
      <thead className="bg-gray-800 text-gray-500">
        <tr>
          <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
            Company
          </th>
          <th className="p-3 w-20 text-sm font-semibold tracking-wide text-left">
            Email
          </th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
            Owner
          </th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
            Country
          </th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
            City
          </th>
          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
            Plan
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
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {c.name}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {c.email}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {c.owner}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {c.country}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {c.city}
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {c.plan}
              </td>
              <td className="p-3 text-sm text-white whitespace-nowrap bg-fondo-400 font-bold hover:cursor-pointer">
                Delete
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
