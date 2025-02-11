import React, { useEffect, useState } from "react";
import PayButton from "./PayButton";
import {
  downloadWalletTransactionExcel,
  fetchWalletData,
} from "../../services/payoutService";
import toast from "react-hot-toast";

const PayoutManagement = () => {
  const [walletData, setWalletData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getWalletData = async () => {
    setLoading(true);
    const data = await fetchWalletData();
    setWalletData(data || []);
    setLoading(false);
  };

  useEffect(() => {
    getWalletData();
  }, []);

  const handleDownload = async () => {
    try {
      const data = await downloadWalletTransactionExcel();

      // Create a URL for the file
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Kitlon_transactions_history.xlsx");
      document.body.appendChild(link);
      link.click();

      toast.success("Downloading Started");

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
          <div className="h-[15%] w-full flex items-center justify-between">
            <span className="text-lg font-medium">Payout Details</span>
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
                    <th className="px-2 py-2 border">No.</th>
                    <th className="px-2 py-2 border">Labour Name</th>
                    <th className="px-2 py-2 border">Amount</th>
                    <th className="px-2 py-2 border"></th>
                  </tr>
                </thead>
                <tbody>
                  {walletData.map((wallet, index) => (
                    <tr key={wallet.id}>
                      <td className="px-2 py-2 text-center border">
                        {index + 1}
                      </td>
                      <td className="px-2 py-2 text-center border">
                        {wallet.labour}
                      </td>
                      <td className="px-2 py-2 text-center border">
                        ₹{wallet.amount}
                      </td>
                      <td className="px-2 py-2 border">
                        {wallet.amount > 0 ? (
                          <div className="flex justify-center">
                            <PayButton
                              walletData={wallet}
                              onSuccess={getWalletData}
                            />
                          </div>
                        ) : (
                          <span>&nbsp;</span>
                        )}
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

export default PayoutManagement;
