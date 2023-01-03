import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <div className="bg-fondo-200 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-1">
          <div className="bg-fondo-300 px-6 py-8 rounded shadow-md text black w-full">
            <h1 className="mb-8 text-3x2 text-center">Sign Up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            ></input>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            ></input>
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />
            <button type="submit" className="w-full texte-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1">Create Account</button>
          </div>
          <div className="text-grey-dark mt-6">
            "Alredy have an account?"
            <Link href='./loging' className='no-underline border-b border-blue text-blue'>Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;