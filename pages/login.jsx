import Link from "next/link";
import Image from "next/image";
import AnimatedLogo from "../components/AnimatedLogo";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#ffffff] grid grid-cols-1 lg:grid-cols-2">
      <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
        <div className="flex flex-col gap-1 w-full">
          <h1 className="text-4xl font-medium text-fondo-200">
            Iniciar sesión
          </h1>
          <p className="text-fondo-400 ">
            Ingresa al sistema con tus credenciales
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="text-zinc-600">
              Correo electrónico *
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-fondo-400 text-black"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-zinc-600">
              Contraseña *
            </label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-fondo-400 text-black"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
            <span className="text-gray-800">
              ¿No tienes cuenta?{" "}
              <Link
                href="/signup"
                className="text-fondo-500 hover:text-fondo-300 font-semibold  transition-colors"
              >
                Registrate
              </Link>
            </span>
            <Link
              href="/#"
              className="text-zinc-600 hover:text-fondo-300 transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <div className="w-full mt-4">
            <button
              type="button"
              className="transition delay-125 ease-in-out w-full flex items-center justify-center gap-2 border p-2 px-4 rounded-full bg-black hover:bg-white hover:text-black"
            >
              <Image
                width={20}
                height={20}
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                alt="Google"
              />
              <span className="ml-2">Ingresar con Google</span>
            </button>
          </div>

          <div className="mt-4 order-1 md:order-2">
            <button
              type="submit"
              className="border w-full font-semibold bg-fondo-300 p-2 rounded-full hover:bg-white hover:rounded-full hover:border hover:text-fondo-300 transition-colors"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
      {/* AnimatedLogo */}
      <div className="hidden lg:flex items-center justify-center">
        <AnimatedLogo />
      </div>
    </div>
  );
}
