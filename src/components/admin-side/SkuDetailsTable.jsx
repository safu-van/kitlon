import React, { useEffect, useState } from "react";
import AddUpdateSku from "./AddUpdateSku";
import { fetchSkuData } from "../../services/skuService";

const SkuDetailsTable = () => {
  const [skuData, setSkuData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSkuData = async () => {
    setLoading(true)
    const data = await fetchSkuData();
    setSkuData(data || []);
    setLoading(false);
  };

  useEffect(() => {
    getSkuData();
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
            <span className="text-lg font-medium">SKUs Details</span>
            <AddUpdateSku onSuccess={getSkuData} />
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
                  {skuData.map((sku, index) => (
                    <tr key={sku.id}>
                      <td className="px-2 py-2 text-center border">
                        {index + 1}
                      </td>
                      <td className="px-2 py-2 text-center border">
                        {sku.code}
                      </td>
                      <td className="px-2 py-2 text-center border">
                        {sku.stock}
                      </td>
                      <td className="px-2 py-2 text-center border">
                        ₹{sku.labour_charge}
                      </td>
                      <td className="px-4 py-2 border">
                        <div className="flex justify-center">
                          <AddUpdateSku skuData={sku} onSuccess={getSkuData} />
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

export default SkuDetailsTable;
