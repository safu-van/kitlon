import React, { useState } from "react";
import { deductAmount } from "../../services/payoutService";
import toast from "react-hot-toast";

const PayButton = ({ walletData, onSuccess }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [payAmount, setPayAmount] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleModalClose = () => {
    setPayAmount();
    setError();
    setModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (payAmount <= 0) {
      setError("Amount must be greater than 0");
      return;
    }

    const payload = {
      amount: payAmount,
      message: message,
    };

    try {
      await deductAmount(walletData.id, payload);
      onSuccess?.();
      toast.success("Amount Paid Successfully");
    } catch (error) {
      toast.error("Try again");
    }

    handleModalClose();
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-green-500 hover:bg-green-600 px-5 h-9 font-medium text-white rounded-md"
      >
        Pay
      </button>

      {modalOpen && (
        <div
          onClick={handleModalClose}
          className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50 px-4 sm:px-0"
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl"
          >
            <div className="mb-2">
              <label
                htmlFor="payAmount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
              </label>
              <input
                type="number"
                id="payAmount"
                name="payAmount"
                value={payAmount}
                onChange={(e) => setPayAmount(e.target.value)}
                className="h-10 mt-1 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="Enter amount"
              />
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full h-24 rounded-md border-2 border-customRingGrey bg-customLightGrey px-2 py-2 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none custom-scrollbar"
                placeholder="Enter message"
              />
            </div>

            <div className="flex space-x-2">
              <button
                type="button"
                onClick={handleModalClose}
                className="h-11 w-1/2 rounded-md border border-customGreen text-customGreen transition-all duration-500 hover:shadow-lg active:scale-95 sm:text-lg"
              >
                Close
              </button>
              <button
                type="submit"
                className="h-11 w-1/2 rounded-md bg-customGreen text-white transition-all duration-500 hover:bg-green-600 hover:shadow-lg active:scale-95 sm:text-lg"
              >
                Pay
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default PayButton;
