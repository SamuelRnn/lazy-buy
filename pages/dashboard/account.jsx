import DashboardLayout from "../../components/Dashboard/Layout";
import { getSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { registerValidate } from "../../utils/validateForm";
import Image from "next/image";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";

const Account = ({ company }) => {
  const [edit, setEdit] = useState(false);

  return (
    <DashboardLayout>
      <AnimatePresence>
        <div className="overflow-hidden -z-50">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <section className="">
              <div className="flex justify-center">
                <div
                  className="flex items-center w-full max-w-3xl  mx-auto lg:px-12 lg:w-3/5"
                  id="signup_div"
                >
                  <div className="w-full bg-white p-5">
                    <h1 className="text-3xl font-bold tracking-wider text-fondo-300 capitalize text-center">
                      Company Information
                    </h1>

                    {/* Formulario controlado */}
                    <form
                      className="grid grid-cols-2 gap-6 mt-6 md:grid-cols-2"
                      onSubmit=""
                      // onBlur={formik.handleBlur}
                    >
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block mb-2 text-sm text-gray-800">
                          Company Name
                        </label>
                        <input
                          name="companyname"
                          type="text"
                          placeholder={company.name}
                          className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-lg focus:outline-none ${
                            edit ? "cursor-text" : "cursor-not-allowed"
                          }`}
                          disabled={edit ? false : true}
                          /* {...formik.getFieldProps("firstname")} */
                          // onBlur={formik.handleBlur}
                        />
                        {/* {formik.errors.firstname && formik.touched.firstname ? (
                          <div className="text-red-600 mt-2 pl-2">
                            {formik.errors.firstname}
                          </div>
                        ) : (
                          <></>
                        )} */}
                      </div>

                      <div className="col-span-2 sm:col-span-1">
                        <label className="block mb-2 text-sm text-gray-800">
                          Owner
                        </label>
                        <input
                          name="owner"
                          type="text"
                          placeholder={company.owner}
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-lg focus:outline-none"
                          disabled={edit ? false : true}
                          /* {...formik.getFieldProps("lastname")} */
                        />
                        {/* {formik.errors.lastname && formik.touched.lastname ? (
                          <div className="text-red-600 mt-2 pl-2">
                            {formik.errors.lastname}
                          </div>
                        ) : (
                          <></>
                        )} */}
                      </div>

                      <div className="col-span-2 sm:col-span-1">
                        <label className="block mb-2 text-sm text-gray-800">
                          Country
                        </label>
                        <input
                          name="country"
                          type="text"
                          placeholder={company.country}
                          className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-lg focus:outline-none ${
                            edit ? "cursor-text" : "cursor-not-allowed"
                          }`}
                          disabled={edit ? false : true}
                          /* {...formik.getFieldProps("lastname")} */
                        />
                        {/* {formik.errors.lastname && formik.touched.lastname ? (
                          <div className="text-red-600 mt-2 pl-2">
                            {formik.errors.lastname}
                          </div>
                        ) : (
                          <></>
                        )} */}
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block mb-2 text-sm text-gray-800">
                          City
                        </label>
                        <input
                          name="city"
                          type="text"
                          placeholder={company.city}
                          className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-lg focus:outline-none ${
                            edit ? "cursor-text" : "cursor-not-allowed"
                          }`}
                          disabled={edit ? false : true}
                          /* {...formik.getFieldProps("lastname")} */
                        />
                        {/* {formik.errors.lastname && formik.touched.lastname ? (
                          <div className="text-red-600 mt-2 pl-2">
                            {formik.errors.lastname}
                          </div>
                        ) : (
                          <></>
                        )} */}
                      </div>
                      <div className="col-span-2">
                        <label className="block mb-2 text-sm text-gray-800">
                          Company Picture
                        </label>
                        <div className="relative">
                          <input
                            name="profilePicture"
                            type="file"
                            className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-lg focus:outline-none ${
                              edit ? "cursor-text" : "cursor-not-allowed"
                            }`}
                            disabled={edit ? false : true}
                            /* {...formik.getFieldProps("email")} */
                          />
                          <Image
                            className="absolute right-2 top-2 rounded-full"
                            src={company.profilePicture.url}
                            width={40}
                            height={40}
                            alt="pfp"
                          />
                        </div>
                        {/* {formik.errors.email && formik.touched.email ? (
                          <div className="text-red-600 mt-2 pl-2">
                            {formik.errors.email}
                          </div>
                        ) : (
                          <></>
                        )} */}
                      </div>

                      <div className="col-span-2">
                        <label className="block mb-2 text-sm text-gray-800">
                          Password
                        </label>
                        <input
                          name="password"
                          type="password"
                          placeholder="Enter your last password"
                          className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-lg focus:outline-none ${
                            edit ? "cursor-text" : "cursor-not-allowed"
                          }`}
                          disabled={edit ? false : true}
                          /* {...formik.getFieldProps("password")} */
                        />
                        {/* {formik.errors.password && formik.touched.password ? (
                          <div className="text-red-600 mt-2 pl-2">
                            {formik.errors.password}
                          </div>
                        ) : (
                          <></>
                        )} */}
                      </div>

                      <div className="col-span-2">
                        <label className="block mb-2 text-sm text-gray-800">
                          New Password
                        </label>
                        <input
                          type="password"
                          placeholder="Enter your new password"
                          className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-lg focus:outline-none ${
                            edit ? "cursor-text" : "cursor-not-allowed"
                          }`}
                          /* {...formik.getFieldProps("cpassword")} */
                          disabled={edit ? false : true}
                        />
                        {/* {formik.errors.cpassword && formik.touched.cpassword ? (
                          <div className="text-red-600 mt-2 pl-2">
                            {formik.errors.cpassword}
                          </div>
                        ) : (
                          <></>
                        )} */}
                      </div>
                      <div className="col-span-2">
                        <label className="block mb-2 text-sm text-gray-800">
                          Confirm password
                        </label>
                        <input
                          type="password"
                          placeholder="Just to be sure"
                          className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-lg focus:outline-none ${
                            edit ? "cursor-text" : "cursor-not-allowed"
                          }`}
                          /* {...formik.getFieldProps("cpassword")} */
                          disabled={edit ? false : true}
                        />
                        {/* {formik.errors.cpassword && formik.touched.cpassword ? (
                          <div className="text-red-600 mt-2 pl-2">
                            {formik.errors.cpassword}
                          </div>
                        ) : (
                          <></>
                        )} */}
                      </div>

                      <button
                        type="button"
                        className="hover:text-fondo-300 hover:bg-fondo-50 text-white font-semibold flex rounded-xl border-2 p-3 border-fondo-200 items-center justify-center gap-4 ease-in-out transition-all bg-fondo-200 col-span-2"
                        onClick={() => setEdit(!edit)}
                      >
                        <span>Edit</span>

                        <AiOutlineEdit />
                      </button>
                    </form>

                    <div className={`${edit ? "block" : "hidden"}`}>
                      <div
                        className="hover:text-fondo-300 mt-3 hover:bg-fondo-50 text-white font-semibold flex rounded-xl border-2 py-3 border-fondo-200 items-center justify-center gap-4ease-in-out transition-all bg-fondo-200"
                        href="./login"
                      >
                        Confirm Changes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </AnimatePresence>
    </DashboardLayout>
  );
};

export default Account;

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({
    req,
  });

  let dataCompany;
  let company;

  // if user isn't is auth
  if (!session) return { redirect: { destination: "/", permanent: false } };

  await fetch(`http://localhost:3000/api/get/company`)
    .then((res) => res.json())
    .then((data) => (dataCompany = data));

  dataCompany.forEach((c) => {
    if (c.email === session.user.email) return (company = c);
  });
  //console.log(company.products)
  // if user is is auth
  return {
    props: { company },
  };
}
