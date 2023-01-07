const NavSubMenu = ({ sourceArray, isActive }) => {
  //se le pasa un object por "sourceArray" al componente
  return (
    <div
      style={{ height: isActive ? "40px" : 0 }}
      className="overflow-y-hidden transition-all bg-fondo-400 flex justify-evenly text-neutral-200 text-sm items-center"
    >
      {sourceArray.map(({ title, link }) => (
        <a
          key={title.toLowerCase()}
          href={link}
          className="hover:bg-fondo-300 transition h-full px-2 flex items-center"
        >
          {title}
        </a>
      ))}
    </div>
  );
};
export default NavSubMenu;
