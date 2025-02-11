import React, { useEffect, useState } from "react";
import AddUpdateInventory from "./AddUpdateInventory";
import UpdateInventoryStock from "./UpdateInventoryStock";
import { fetchInventoryData } from "../../services/inventoryService";

const InventoryManagement = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getInventoryData = async () => {
    setLoading(true);
    const data = await fetchInventoryData();
    setInventoryData(data || []);
    setLoading(false);
  };

  useEffect(() => {
    getInventoryData();
  }, []);

  return (
    <div className="h-full w-full">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-customGrey animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-customGrey animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-customGrey animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="h-[15%] w-full flex items-center justify-between">
            <span className="text-lg font-medium">Inventory Details</span>
            <AddUpdateInventory onSuccess={getInventoryData} />
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
                    <th className="px-2 py-2 border"></th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryData.map((ivt, index) => (
                    <tr key={ivt.id}>
                      <td className="px-2 py-2 text-center border">{index + 1}</td>
                      <td className="px-2 py-2 text-center border">
                        {ivt.name}
                      </td>
                      <td className="px-2 py-2 text-center border">{ivt.stock}</td>
                      <td className="px-2 py-2 border">
                        <div className="flex justify-center">
                          <AddUpdateInventory inventoryData={ivt} onSuccess={getInventoryData} />
                        </div>
                      </td>
                      <td className="px-2 py-2 border">
                        <div className="flex justify-center">
                          <UpdateInventoryStock inventoryData={ivt} onSuccess={getInventoryData} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InventoryManagement;
