import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import dashboardMiddleware from "../../utils/dashboardMiddleware";

const Account = ({ company }) => {
  const [edit, setEdit] = useState(false);

  return (
    <DashboardLayout>
      <AnimatePresence>
        <div className="overflow-hidden -z-50">
          account
          {/* <motion.div
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

                    <form
                      className="grid grid-cols-2 gap-6 mt-6 md:grid-cols-2"
                      onSubmit=""
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
                          
                        />
                        
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
                        />
                        
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
                        />
             
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
                        />
                      
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
                          />
                          <Image
                            className="absolute right-2 top-2 rounded-full"
                            src={company.profilePicture.url}
                            width={40}
                            height={40}
                            alt="pfp"
                          />
                        </div>
                     
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
                        />
                       
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
                          disabled={edit ? false : true}
                        />
                        
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
                          disabled={edit ? false : true}
                        />
                       
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
          </motion.div> */}
        </div>
      </AnimatePresence>
    </DashboardLayout>
  );
};

export default Account;

export async function getServerSideProps(context) {
  return await dashboardMiddleware(context);
}
