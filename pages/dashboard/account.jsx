import DashboardLayout from "../../components/Elements_Dashboard/DashboardLayout";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import dashboardMiddleware from "../../utils/dashboardMiddleware";
import {
  useGetCompanyQuery,
  useUpdateAccountMutation,
} from "../../redux/companyApi";
import Spinner from "../../components/Spinners/Spinner";
import { registerValidateCompanyAccount } from "../../utils/validateCompanyAccount";
import { useFormik } from "formik";
import UploadWidget from "../../components/Elements_Dashboard/UploadWIdget";
import { toast } from "react-hot-toast";

const Account = ({ company: { email } }) => {
  const [edit, setEdit] = useState(false);
  const { isLoading, data: company } = useGetCompanyQuery(email);
  const [updateAccount] = useUpdateAccountMutation();

  /* TODO: CLOUDINARY */
  const formik = useFormik({
    initialValues: {
      name: "",
      owner: "",
      country: "",
      city: "",
    },
    validate: registerValidateCompanyAccount,
    onSubmit,
  });

  async function onSubmit(values) {
    values.email = company.email;
    try {
      await updateAccount(values);
      formik.resetForm();
      return toast.success("Changes Applied!");
    } catch (error) {
      return toast.error("Something went wrong!");
    }
  }

  return (
    <DashboardLayout>
      <AnimatePresence>
        <div className="overflow-hidden -z-50">
          <div>
            <section className="">
              {isLoading && <Spinner />}
              {!isLoading && (
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
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="col-span-2">
                          <label className="block mb-2 text-sm text-gray-800">
                            Company Name
                          </label>
                          <input
                            name="name"
                            type="text"
                            placeholder={company.name}
                            className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border 
                            border-slate-800 rounded-lg focus:outline-none
                            ${
                              formik.errors.name && formik.touched.name
                                ? "border-rose-800"
                                : ""
                            }
                            ${edit ? "cursor-text" : "cursor-not-allowed"}`}
                            disabled={edit ? false : true}
                            {...formik.getFieldProps("name")}
                          />
                        </div>

                        <div className="col-span-2">
                          <label className="block mb-2 text-sm text-gray-800">
                            Owner
                          </label>
                          <input
                            name="owner"
                            type="text"
                            placeholder={company.owner}
                            className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-slate-800 rounded-lg focus:outline-none
                            ${
                              formik.errors.owner && formik.touched.owner
                                ? "border-rose-800"
                                : ""
                            }
                            ${edit ? "cursor-text" : "cursor-not-allowed"}`}
                            disabled={edit ? false : true}
                            {...formik.getFieldProps("owner")}
                          />
                        </div>

                        <div className="col-span-2">
                          <label className="block mb-2 text-sm text-gray-800">
                            Country
                          </label>
                          <input
                            name="country"
                            type="text"
                            placeholder={company.country}
                            className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-slate-800 rounded-lg focus:outline-none
                            ${
                              formik.errors.country && formik.touched.country
                                ? "border-rose-800"
                                : ""
                            }
                            ${edit ? "cursor-text" : "cursor-not-allowed"}`}
                            disabled={edit ? false : true}
                            {...formik.getFieldProps("country")}
                          />
                        </div>
                        <div className="col-span-2">
                          <label className="block mb-2 text-sm text-gray-800">
                            City
                          </label>
                          <input
                            name="city"
                            type="text"
                            placeholder={company.city}
                            className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-slate-800 rounded-lg focus:outline-none
                            ${
                              formik.errors.city && formik.touched.city
                                ? "border-rose-800"
                                : ""
                            }
                            ${edit ? "cursor-text" : "cursor-not-allowed"}`}
                            disabled={edit ? false : true}
                            {...formik.getFieldProps("city")}
                          />
                        </div>
                        <div className="flex justify-between items-center col-span-2 gap-2 p-x-4">
                          <UploadWidget email={company && company.email} />
                          {company && (
                            <Image
                              width={48}
                              height={48}
                              src={company && company.profilePicture.url}
                              alt={company.owner}
                              className="object-cover object-center h-12 rounded-full"
                            />
                          )}
                        </div>

                        <button
                          type="button"
                          className="hover:text-fondo-300 hover:bg-fondo-50 text-white font-semibold flex rounded-xl border-2 p-3 border-fondo-200 items-center justify-center gap-4 ease-in-out transition-all bg-fondo-200 col-span-2"
                          onClick={() => {
                            setEdit(!edit);
                            formik.resetForm();
                          }}
                        >
                          <span>Edit</span>

                          <AiOutlineEdit />
                        </button>
                        <button
                          type="submit"
                          className={`hover:text-fondo-300 mt-3 hover:bg-fondo-50 text-white font-semibold flex rounded-xl border-2 py-3 border-fondo-200 items-center justify-center gap-4ease-in-out transition-all bg-fondo-200 col-span-2 ${
                            edit ? "block" : "hidden"
                          }`}
                        >
                          Confirm Changes
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </AnimatePresence>
    </DashboardLayout>
  );
};

export default Account;

export async function getServerSideProps(context) {
  return await dashboardMiddleware(context);
}
