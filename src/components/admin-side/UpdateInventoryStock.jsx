import React, { useState } from "react";

const UpdateInventoryStock = ({ inventoryData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [stock, setStock] = useState("");

  const handleModalClose = () => {
    setStock(0);
    setError("");
    setModalOpen(false);
  };

  const validateForm = () => {
    if (stock <= 0) {
      setError("Stock must be greater than 0");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    console.log("Form submitted successfully!");
    handleModalClose();
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-customGreen hover:bg-green-600 px-3 h-8 font-medium text-white rounded-md"
      >
        Add Stock
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
            <h2 className="text-2xl font-bold mb-4 text-center">Add Stock</h2>
            <hr className="mb-4 border-t-2 border-gray-300" />

            <div className="mb-4">
              <label
                htmlFor="stock"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Stock
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="h-10 mt-1 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="Enter new stock reached"
              />
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
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
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateInventoryStock;
