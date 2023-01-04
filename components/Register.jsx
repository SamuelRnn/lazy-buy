import Link from "next/link"

const Register = ({ registerArray, isActive }) => {
  //se le pasa un array de strings al componente
  return (
    <div 
      style={{height: isActive ? "32px" : 0}} 
      className="overflow-y-hidden transition-all bg-fondo-400 h-8 flex justify-evenly text-neutral-200 text-sm items-center"
    >
      {
        registerArray.map(reg => (
          <Link 
            key={reg}
            href={`/${reg.split(" ").join('').toLowerCase()}`}
            className="hover:bg-fondo-200 transition h-full px-2 flex items-center"
          >{reg}</Link>
        ))
      }
    </div>
  )
}
export default Register