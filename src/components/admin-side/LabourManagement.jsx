import React, { useEffect, useState } from "react";
import AddUpdateLabour from "./AddUpdateLabour";
import {
  fetchLabourData,
  updateLabourStatus,
} from "../../services/labourService";
import toast from "react-hot-toast";

const LabourManagement = () => {
  const [labourData, setLabourData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLabourData = async () => {
    setLoading(true);
    const data = await fetchLabourData();
    setLabourData(data || []);
    setLoading(false);
  };

  useEffect(() => {
    getLabourData();
  }, []);

  const handleLabourStatus = async (id) => {
    try {
      await updateLabourStatus(id);
      getLabourData();
      toast.success("Updated Successfully");
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
            <span className="text-lg font-medium">Labour Details</span>
            <AddUpdateLabour onSuccess={getLabourData} />
          </div>
          <div className="h-[85%] relative">
            <div className="overflow-x-auto overflow-y-auto custom-scrollbar h-full">
              <table className="w-full rounded-sm shadow-lg border-collapse">
                <thead className="sticky top-0 bg-white z-10">
                  <tr>
                    <th className="px-2 py-2 border">No.</th>
                    <th className="px-2 py-2 border">Name</th>
                    <th className="px-2 py-2 border">Username</th>
                    <th className="px-2 py-2 border">Phone Number</th>
                    <th className="px-2 py-2 border"></th>
                    <th className="px-2 py-2 border"></th>
                  </tr>
                </thead>
                <tbody>
                  {labourData.map((labour, index) => (
                    <tr key={labour.id}>
                      <td className="px-2 py-2 text-center border">
                        {index + 1}
                      </td>
                      <td className="px-2 py-2 text-center border">
                        {`${labour.first_name} ${labour.last_name}`}
                      </td>
                      <td className="px-2 py-2 text-center border">
                        {labour.username}
                      </td>
                      <td className="px-2 py-2 text-center border">
                        {labour.phone_number}
                      </td>
                      <td className="px-2 py-2 border">
                        <div className="flex justify-center">
                          <AddUpdateLabour labourData={labour} onSuccess={getLabourData} />
                        </div>
                      </td>
                      <td className="px-2 py-2 text-center border">
                        <button
                          onClick={() => handleLabourStatus(labour.id)}
                          className={`w-20 py-1 text-white rounded ${
                            labour.is_active
                              ? "bg-red-500 hover:bg-red-600"
                              : "bg-green-500 hover:bg-green-600"
                          } transition`}
                        >
                          {labour.is_active ? "Block" : "Unblock"}
                        </button>
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

export default LabourManagement;
