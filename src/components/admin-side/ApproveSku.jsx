import React from "react";

const ApproveSku = () => {
  return (
    <div className="h-full w-full">
      <div className="h-[15%] w-full flex items-center justify-between">
        <span className="text-lg font-medium">Approve SKUs</span>
        <div className="flex justify-center gap-2">
          <button className="px-3 h-9 hover:text-white hover:bg-customGrey rounded-md bg-white text-customGrey border-2 border-customGrey">
            Download Excel
          </button>
          <button className="bg-customGreen hover:bg-green-600 px-3 h-9 font-medium text-white rounded-md">
            Approve All
          </button>
        </div>
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
                <td className="px-2 py-2 flex justify-center gap-2 border">
                  <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                    Approve
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                    Decline
                  </button>
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
