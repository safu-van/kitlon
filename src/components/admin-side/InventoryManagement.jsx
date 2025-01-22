import React from "react";
import AddUpdateInventory from "./AddUpdateInventory";

const InventoryManagement = () => {
  const data = [
    {
      id: 1,
      inventoryName: "screw",
      inventoryStock: 3,
    },
    {
      id: 2,
      inventoryName: "bolt",
      inventoryStock: 4,
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="h-[15%] w-full flex items-center justify-between">
        <span className="text-lg font-medium">Approve SKUs</span>
        <AddUpdateInventory />
      </div>
      <div className="h-[85%] relative">
        <div className="overflow-x-auto overflow-y-auto custom-scrollbar h-full">
          <table className="w-full rounded-sm shadow-lg border-collapse">
            <thead className="sticky top-0 bg-white z-10">
              <tr>
                <th className="px-2 py-2 border">No.</th>
                <th className="px-2 py-2 border">Inventory Name</th>
                <th className="px-2 py-2 border">Stock</th>
                <th className="px-2 py-2 border"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((a) => (
                <tr key={a.id}>
                  <td className="px-2 py-2 text-center border">1</td>
                  <td className="px-2 py-2 text-center border">{a.inventoryName}</td>
                  <td className="px-2 py-2 text-center border">15</td>
                  <td className="px-2 py-2 flex justify-center border">
                    <AddUpdateInventory inventoryData={a} />
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

export default InventoryManagement;
