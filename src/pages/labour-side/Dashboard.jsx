import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-dvh items-center justify-center bg-customGrey p-4">
      <div className="flex w-full flex-col gap-4">

        <div className="mx-auto w-full max-w-[24rem] rounded-md bg-white p-3 shadow-xl sm:max-w-[35rem] lg:max-w-[40rem]">
          <div className="flex items-center">
            <span className="text-sm text-gray-500 sm:text-base md:text-lg">Welcome</span>
            &nbsp;
            <span className="text-base font-medium sm:text-lg md:text-xl">Safuvan</span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[24rem] rounded-md bg-white p-3 shadow-xl sm:max-w-[35rem] lg:max-w-[40rem]">
          <h1 className="text-center text-xl font-medium">
            Add SKU
          </h1>
          <hr className="mt-2 border-t-2 border-gray-300" />
          
          <div className="mt-5 flex flex-col gap-4 px-2 md:mt-6">
            <select
              name="sku"
              defaultValue=""
              id="sku"
              className="h-11 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-1 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
            >
              <option value="" disabled>
                Select SKU
              </option>
              <option value="fsfd">111</option>
              <option value="sdfsd">222</option>
              <option value="sdfd">333</option>
            </select>

            <input
              type="number"
              className="h-11 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 placeholder:text-gray-500 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder="Enter Quantity"
            />

            <button className="mt-3 mb-2 h-11 w-full rounded-md bg-customGreen text-white transition-all duration-500 hover:bg-green-600 hover:shadow-lg active:scale-95 sm:text-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;