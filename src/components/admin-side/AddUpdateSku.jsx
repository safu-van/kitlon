import React, { useState } from "react";
import removeIcon from "../../assets/icons/remove.png";

const AddUpdateSku = ({ skuData = null }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [skuCode, setSkuCode] = useState(skuData?.skuCode || "");
  const [labourCharge, setLabourCharge] = useState(skuData?.labourCharge || "");
  const [errors, setErrors] = useState({});
  const [inventoryFields, setInventoryFields] = useState(
    skuData?.inventoryFields || [{ id: 1, option: "", quantity: "" }]
  );

  const handleModalClose = () => {
    setSkuCode(skuData?.skuCode || "");
    setLabourCharge(skuData?.labourCharge || "");
    setInventoryFields(
      skuData?.inventoryFields || [{ id: 1, option: "", quantity: "" }]
    );
    setErrors({});
    setModalOpen(false);
  };

  const handleAddField = () => {
    const newField = {
      id: inventoryFields.length + 1,
      option: "",
      quantity: "",
    };
    setInventoryFields([...inventoryFields, newField]);
  };

  const handleRemoveField = (id) => {
    setInventoryFields((prev) => prev.filter((field) => field.id !== id));
  };

  const handleFieldChange = (id, field, value) => {
    setInventoryFields((prev) =>
      prev.map((f) => (f.id === id ? { ...f, [field]: value } : f))
    );
  };

  const validateForm = () => {
    let formErrors = {};

    // SKU Code validation
    if (!skuCode.trim()) {
      formErrors.skuCode = "SKU Code is required and cannot be empty.";
    }

    // Labour Charge validation
    if (labourCharge <= 0) {
      formErrors.labourCharge = "Labour Charge must be greater than 0.";
    }

    // Inventory validation
    let inventoryValid = false;
    inventoryFields.forEach((field, index) => {
      if (field.option && field.quantity > 0) {
        inventoryValid = true;
      }
      if (!field.option.trim()) {
        formErrors[`inventoryOption_${index}`] = "Please select an inventory.";
      }
      if (field.quantity <= 0) {
        formErrors[`inventoryQuantity_${index}`] =
          "Quantity must be greater than 0.";
      }
    });

    if (!inventoryValid) {
      formErrors.inventory = "At least one inventory field must be filled.";
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
          skuData
            ? "px-3 h-8 hover:text-white hover:bg-customGrey rounded-md bg-white text-customGrey border-2 border-customGrey"
            : "bg-customGreen hover:bg-green-600 px-3 h-9 font-medium text-white rounded-md"
        }
      >
        {skuData ? "UPDATE" : "ADD SKU"}
      </button>
      {modalOpen && (
        <div
          onClick={handleModalClose}
          className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50 px-4 sm:px-0"
        >
          <form
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              {skuData ? "UPDATE SKU" : "ADD SKU"}
            </h2>
            <hr className="mb-4 border-t-2 border-gray-300" />

            <div className="mb-4">
              <label
                htmlFor="skuCode"
                className="block text-sm font-medium text-gray-700"
              >
                SKU Code
              </label>
              <input
                type="text"
                id="skuCode"
                name="skuCode"
                value={skuCode}
                readOnly={skuData}
                onChange={(e) => setSkuCode(e.target.value)}
                className="h-10 mt-1 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="Enter SKU Code"
              />
              {errors.skuCode && (
                <p className="text-red-500 text-xs mt-1">{errors.skuCode}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="labourCharge"
                className="block text-sm font-medium text-gray-700"
              >
                Labour Charge
              </label>
              <input
                type="number"
                id="labourCharge"
                name="labourCharge"
                value={labourCharge}
                onChange={(e) => setLabourCharge(e.target.value)}
                className="h-10 mt-1 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="Enter Labour Charge"
              />
              {errors.labourCharge && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.labourCharge}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Inventory Needed
              </label>
              <div className="max-h-40 overflow-y-auto custom-scrollbar border rounded-md p-3 bg-gray-50">
                {inventoryFields.map((field, index) => (
                  <div key={field.id} className="flex flex-col mb-3">
                    <div className="flex items-center gap-2">
                      <select
                        value={field.option}
                        onChange={(e) =>
                          handleFieldChange(field.id, "option", e.target.value)
                        }
                        className="h-10 w-1/2 rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                      >
                        <option value="" disabled>
                          Select Inventory
                        </option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                      </select>
                      <input
                        type="number"
                        value={field.quantity}
                        onChange={(e) =>
                          handleFieldChange(
                            field.id,
                            "quantity",
                            e.target.value
                          )
                        }
                        className="h-10 w-1/2 rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                        placeholder="Enter Quantity"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveField(field.id)}
                      >
                        <img src={removeIcon} alt="-" className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex w-full">
                      <p className="text-red-500 text-xs mt-1 w-1/2">
                        {errors[`inventoryOption_${index}`] &&
                          errors[`inventoryOption_${index}`]}
                      </p>
                      <p className="text-red-500 text-xs mt-1 w-1/2">
                        {errors[`inventoryQuantity_${index}`] &&
                          errors[`inventoryQuantity_${index}`]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {errors.inventory && (
                <p className="text-red-500 text-xs mt-1">{errors.inventory}</p>
              )}
              <button
                type="button"
                onClick={handleAddField}
                className="text-indigo-600 hover:text-indigo-800 font-medium text-sm mt-2"
              >
                + Add More
              </button>
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

export default AddUpdateSku;
