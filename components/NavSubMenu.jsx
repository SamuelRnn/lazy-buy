import Link from "next/link";

const NavSubMenu = ({ sourceArray, isActive }) => {
  //se le pasa un object por "sourceArray" al componente
  return (
    <div
      style={{ height: isActive ? "32px" : 0 }}
      className="overflow-y-hidden transition-all bg-fondo-400 h-8 flex justify-evenly text-neutral-200 text-sm items-center"
    >
      {sourceArray.map(({ title, link }) => (
        <Link
          key={title.toLowerCase()}
          href={link}
          className="hover:bg-fondo-200 transition h-full px-2 flex items-center"
        >
          {title}
        </Link>
      ))}
    </div>
  );
};
export default NavSubMenu;
