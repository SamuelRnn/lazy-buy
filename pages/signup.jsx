import Link from "next/link";
import { useState } from "react";
import AnimatedLogo from "../components/Elements/AnimatedLogo";
import Layout from "../components/MainLayout";
import SignUpCompany from "../components/Forms_SignUp/SignUpCompany";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import { registerValidate } from "../utils/validateForm";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

const Signup = () => {
  const [typeAccount, setTypeAccount] = useState({
    client: true,
    company: false,
    active: false,
  });

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      userName: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    await fetch("/api/create/user", options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push("/login");
      })
      .catch((error) => console.log(error));
  }

  const handleClick = () => {
    !typeAccount.company && setTypeAccount({ client: false, company: true });
    !typeAccount.client && setTypeAccount({ client: true, company: false });
    // !typeAccount.active && setTypeAccount({active: true})
  };

  return (
    <Layout noLayout={true} title="Lazy Buy | SignUp">
      {!typeAccount.company ? (
        <AnimatePresence>
          <div className="relative overflow-x-hidden">
              <Link
                className="fixed top-0 right-2 lg:left-0 z-10"
                href="/"
              >
                <p className="bg-fondo-100 w-[115px] hover:bg-slate-800 hover:text-zinc-100 mt-2 ml-2 p-2 text-center rounded text-white transition-all font-semibold hidden lg:block">
                  Back to store
                </p>
                <HiArrowLeftOnRectangle className=" bg-fondo-100 hover:bg-slate-800 hover:text-zinc-100 mt-2 ml-2 p-2 text-center rounded text-white transition-all font-semibold text-4xl lg:hidden" />
              </Link>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <section className="bg-fondo-50 h-screen">
                <div className="flex justify-center">
                  <div className="hidden lg:flex lg:w-2/5 justify-center items-center">
                    <AnimatedLogo />
                  </div>

                  <div
                    className="flex items-center w-full max-w-3xl mx-auto lg:px-12 lg:w-3/5"
                    id="signup_div"
                  >
                    <div className="w-full bg-white p-5 min-h-screen">
                      <h1 className="text-2xl font-bold tracking-wider text-fondo-300 capitalize">
                        Get your free account now.
                      </h1>

                      <p className="mt-4 text-fondo-300 font-bold">
                        Let’s get you all set up so you can verify your personal
                        account and begin setting up your profile.
                      </p>

                      <div className="mt-6">
                        <h1 className="text-fondo-300 font-bold">
                          Select type of account
                        </h1>
                        {/* login type buttons */}
                        <div className="mt-3 md:flex md:items-center md:-mx-2">
                          <button
                            disabled={typeAccount.company ? true : null}
                            className="mt-1 flex justify-center w-full px-6 py-3 text-white font-bold bg-zinc-500 hover:bg-zinc-300 hover:text-zinc-500 hover:border-zinc-300 border border-zinc-500 transition-all rounded-lg md:w-auto md:mx-2 focus:outline-none"
                            onClick={handleClick}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>

                            <span className="mx-2">Company</span>
                          </button>

                          <button
                            disabled={typeAccount.client ? true : null}
                            className="mt-1 flex justify-center w-full px-6 py-3 text-white font-bold bg-fondo-200 border border-fondo-200 transition-all rounded-lg md:w-auto md:mx-2 focus:outline-none"
                            onClick={handleClick}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>

                            <span className="mx-2">Client</span>
                          </button>
                        </div>
                      </div>

                      {/* Formulario controlado */}
                      <form
                        className="grid grid-cols-2 gap-6 mt-6 md:grid-cols-2"
                        onSubmit={formik.handleSubmit}
                        // onBlur={formik.handleBlur}
                      >
                        <div className="col-span-2 sm:col-span-1">
                          <label className="block mb-2 text-sm text-gray-800">
                            First Name
                          </label>
                          <input
                            name="firstname"
                            type="text"
                            placeholder="John"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-lg focus:outline-none"
                            {...formik.getFieldProps("firstname")}
                            // onBlur={formik.handleBlur}
                          />
                          {formik.errors.firstname &&
                          formik.touched.firstname ? (
                            <div className="text-red-600 mt-2 pl-2">
                              {formik.errors.firstname}
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                          <label className="block mb-2 text-sm text-gray-800">
                            Last Name
                          </label>
                          <input
                            name="lastname"
                            type="text"
                            placeholder="Wick"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-lg focus:outline-none"
                            {...formik.getFieldProps("lastname")}
                          />
                          {formik.errors.lastname && formik.touched.lastname ? (
                            <div className="text-red-600 mt-2 pl-2">
                              {formik.errors.lastname}
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                          <label className="block mb-2 text-sm text-gray-800">
                            Email
                          </label>
                          <input
                            name="email"
                            type="email"
                            placeholder="jwick@missmypuppy.com"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-lg focus:outline-none"
                            {...formik.getFieldProps("email")}
                          />
                          {formik.errors.email && formik.touched.email ? (
                            <div className="text-red-600 mt-2 pl-2">
                              {formik.errors.email}
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                          <label className="block mb-2 text-sm text-gray-800">
                            User Name
                          </label>
                          <input
                            name="userName"
                            type="text"
                            placeholder="Lazy Wick"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-lg focus:outline-none"
                            {...formik.getFieldProps("userName")}
                          />
                          {formik.errors.userName && formik.touched.userName ? (
                            <div className="text-red-600 mt-2 pl-2">
                              {formik.errors.userName}
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                          <label className="block mb-2 text-sm text-gray-800">
                            Password
                          </label>
                          <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-lg focus:outline-none"
                            {...formik.getFieldProps("password")}
                          />
                          {formik.errors.password && formik.touched.password ? (
                            <div className="text-red-600 mt-2 pl-2">
                              {formik.errors.password}
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                          <label className="block mb-2 text-sm text-gray-800">
                            Confirm password
                          </label>
                          <input
                            type="password"
                            placeholder="Enter your password"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-lg focus:outline-none"
                            {...formik.getFieldProps("cpassword")}
                          />
                          {formik.errors.cpassword &&
                          formik.touched.cpassword ? (
                            <div className="text-red-600 mt-2 pl-2">
                              {formik.errors.cpassword}
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        {/* <button
                          className="hover:text-black hover:bg-white text-white font-semibold flex rounded-xl border-2 p-3 border-black items-center justify-center gap-4 ease-in-out transition-all bg-black"
                          type="submit"
                        >
                          <Image
                            width={20}
                            height={20}
                            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                            alt="Google"
                          />
                          Sign in with Google
                        </button> */}

                        <button
                          type="submit"
                          className="hover:text-fondo-300 hover:bg-fondo-50 text-white font-semibold flex rounded-xl border-2 p-3 border-fondo-200 items-center justify-center gap-4 ease-in-out transition-all bg-fondo-200 col-span-2"
                        >
                          <span>Sign Up </span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 rtl:-scale-x-100"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </form>

                      <div>
                        <Link
                          className="hover:text-fondo-300 mt-3 hover:bg-fondo-50 text-white font-semibold flex rounded-xl border-2 py-3 border-fondo-200 items-center justify-center gap-4ease-in-out transition-all bg-fondo-200"
                          href="./login"
                        >
                          Already have an account?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
        </AnimatePresence>
      ) : (
        <SignUpCompany
          typeAccount={typeAccount}
          setTypeAccount={setTypeAccount}
        />
      )}
    </Layout>
  );
};

export default Signup;
