import React, { useEffect, useState } from "react";
import { clearStorage, getUserDataDetails } from "../../utils/localStorage";
import { fetchSkuData, submitSku } from "../../services/skuService";
import logoutIcon from "../../assets/icons/logout.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const [skuList, setSkuList] = useState([]);
  const [selectedSku, setSelectedSku] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const userName = getUserDataDetails("name");
    if (userName) {
      setUserName(userName);
    }

    const getSku = async () => {
      const data = await fetchSkuData();
      setSkuList(data || []);
      console.log(data);
    };
    getSku();
  }, []);

  const handleSubmit = async () => {
    if (!selectedSku || !quantity) {
      setError("Please select an SKU and enter quantity");
      return;
    }
    setLoading(true);

    try {
      const data = await submitSku({
        sku_code: selectedSku,
        quantity: Number(quantity),
      });
      toast.success("Submitted Successfully", { duration: 3000 });
      setSelectedSku("");
      setQuantity("");
    } catch (error) {
      setError(error.response.data.inventory);
      toast.error("Try again", { duration: 3000 });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    clearStorage()
    navigate("/sign-in")
  }

  return (
    <div className="flex h-dvh items-center justify-center bg-customGrey p-4">
      <div className="flex w-full flex-col gap-4">
        <div className="mx-auto w-full flex justify-between items-center max-w-[24rem] rounded-md bg-white p-3 shadow-xl sm:max-w-[35rem] lg:max-w-[40rem]">
          <div className="flex items-center">
            <span className="text-sm text-gray-500 sm:text-base md:text-lg">
              Welcome
            </span>
            &nbsp;
            <span className="text-base font-medium sm:text-lg md:text-xl">
              {userName}
            </span>
          </div>
          <img
            src={logoutIcon}
            onClick={handleLogout}
            alt="logout"
            className="h-5 md:h-6 cursor-pointer"
            title="Logout"
          />
        </div>

        <div className="mx-auto w-full max-w-[24rem] rounded-md bg-white p-3 shadow-xl sm:max-w-[35rem] lg:max-w-[40rem]">
          <h1 className="text-center text-xl font-medium">Add SKU</h1>
          <hr className="mt-2 border-t-2 border-gray-300" />

          <div className="mt-5 flex flex-col gap-4 px-2 md:mt-6">
            <select
              name="sku"
              id="sku"
              value={selectedSku}
              onChange={(e) => setSelectedSku(e.target.value)}
              className="h-11 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-1 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
            >
              <option value="" disabled>
                Select SKU
              </option>
              {skuList.map((sku) => (
                <option key={sku.id} value={sku.code}>
                  {sku.code}
                </option>
              ))}
            </select>

            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="h-11 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 placeholder:text-gray-500 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder="Enter Quantity"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`mt-3 mb-2 h-11 w-full rounded-md bg-customGreen text-white transition-all duration-500 hover:bg-green-600 hover:shadow-lg active:scale-95 sm:text-lg ${
                loading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
