import Link from "next/link";
import Image from "next/image";
import AnimatedLogo from "../components/AnimatedLogo";
import Layout from "../components/layout";
import { signIn } from "next-auth/react";
import { ErrorMessage, Formik } from "formik";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

// const callbackUrl = process.env.BASE_URL || 'http://localhost:3000'

export default function Loading() {
  // async function googleSignin() {
  //   await signIn('google', { callbackUrl })
  const router = useRouter();
  // async function handleGoogleSignin(e) {
  //   e.preventDefault();
  //   signIn("google", { callbackUrl: "/dashboard" });
  // }
  async function handleLogin(event) {
    event.preventDefault();
    const email = event.currentTarget[0].value;
    const password = event.currentTarget[1].value;
    console.log(email, password);
    const status = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/dashboard",
    });
    if (status.ok) router.push(status.url);
  }
  return (
    <Layout noLayout={true} title="Lazy Buy | LogIn">
      <div className="min-h-screen bg-fondo-50 grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-white overflow-hidden mx-16">
        <motion.div
        initial={{opacity: 0, y: -500, scale: 1}}
        animate={{opacity: 1, y: 0, scale: 1}}
        transition={{}}
        className="text-white h-screen flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto bg-white">
          <div className="flex flex-col gap-1 w-full">
            <h1 className="text-4xl font-medium text-fondo-200">
              Iniciar sesión
            </h1>
            <p className="text-fondo-400 ">
              Ingresa al sistema con tus credenciales
            </p>
          </div>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={(valores) => {
              let errors = {};
              // Validate email
              if (!valores.email) {
                errors.email = "Por favor ingresa un email";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.email
                )
              ) {
                errors.email = "Se requiere un mail valido";
              }

              if (!valores.password) {
                errors.password = "Por favor ingresa un password";
              }
              return errors;
            }}
            onSubmit={(valores, { resetForm }) => {
              resetForm();
              console.log(valores);
            }}
          >
            {({
              errors,
              values,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => (
              <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                {/* Email */}
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
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <div className="text-red-600 mt-2 pl-5">{errors.email}</div>
                  )}
                </div>
                {/* Contraseña */}
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
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password && (
                    <div className="text-red-600 mt-2 pl-5">
                      {errors.password}
                    </div>
                  )}
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
                    //  onClick={googleSignin}
                    type="submit"
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
            )}
          </Formik>
        </motion.div>
      </div>

        {/* AnimatedLogo */}
        <div className="hidden lg:flex items-center justify-center">
          <AnimatedLogo />
        </div>
      </div>
    </Layout>
  );
}
