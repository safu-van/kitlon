import React from "react";
import PayButton from "./PayButton";

const PayoutManagement = () => {
  const data = [
    {
      id: 1,
      labourName: "safuvan",
      amount: 500,
    },
    {
      id: 2,
      labourName: "faisal",
      amount: 0,
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="h-[15%] w-full flex items-center justify-between">
        <span className="text-lg font-medium">Payout Details</span>
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
              {data.map((a) => (
                <tr key={a.id}>
                  <td className="px-2 py-2 text-center border">1</td>
                  <td className="px-2 py-2 text-center border">
                    {a.labourName}
                  </td>
                  <td className="px-2 py-2 text-center border">{a.amount}</td>
                  <td className="px-2 py-2 flex justify-center border">
                    {a.amount > 0 ? (
                      <PayButton payoutData={a} />
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
    </div>
  );
};

export default PayoutManagement;
