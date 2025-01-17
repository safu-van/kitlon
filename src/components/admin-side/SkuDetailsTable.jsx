import React from "react";
import AddSkuButton from "./AddSkuButton";

const SkuDetailsTable = () => {
  return (
    <div className="h-full w-full">
      <div className="h-[15%] w-full flex items-center justify-between">
        <span className="text-lg font-medium">SKUs Details</span>
        <AddSkuButton />
      </div>
      <div className="h-[85%] relative">
        <div className="overflow-x-auto overflow-y-auto custom-scrollbar h-full">
          <table className="w-full rounded-sm shadow-lg border-collapse">
            <thead className="sticky top-0 bg-white z-10">
              <tr>
                <th className="px-4 py-2 border">No.</th>
                <th className="px-4 py-2 border">SKU Code</th>
                <th className="px-4 py-2 border">Stock</th>
                <th className="px-4 py-2 border">Labour Charge</th>
                <th className="px-4 py-2 border"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-center border">1</td>
                <td className="px-4 py-2 text-center border">145236</td>
                <td className="px-4 py-2 text-center border">10</td>
                <td className="px-4 py-2 text-center border">300</td>
                <td className="px-4 py-2 text-center border">
                  <button className="w-20 h-8 hover:text-white hover:bg-customGrey rounded-md bg-white text-customGrey border-2 border-customGrey">
                    Update
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

export default SkuDetailsTable;
