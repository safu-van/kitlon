import React, { useState } from "react";
import { createLabour, updateLabour } from "../../services/labourService";
import toast from "react-hot-toast";

const AddUpdateLabour = ({ labourData = null, onSuccess }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [firstName, setFirstName] = useState(labourData?.first_name || "");
  const [lastName, setLastName] = useState(labourData?.last_name || "");
  const [phoneNumber, setPhoneNumber] = useState(
    labourData?.phone_number || ""
  );
  const [errors, setErrors] = useState({});

  const handleModalClose = () => {
    setFirstName(labourData?.first_name || "");
    setLastName(labourData?.last_name || "");
    setPhoneNumber(labourData?.phone_number || "");
    setErrors({});
    setModalOpen(false);
  };

  const validateForm = () => {
    let formErrors = {};

    // first name validation
    if (!firstName.trim()) {
      formErrors.firstName = "First name is required";
    }

    // last name validation
    if (!lastName.trim()) {
      formErrors.lastName = "Last name is required";
    }

    // phone number validation
    if (phoneNumber.toString().length !== 10) {
      formErrors.phoneNumber = "Invalid Phone number";
    }

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const payload = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
      };

      if (labourData) {
        // update Labour
        try {
          await updateLabour(labourData.id, payload);
          onSuccess?.();
          toast.success("Labour Updated Successfully");
        } catch (error) {
          setErrors({ phoneNumber: "Phone number already exists" });
          return;
        }
      } else {
        // create Labour
        try {
          await createLabour(payload);
          onSuccess?.();
          toast.success("New Labour Added Successfully");
        } catch (error) {
          setErrors({ phoneNumber: "Phone number already exists" });
          return;
        }
      }

      handleModalClose();
    }
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className={
          labourData
            ? "px-3 h-8 hover:text-white hover:bg-customGrey rounded-md bg-white text-customGrey border-2 border-customGrey"
            : "bg-customGreen hover:bg-green-600 px-3 h-9 font-medium text-white rounded-md"
        }
      >
        {labourData ? "Update" : "Add Labour"}
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
              {labourData ? "Update Labour" : "Add Labour"}
            </h2>
            <hr className="mb-4 border-t-2 border-gray-300" />

            <div className="sm:flex sm:gap-2 w-full">
              <div className="mb-4 sm:w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-10 mt-1 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                  placeholder="Enter first name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="mb-4 sm:w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="h-10 mt-1 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                  placeholder="Enter last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="h-10 mt-1 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="Enter phone number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phoneNumber}
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

export default AddUpdateLabour;
