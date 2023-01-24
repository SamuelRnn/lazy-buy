/* eslint-disable react-hooks/exhaustive-deps */
import Spinner from "../../components/Spinners/Spinner";
import DashboardLayout from "../../components/Elements_Dashboard/DashboardLayout";
import dashboardMiddleware from "../../utils/dashboardMiddleware";
import { useGetCompanyQuery, useGetPlanQuery } from "../../redux/companyApi";
import { BiCheck } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { toast, Toaster } from "react-hot-toast";

const Plan = ({ company }) => {
  const router = useRouter();
  const { isLoading: isLoadingPlans, data: plans } = useGetPlanQuery();
  const { isLoading: isLoadingCompany, data: companyData } = useGetCompanyQuery(
    company.email
  );
  const fakeD = (str) =>
    str
      .split("-")
      .map((e, i) => {
        const [a] = e.split("");
        return a;
      })
      .join("");
  const handlePayment = async (planType) => {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_PUBLIC_KEY);
    let body = {
      planType,
      email: company.email,
    };
    try {
      const response = await fetch("/api/create/stripePy?pay=plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      //toast.loading("Redirecting...");
      const hh = await stripe.redirectToCheckout({
        sessionId: data.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (router.query.success) {
      let body = {
        planType: fakeD(router.query.planType),
        email: company.email,
      };
      fetch("/api/create/planSuccess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((e) =>
        toast.success(
          `Congratulations on your new plan ${fakeD(router.query.planType)}`,
          { duration: 5000 }
        )
      );
    }
    if (router.query.cancel) {
      toast.error("We are sorry your payment has failed", { duration: 5000 });
    }
  }, [router.query.planType]);

  return (
    <DashboardLayout>
      <section>
        <div className="pt-4">
          <Toaster />
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-8">
            <h2 className="mb-3 text-4xl tracking-tight font-extrabold text-fondo-300">
              Designed specially for your business
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-lg">
              Here at Lazy-Buy we focus on your growth where technology,
              innovation, and capital can unlock long-term value and drive to
              your next level
            </p>
          </div>
          {(isLoadingPlans || isLoadingCompany) && (
            <div className="flex justify-center h-[300px] items-center">
              <Spinner />
            </div>
          )}
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {plans &&
              companyData &&
              plans.map((plan, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i / 10 }}
                  whileHover={{ scale: 1.04 }}
                  key={plan.id}
                  className={`flex flex-col rounded-lg ${"bg-zinc-100"} border shadow-md pt-8 pb-4 px-6 justify-between`}
                >
                  <div className="mb-5">
                    <p className="text-center text-3xl font-black mb-2 text-[#e4b47c]">
                      {plan.planType}
                    </p>
                    <p className="text-center text-gray-600 font-thin">
                      {plan.description}
                    </p>
                  </div>
                  {/* info section */}

                  <div className="mx-auto">
                    {/* price */}
                    <div className="flex justify-center gap-2 items-center mb-4">
                      <p className="text-5xl font-bold first-letter:text-fondo-300 text-zinc-600">
                        ${plan.price}
                      </p>
                      <span>/month</span>
                    </div>
                    {/* features */}
                    <span className="flex items-center">
                      <BiCheck className="text-emerald-400 text-2xl" />
                      <p className="ml-2">Individual Configuration</p>
                    </span>
                    <span className="flex items-center">
                      <BiCheck className="text-emerald-400 text-2xl" />
                      <p className="ml-2">
                        Visualized products:{" "}
                        <span className="font-bold text-slate-500">
                          {plan.activeProductsLimit === 9999
                            ? "Unlimited*"
                            : plan.activeProductsLimit}
                        </span>
                      </p>
                    </span>
                    <span className="flex items-center">
                      <BiCheck className="text-emerald-400 text-2xl" />
                      <p className="ml-2">
                        Store size:{" "}
                        <span className="font-bold text-slate-500">
                          {plan.productsLimit === 9999
                            ? "Unlimited*"
                            : plan.productsLimit}
                        </span>
                      </p>
                    </span>
                  </div>
                  <button
                    onClick={() => handlePayment(plan.planType)}
                    disabled={companyData.plan === plan.planType}
                    className="w-full mt-6 p-4 rounded bg-fondo-300 border border-fondo-300 text-zinc-100
                  font-bold transition-colors hover:bg-zinc-500 hover:text-white disabled:bg-zinc-500 disabled:pointer-events-none"
                  >
                    {companyData.plan === plan.planType
                      ? "Selected"
                      : "Get Started"}
                  </button>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};
export default Plan;

export async function getServerSideProps(context) {
  return await dashboardMiddleware(context);
}
