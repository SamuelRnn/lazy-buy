import AnimatedLogo from "../components/Elements/AnimatedLogo";
import Layout from "../components/MainLayout";
import WaitingAuthModal from "../components/Elements_AuthLoader/AuthLoaderModal";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { signIn, getSession } from "next-auth/react";
import { ErrorMessage, Formik } from "formik";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import simulateDelay from "../utils/simulateDelay";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
//-----------------------------------------

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export default function Loading() {
  const router = useRouter();
  const [loginIsProccesing, triggerLogin] = useState(false);
  const [passwordIsVisible, setPasswordVisibility] = useState(false);
  const { session: sessionQuery } = router.query;
  useEffect(() => {
    if (sessionQuery === "signed-out") toast("Hope we can see you again soon!");
  }, [sessionQuery]);

  const googleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/",
    });
  };

  const validateLogin = (valores) => {
    let errors = {};
    if (!valores.email) errors.email = "Please enter an email";
    else if (!EMAIL_REGEX.test(valores.email)) {
      errors.email = "A valid email is required";
    }
    if (!valores.password) errors.password = "Please enter a password";
    return errors;
  };

  const submitForm = async (formValues, { resetForm }) => {
    resetForm();
    triggerLogin(true);

    const sessionStatus = await signIn("credentials", {
      ...formValues,
      redirect: false,
    });

    await simulateDelay(2);

    triggerLogin(false);
    if (!sessionStatus.ok) {
      toast.error(sessionStatus.error, {
        duration: 4000,
        position: "bottom-center",
      });
    } else if (sessionStatus.ok) {
      //get type
      const { user } = await getSession();

      //----------------
      toast.success("Logged in :D", {
        position: "bottom-center",
      });
      setTimeout(() => router.push("/"), 2000);
    }
  };
  return (
    <Layout noLayout={true} title="Lazy Buy | LogIn">
           <Link
                className="fixed top-0 right-2 lg:right-3 z-10"
                href="/"
              >
                <p className="bg-fondo-100 w-[115px] hover:bg-slate-800 hover:text-zinc-100 mt-2 ml-2 p-2 text-center rounded text-white transition-all font-semibold hidden lg:block">
                  Back to store
                </p>
                <HiArrowLeftOnRectangle className=" bg-fondo-100 hover:bg-slate-800 hover:text-zinc-100 mt-2 ml-2 p-2 text-center rounded text-white transition-all font-semibold text-4xl lg:hidden" />
              </Link>
      <div className="bg-fondo-50 grid grid-cols-1 lg:grid-cols-2 min-h-screen overflow-hidden relative">
        {/* waiting auth */}
        <WaitingAuthModal loadingToggle={loginIsProccesing} />
        <div className="bg-white overflow-hidden sm:mx-16 min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white h-screen flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto bg-white"
          >
            <div className="flex flex-col gap-1 w-full">
              <h1 className="text-4xl font-medium text-fondo-200">Login</h1>
              <p className="text-slate-500 ">
                Welcome again! Sign in with your credentials
              </p>
            </div>

            <Formik
              initialValues={{ email: "", password: "" }}
              validate={validateLogin}
              onSubmit={submitForm}
            >
              {({
                errors,
                values,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form
                  className="flex flex-col gap-y-4 w-full"
                  onSubmit={handleSubmit}
                >
                  {/* Email */}
                  <div>
                    <div className="flex items-baseline">
                      <label htmlFor="email" className="text-zinc-600">
                        Email*
                      </label>
                      {touched.email && errors.email && (
                        <div className="text-red-600 pl-5 text-sm">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <input
                      type="email"
                      id="email"
                      autoComplete="off"
                      className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-fondo-400 text-zinc-600 transition-colors"
                      placeholder="lazy@buy.dev"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {/* Password */}
                  <div>
                    <div className="flex items-baseline">
                      <label htmlFor="password" className="text-zinc-600">
                        Password*
                      </label>
                      {touched.password && errors.password && (
                        <div className="text-red-600 pl-5 text-sm">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center">
                      <input
                        type={passwordIsVisible ? "text" : "password"}
                        id="password"
                        autoComplete="off"
                        className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-fondo-400 text-zinc-600 transition-colors"
                        placeholder="lazybuyisawesome#1"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <button
                        type="button"
                        className="text-2xl text-fondo-200 ml-[-36px] grid place-content-center mt-2 disabled:text-zinc-200"
                        disabled={!values.password}
                        onClick={() => setPasswordVisibility((state) => !state)}
                      >
                        {passwordIsVisible ? (
                          <BsFillEyeSlashFill />
                        ) : (
                          <BsFillEyeFill />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
                    <span className="text-gray-800 text-sm">
                      {"Don't have an account yet? "}
                      <Link
                        href="/signup"
                        className="text-fondo-500 hover:text-fondo-300 font-semibold  transition-colors"
                      >
                        Register
                      </Link>
                    </span>
                    <Link
                      href=""
                      onClick={() => toast.error("Something went wrong! D:")}
                      className="text-zinc-600 hover:text-fondo-300 transition-colors text-sm"
                    >
                      Forgot your password?
                    </Link>
                  </div>

                  <div className="w-full mt-4">
                    <div
                      onClick={googleLogin}
                      className="transition-colors flex items-center justify-center gap-2 p-2 px-4 rounded-full bg-zinc-800 hover:bg-zinc-500 cursor-pointer"
                    >
                      <FcGoogle size={22} />
                      <span className="ml-2">Sign in with Google</span>
                    </div>
                  </div>

                  <div className="mt-4 order-1 md:order-2">
                    <button
                      type="submit"
                      className="w-full font-semibold bg-fondo-300 p-2 rounded-full hover:bg-fondo-100 hover:rounded-full transition-colors"
                    >
                      Sign in
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
