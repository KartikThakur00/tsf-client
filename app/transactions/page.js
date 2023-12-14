"use client";
import React, { useEffect, useState } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/history`)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data.transactions.reverse());
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!loading ? (
        <div
          id="services"
          className="flex flex-col items-center justify-center text-center py-24"
        >
          <div>
            <h2 className="text-xl sm:text-4xl font-medium before:content-[''] before:w-12 before:h-[2px] before:bg-[#7239ec] before:inline-block before:m-[0_10px_12px_15px] after:content-[''] after:w-12 after:h-[2px] after:bg-[#7239ec] after:inline-block after:m-[0_10px_12px_15px]">
              Transaction History
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center text-center pt-7 text-[10px] sm:text-base">
            <table className="table-auto">
              <thead className="text-justify">
                <tr className="border-b-2">
                  <th className="px-4 py-2">From</th>
                  <th className="px-4 py-2">To</th>
                  <th className="px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction._id} className="text-justify">
                    <td className="border-b-2 px-4 py-3">
                      {transaction.fromName}
                    </td>
                    <td className="border-b-2 px-4 py-3">
                      {transaction.toName}
                    </td>
                    <td className="border-b-2 px-4 py-3">
                      {transaction.transferAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="-z-10 bg-slate-100 w-full h-screen flex items-center justify-center ">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default Transactions;
