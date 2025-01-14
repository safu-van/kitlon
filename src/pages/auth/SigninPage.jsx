import React from "react";

const SigninPage = () => {
  return (
    <div className="flex h-dvh items-center justify-center bg-customGrey p-4">
      <div className="flex w-full flex-col items-center">
        <img
          src="/logo/kitlon-nobg.png"
          alt="logo"
          className="object-cover h-[5rem] w-[10rem]"
        />
        <div className="w-full max-w-[25rem] rounded-lg bg-white p-4 shadow-xl mt-6 sm:p-6">
          <h1 className="text-center text-xl font-semibold sm:text-2xl">
            Sign In
          </h1>
          <hr className="mt-2 border-t-2 border-gray-300" />
          <div className="mt-5 flex flex-col gap-3 px-2">
            <input
              type="text"
              className="h-11 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 placeholder:text-sm focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400 sm:placeholder:text-base"
              placeholder="Username"
            />
            <input
              type="password"
              className="h-11 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 placeholder:text-sm focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400 sm:placeholder:text-base"
              placeholder="Password"
            />
            <button className="mt-3 h-11 w-full rounded-md bg-customGreen text-white transition-all duration-500 hover:bg-green-600 hover:shadow-lg active:scale-95 sm:text-lg">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
