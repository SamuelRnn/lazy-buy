// Icons
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const Header = ({ user, headerTitle }) => {
  return (
    <div>
      <header className="flex flex-col md:flex-row items-center justify-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-fondo-100">
          {headerTitle}
          {/* Welcome{" "}
          <span className="text-primary-100">{user && user.userName}</span> */}
        </h1>
      </header>
    </div>
  );
};
