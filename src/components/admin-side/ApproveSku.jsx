import React, { useEffect, useState } from "react";
import {
  downloadSkuSubmissionExcel,
  fetchSubmittedSku,
  updateSubmittedSkuStatus,
} from "../../services/skuService";
import toast from "react-hot-toast";

const ApproveSku = () => {
  const [submittedSku, setSubmittedSku] = useState([]);
  const [loading, setLoding] = useState(true);

  const getSubmittedSku = async () => {
    const data = await fetchSubmittedSku();
    setSubmittedSku(data || []);
    setLoding(false);
  };

  useEffect(() => {
    getSubmittedSku();
  }, []);

  const handleStatus = async (id, status) => {
    try {
      await updateSubmittedSkuStatus(id, status);
      getSubmittedSku();
      toast.success(status);
    } catch (error) {
      toast.error("Try again");
    }
  };

  const handleDownload = async () => {
    try {
      const data = await downloadSkuSubmissionExcel();

      // Create a URL for the file
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Sku_Submission_Data.xlsx");
      document.body.appendChild(link);
      link.click();

      toast.success("Downloaded");

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Try again");
    }
  };

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
          <div className="h-[15%] w-full flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 justify-between mb-5 sm:mb-0">
            <span className="text-lg font-medium">Approve SKUs</span>
            <button
              onClick={handleDownload}
              className="px-1 sm:px-3 h-9 hover:text-white hover:bg-customGrey rounded-md bg-white text-customGrey border-2 border-customGrey"
            >
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
                  {submittedSku.map((sku, index) => (
                    <tr key={sku.id}>
                      <td className="px-2 py-2 text-center border">
                        {sku.created_at}
                      </td>
                      <td className="px-2 py-2 text-center border">
                        {sku.labour}
                      </td>
                      <td className="px-2 py-2 text-center border">
                        {sku.sku_code}
                      </td>
                      <td className="px-2 py-2 text-center border">
                        {sku.quantity}
                      </td>
                      <td className="px-2 py-2 border">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleStatus(sku.id, "approve")}
                            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleStatus(sku.id, "decline")}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                          >
                            Decline
                          </button>
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

export default ApproveSku;
