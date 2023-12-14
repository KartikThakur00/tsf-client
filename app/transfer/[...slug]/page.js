"use client";
import Error from "@/components/Error";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Transfer = ({ params }) => {
  const router = useRouter();
  const from = params.slug[0];
  const to = params.slug[1];
  const [customerData, setCustomerData] = useState({});
  const [loading, setLoading] = useState(true);
  const [sendAmount, setSendAmount] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/customers/${from}/${to}`)
      .then((res) => res.json())
      .then((data) => {
        setCustomerData(data);
        setLoading(false);
      });
  }, [from, to]);

  const success =()=>{
    toast.success("Transaction Successful !",{
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnFocusLoss: false,
    });
  }
  
  const handleSubmit = () => {
    const from = customerData.fromCustomer._id;
    const to = customerData.toCustomer._id;
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/customers/${to}/${from}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sendAmount: sendAmount }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Transaction Successful") {
          setSendAmount(0);
          success()
          router.push("/customers");
        } else {
          setError(true);
        }
      });
  };

  return (
    <>
      {!loading ? (
        <>
          {!error ? (
            <div
              id="services"
              className="flex flex-col items-center justify-center text-center py-24"
            >
              <div className="py-6">
                <h2 className="text-xl sm:text-3xl font-medium before:content-[''] before:w-12 before:h-[2px] before:bg-[#7239ec] before:inline-block before:m-[0_10px_12px_15px] after:content-[''] after:w-12 after:h-[2px] after:bg-[#7239ec] after:inline-block after:m-[0_10px_12px_15px]">
                  Transferring From
                </h2>
                <p className="text-center text-lg py-2">
                  Customer Name : <span>{customerData.fromCustomer.name}</span>
                </p>
                <p className="text-center text-lg py-1">
                  Balance : <span>{customerData.fromCustomer.balance}</span>
                </p>
              </div>
              <div className="py-4">
                <h2 className="text-xl sm:text-3xl font-medium before:content-[''] before:w-12 before:h-[2px] before:bg-[#7239ec] before:inline-block before:m-[0_10px_12px_15px] after:content-[''] after:w-12 after:h-[2px] after:bg-[#7239ec] after:inline-block after:m-[0_10px_12px_15px]">
                  Transferring To
                </h2>
                <p className="text-center text-lg py-2">
                  Customer Name : <span>{customerData.toCustomer.name}</span>
                </p>
                <p className="text-center text-lg py-1">
                  Balance : <span>{customerData.toCustomer.balance}</span>
                </p>
              </div>
              <div className="py-8">
                <h2 className="text-xl sm:text-3xl font-medium before:content-[''] before:w-12 before:h-[2px] before:bg-[#7239ec] before:inline-block before:m-[0_10px_12px_15px] after:content-[''] after:w-12 after:h-[2px] after:bg-[#7239ec] after:inline-block after:m-[0_10px_12px_15px]">
                  Amount To Be Transferred
                </h2>
                <div className="relative mt-2 rounded-md py-6">
                  <input
                    type="number"
                    name="sendAmount"
                    id="price"
                    className="rounded-md border-0 py-1.5 pl-4 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                    placeholder="0.00"
                    onChange={(e) => setSendAmount(e.target.value)}
                  />
                  <button
                    onClick={handleSubmit}
                    className="text-center font-semibold text-white mx-2 px-4 py-1.5 rounded-md bg-purple-500"
                  >
                    Transfer
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Error />
          )}
        </>
      ) : (
        <div className="-z-10 bg-slate-100 w-full h-screen flex items-center justify-center ">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default Transfer;
