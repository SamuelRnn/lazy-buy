import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import AnimatedLogo from "../components/AnimatedLogo";
import Layout from "../components/layout";
import SignupCompany from "../components/signCompany";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Signup = () => {
  const [typeAccount, setTypeAccount] = useState({
    client: true,
    company: false,
    // active: false
  });

  const [input, setInput] = useState({
    name: "",
    email: "",
    owner: "",
    plan: "",
    country: "",
    city: "",
    password: "",
    profilePicture:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJwZPDlnkoRCuk4qbGQT5DR5VP3xgx1OUk3gDQ%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=ceb791eb8fb616305474afa861beb486008509ace4b6be71935f8529c8bbde25&ipo=images",
  });

  const router = useRouter();

  async function handleSignUp(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    };

    await fetch("http://localhost:3000/api/create/company", options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push("http://localhost:3000/login");
      });
    router.push("/login");
  }

  const handleClick = () => {
    !typeAccount.company && setTypeAccount({ client: false, company: true });
    !typeAccount.client && setTypeAccount({ client: true, company: false });
    // !typeAccount.active && setTypeAccount({active: true})
  };

  return (
    <Layout noLayout={true} title="Lazy Buy | SignUp">
      {!typeAccount.company ? (
        <section className="bg-white">
          <div className="flex justify-center min-h-screen">
            <div className="hidden lg:flex lg:w-2/5 justify-center items-center">
              <AnimatedLogo />
            </div>

            <div
              className="flex items-center w-full max-w-3xl  mx-auto lg:px-12 lg:w-3/5"
              id="signup_div"
            >
              <div className="w-full bg-white p-5">
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
                      className="mt-1 flex justify-center w-full px-6 py-3 text-white font-bold bg-fondo-200 hover:bg-white hover:text-fondo-400 border border-fondo-200 transition-all rounded-md md:w-auto md:mx-2 focus:outline-none"
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
                      className="mt-1 flex justify-center w-full px-6 py-3 text-white font-bold bg-fondo-200 hover:bg-white hover:text-fondo-400 border border-fondo-200 transition-all rounded-md md:w-auto md:mx-2 focus:outline-none"
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

                <form
                  className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2"
                  onSubmit={handleSignUp}
                >
                  <div>
                    <label className="block mb-2 text-sm text-gray-800">
                      Company Name
                    </label>
                    <input
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      name="name"
                      value={input.name}
                      type="text"
                      placeholder="Apple Inc."
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-md focus:border-zinc-700 dark:focus:border-zinc-700 focus:ring-zinc-700 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-800">
                      Email
                    </label>
                    <input
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      value={input.email}
                      name="email"
                      type="email"
                      placeholder="stevejobs@gmail.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-md focus:border-zinc-700 dark:focus:border-zinc-700 focus:ring-zinc-700 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-800">
                      Owner
                    </label>
                    <input
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      value={input.owner}
                      name="owner"
                      type="text"
                      placeholder="Steve Jobs"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-md focus:border-zinc-700 dark:focus:border-zinc-700 focus:ring-zinc-700 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-800">
                      Plan
                    </label>
                    <input
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      value={input.plan}
                      name="plan"
                      type="text"
                      placeholder="Plan: Basic | Standard | Premium"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-md focus:border-zinc-700 dark:focus:border-zinc-700 focus:ring-zinc-700 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-800">
                      Country
                    </label>
                    <input
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      value={input.country}
                      name="country"
                      type="text"
                      placeholder="United States"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-md focus:border-zinc-700 dark:focus:border-zinc-700 focus:ring-zinc-700 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-800">
                      City
                    </label>
                    <input
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      value={input.city}
                      name="city"
                      type="text"
                      placeholder="Palo Alto"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-md focus:border-zinc-700 dark:focus:border-zinc-700 focus:ring-zinc-700 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-800">
                      Password
                    </label>
                    <input
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      value={input.password}
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      className="border-fondo-200 block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-zinc-700 dark:focus:border-zinc-700 focus:ring-zinc-700 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-800">
                      Confirm password
                    </label>
                    <input
                      /* onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      value={input.password} */
                      type="password"
                      placeholder="Enter your password"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-fondo-200 rounded-md focus:border-zinc-700 dark:focus:border-zinc-700 focus:ring-zinc-700 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <button
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
                  </button>
                  <button className="hover:text-fondo-300 hover:bg-white text-white font-semibold flex rounded-xl border-2 p-3 border-fondo-200 items-center justify-center gap-4 ease-in-out transition-all bg-fondo-200">
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
                    className="hover:text-fondo-300 mt-3 hover:bg-white text-white font-semibold flex rounded-xl border-2 py-3 border-fondo-200 items-center justify-center gap-4ease-in-out transition-all bg-fondo-200"
                    href="./login"
                  >
                    Already have an account?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <SignupCompany
          typeAccount={typeAccount}
          setTypeAccount={setTypeAccount}
        />
      )}
    </Layout>
  );
};

export default Signup;
