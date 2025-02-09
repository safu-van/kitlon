import React from "react";
import AddUpdateSku from "./AddUpdateSku";

const SkuDetailsTable = () => {
  const data = [
    {
      id: 1,
      skuCode: "abcDEF",
      labourCharge: 234,
    },
    {
      id: 2,
      skuCode: "123456",
      labourCharge: 123,
    },
  ];
  return (
    <div className="h-full w-full">
      <div className="h-[15%] w-full flex items-center justify-between">
        <span className="text-lg font-medium">SKUs Details</span>
        <AddUpdateSku />
      </div>
      <div className="h-[85%] relative">
        <div className="overflow-x-auto overflow-y-auto custom-scrollbar h-full">
          <table className="w-full rounded-sm shadow-lg border-collapse">
            <thead className="sticky top-0 bg-white z-10">
              <tr>
                <th className="px-2 py-2 border">No.</th>
                <th className="px-2 py-2 border">SKU Code</th>
                <th className="px-2 py-2 border">Stock</th>
                <th className="px-2 py-2 border">Labour Charge</th>
                <th className="px-2 py-2 border"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((a) => (
                <tr key={a.id}>
                  <td className="px-2 py-2 text-center border">{a.id}</td>
                  <td className="px-2 py-2 text-center border">{a.skuCode}</td>
                  <td className="px-2 py-2 text-center border">0</td>
                  <td className="px-2 py-2 text-center border">
                    {a.labourCharge}
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="flex justify-center">
                      <AddUpdateSku skuData={a} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SkuDetailsTable;
