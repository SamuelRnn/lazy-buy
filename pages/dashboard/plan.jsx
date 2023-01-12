import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import dashboardMiddleware from "../../utils/dashboardMiddleware";
import { useGetCompanyQuery, useGetPlanQuery } from "../../redux/companyApi";

const Plan = ({ company: { email } }) => {
  const { isLoadingPlans, data: plans } = useGetPlanQuery();
  const { isLoadingCompany, data: company } = useGetCompanyQuery(email);

  return (
    <DashboardLayout>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Designed specially for your business
            </h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Lazy-Buy we focus on your growth where technology, innovation,
              and capital can unlock long-term value and drive to your next level
            </p>
          </div>
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
              <h3 class="mb-4 text-2xl font-semibold">Basic</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best option for personal use & for your next project.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">$29</span>
                <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>

              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Products visualized: 10</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Store size: <span class="font-semibold">15 products</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                class="text-white bg-fondo-300 hover:bg-white hover:text-fondo-300 hover:border-fondo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all border"
              >
                Get started
              </a>
            </div>
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-fondo-100 rounded-lg border border-fondo-100 shadow">
              <h3 class="mb-4 text-white text-2xl font-semibold">Standard</h3>
              <p class="font-light text-fondo-50 sm:text-lg">
                Best option for personal use & for your next project.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-white text-5xl font-extrabold">$69</span>
                <span class="text-fondo-50 ">/month</span>
              </div>

              <ul role="list" class="mb-8 space-y-4 text-left text-white">
              <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Products visualized: 40</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Store size: <span class="font-semibold">50 products</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                class="text-white bg-fondo-300 hover:bg-white hover:text-fondo-300 hover:border-fondo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all border border-fondo-300"
              >
                Get started
              </a>
            </div>
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
              <h3 class="mb-4 text-2xl font-semibold">Premmium</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best option for personal use & for your next project.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">$99</span>
                <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>

              <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Products visualized: +99 products</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Store size: <span class="font-semibold">+99 products</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                class="text-white bg-fondo-300 hover:bg-white hover:text-fondo-300 hover:border-fondo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all border"
              >
                Get started
              </a>
            </div>
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
