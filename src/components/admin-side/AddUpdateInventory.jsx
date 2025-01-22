import React, { useState } from "react";

const AddUpdateInventory = ({ inventoryData = null }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [inventoryName, setInventoryName] = useState(
    inventoryData?.inventoryName || ""
  );
  const [inventoryStock, setInventoryStock] = useState(
    inventoryData?.inventoryStock || ""
  );

  const handleModalClose = () => {
    setInventoryName(inventoryData?.inventoryName || "");
    setInventoryStock(inventoryData?.inventoryStock || "");
    setErrors({});
    setModalOpen(false);
  };

  const validateForm = () => {
    let formErrors = {};

    if (!inventoryName.trim()) {
      formErrors.inventoryName = "Inventory name is required";
    }

    if (inventoryStock <= 0) {
      formErrors.inventoryStock = "Inventory stock must be greater than 0";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully!");
      setModalOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className={
          inventoryData
            ? "px-3 h-8 hover:text-white hover:bg-customGrey rounded-md bg-white text-customGrey border-2 border-customGrey"
            : "bg-customGreen hover:bg-green-600 px-3 h-9 font-medium text-white rounded-md"
        }
      >
        {inventoryData ? "Update" : "Add Inventory"}
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
            <h2 className="text-2xl font-bold mb-4 text-center">
              {inventoryData ? "Update Inventory" : "Add Inventory"}
            </h2>
            <hr className="mb-4 border-t-2 border-gray-300" />

            <div className="mb-4">
              <label
                htmlFor="inventoryName"
                className="block text-sm font-medium text-gray-700"
              >
                Inventory Name
              </label>
              <input
                type="text"
                id="inventoryName"
                name="inventoryName"
                value={inventoryName}
                onChange={(e) => setInventoryName(e.target.value)}
                className="h-10 mt-1 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="Enter inventory name"
              />
              {errors.inventoryName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.inventoryName}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="inventoryStock"
                className="block text-sm font-medium text-gray-700"
              >
                Inventory Stock
              </label>
              <input
                type="number"
                id="inventoryStock"
                name="inventoryStock"
                value={inventoryStock}
                onChange={(e) => setInventoryStock(e.target.value)}
                className="h-10 mt-1 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="Enter inventory stock"
              />
              {errors.inventoryStock && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.inventoryStock}
                </p>
              )}
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

export default AddUpdateInventory;
