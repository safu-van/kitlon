import React from "react";

const ApproveSku = () => {
  return (
    <div className="h-full w-full">
      <div className="h-[15%] w-full flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 justify-between mb-5 sm:mb-0">
        <span className="text-lg font-medium">Approve SKUs</span>
        <button className="px-1 sm:px-3 h-9 hover:text-white hover:bg-customGrey rounded-md bg-white text-customGrey border-2 border-customGrey">
          Download Excel
        </button>
      </div>
      <div className="h-[85%] relative">
        <div className="overflow-x-auto overflow-y-auto custom-scrollbar h-full">
          <table className="w-full rounded-sm shadow-lg border-collapse">
            <thead className="sticky top-0 bg-white z-10">
              <tr>
                <th className="px-2 py-2 border">Date</th>
                <th className="px-2 py-2 border">Labour Name</th>
                <th className="px-2 py-2 border">SKU Code</th>
                <th className="px-2 py-2 border">Quantity</th>
                <th className="px-2 py-2 border"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-2 text-center border">10/10/2010</td>
                <td className="px-2 py-2 text-center border">faisal</td>
                <td className="px-2 py-2 text-center border">123456</td>
                <td className="px-2 py-2 text-center border">3</td>
                <td className="px-2 py-2 border">
                  <div className="flex justify-center gap-2">
                    <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                      Approve
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                      Decline
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApproveSku;
