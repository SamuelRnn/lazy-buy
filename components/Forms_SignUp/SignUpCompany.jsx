import AnimatedLogo from "../Elements/AnimatedLogo";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import { registerValidateCompany } from "../../utils/validateFormCompany";
import { useRouter } from "next/router";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

const SignUpCompany = ({ typeAccount, setTypeAccount }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      owner: "",
      country: "",
      city: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidateCompany,
    onSubmit,
  });

  const router = useRouter();

  async function onSubmit(values) {
    values.plan = "Basic";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    await fetch("/api/create/company", options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push("/login");
      })
      .catch((error) => console.log(error));
  }

  const handleClick = () => {
    !typeAccount.company && setTypeAccount({ client: false, company: true });
    !typeAccount.client && setTypeAccount({ client: true, company: false });
    !typeAccount.active && setTypeAccount({ active: true });
  };

  return (
    <AnimatePresence>
      <div className="overflow-hidden">
      <Link className="absolute top-0 right-2 lg:left-0 z-10" href='/'>
                      <p className="bg-fondo-100 w-[115px] hover:bg-slate-800 hover:text-zinc-100 mt-2 ml-2 p-2 text-center rounded text-white transition-all font-semibold hidden lg:block">
                        Back to store
                      </p>
                      <HiArrowLeftOnRectangle className=" bg-fondo-100 hover:bg-slate-800 hover:text-zinc-100 mt-2 ml-2 p-2 text-center rounded text-white transition-all font-semibold text-4xl lg:hidden"/>
                    </Link>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <section className="bg-gradient-to-t to-zinc-100 from-fondo-200">
            <div className="flex justify-center min-h-screen">
              <div className="hidden lg:flex lg:w-2/4 justify-center items-center p-">
                <AnimatedLogo />
              </div>

              <div
                className="flex items-center w-full max-w-3xl mx-auto lg:px-2 lg:w-3/5 bg-white"
                id="signup_div"
              >
                <div className="w-fullbg-gradient-to-t to-zinc-400 from-fondo-200 p-5">
                  <h1 className="text-2xl font-bold tracking-wider text-zinc-700 capitalize">
                    Become a lazy-seller and grow your business
                  </h1>

                  <p className="mt-4 text-zinc-500 font-bold">
                    Let’s get you all set up so you can verify your personal
                    account and begin setting up your profile.
                  </p>

                  <div className="mt-6">
                    <h1 className="text-zinc-700 font-bold">
                      Select type of account
                    </h1>
                    {/* login type buttons */}
                    <div className="mt-3 md:flex md:items-center md:-mx-2">
                      <button
                        disabled={typeAccount.company ? true : null}
                        className="border mt-1 flex justify-center w-full px-6 py-3 text-zinc-100 font-bold border-zinc-500 bg-zinc-500 rounded-md md:w-auto md:mx-2"
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
                        className="mt-1 flex justify-center w-full px-6 py-3 text-zinc-100 font-bold bg-fondo-200 hover:border-zinc-500 hover:text-fondo-200 transition-all hover:bg-white border border-fondo-200 rounded-md md:w-auto md:mx-2 focus:outline-none"
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

                  {/* Form controlado */}
                  <form
                    className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2"
                    // onSubmit={handleSignUp}
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="col-span-2">
                      <label className="block mb-2 text-sm text-gray-800">
                        Company Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Apple Inc."
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-zinc-500 rounded-lg focus:outline-none col-span-3"
                        {...formik.getFieldProps("name")}
                      />
                      {formik.errors.name && formik.touched.name ? (
                        <div className="text-red-600 mt-2 pl-2">
                          {formik.errors.name}
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
                        placeholder="stevejobs@gmail.com"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-zinc-500 rounded-lg focus:outline-none"
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
                        Owner
                      </label>
                      <input
                        name="owner"
                        type="text"
                        placeholder="Steve Jobs"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-zinc-500 rounded-lg focus:outline-none"
                        {...formik.getFieldProps("owner")}
                      />
                      {formik.errors.owner && formik.touched.owner ? (
                        <div className="text-red-600 mt-2 pl-2">
                          {formik.errors.owner}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block mb-2 text-sm text-gray-800">
                        Country
                      </label>
                      <input
                        name="country"
                        type="text"
                        placeholder="United States"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-zinc-500 rounded-lg focus:outline-none"
                        {...formik.getFieldProps("country")}
                      />
                      {formik.errors.country && formik.touched.country ? (
                        <div className="text-red-600 mt-2 pl-2">
                          {formik.errors.country}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block mb-2 text-sm text-gray-800">
                        City
                      </label>
                      <input
                        name="city"
                        type="text"
                        placeholder="Palo Alto"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-zinc-500 rounded-lg focus:outline-none"
                        {...formik.getFieldProps("city")}
                      />
                      {formik.errors.city && formik.touched.city ? (
                        <div className="text-red-600 mt-2 pl-2">
                          {formik.errors.city}
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
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-zinc-500 rounded-lg focus:outline-none"
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
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-zinc-500 rounded-lg focus:outline-none"
                        {...formik.getFieldProps("cpassword")}
                      />
                      {formik.errors.cpassword && formik.touched.cpassword ? (
                        <div className="text-red-600 mt-2 pl-2">
                          {formik.errors.cpassword}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    {/* <button
                      className="hover:text-black hover:bg-white text-white font-semibold flex rounded-xl border-2 p-3 border-black items-center justify-center w-full gap-4 ease-in-out transition-all bg-black"
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
                      className="hover:text-zinc-700 hover:bg-zinc-300 hover:border-zinc-300 text-zinc-100 font-semibold flex rounded-xl border-2 p-3 border-zinc-500 items-center justify-center gap-4 ease-in-out transition-all bg-zinc-500 col-span-2"
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
                      className="hover:text-zinc-700 mt-3 hover:bg-zinc-300 hover:border-zinc-300 text-zinc-100 font-semibold flex rounded-xl border-2 py-3 border-zinc-500 items-center justify-center gap-4ease-in-out transition-all bg-zinc-500"
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
  );
};

export default SignUpCompany;
