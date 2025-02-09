import React from "react";
import AddUpdateLabour from "./AddUpdateLabour";

const LabourManagement = () => {
  const data = [
    {
      id: 1,
      firstName: "mohamed",
      lastName: "safuvan",
      username: "safuvan_900",
      phoneNumber: 9188552541,
    },
    {
      id: 2,
      firstName: "shan",
      lastName: "mohamed",
      username: "shan_234",
      phoneNumber: 1234567898,
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="h-[15%] w-full flex items-center justify-between">
        <span className="text-lg font-medium">Labour Details</span>
        <AddUpdateLabour />
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
              {data.map((a) => (
                <tr key={a.id}>
                  <td className="px-2 py-2 text-center border">1</td>
                  <td className="px-2 py-2 text-center border">
                    {`${a.firstName} ${a.lastName}`}
                  </td>
                  <td className="px-2 py-2 text-center border">faisal_123</td>
                  <td className="px-2 py-2 text-center border">9188552541</td>
                  <td className="px-2 py-2 border">
                    <div className="flex justify-center">
                      <AddUpdateLabour labourData={a} />
                    </div>
                  </td>
                  <td className="px-2 py-2 text-center border">
                    {/* <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                    Unblock
                  </button> */}
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                      Block
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LabourManagement;
