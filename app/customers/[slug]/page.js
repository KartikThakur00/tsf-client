'use client'
import Link from 'next/link';
import React ,{useState,useEffect} from 'react'

const FromCustomer = ({params}) => {
  const id = params.slug
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/customers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.customers);
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
              CUSTOMER DETAILS
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center text-center pt-7 text-[10px] sm:text-base">
            <table className="table-auto">
              <thead className="text-justify">
                <tr className="border-b-2">
                  <th className="px-4 py-2">Customer Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Balance</th>
                  <th className="px-4 py-2">Transfer From</th>
                </tr>
              </thead>
              <tbody>
                {customers?.map((customer) => (
                  <tr key={customer.id} className="text-justify">
                    <td className="border-b-2 px-4 py-3">{customer.name}</td>
                    <td className="border-b-2 px-4 py-3">{customer.email}</td>
                    <td className="border-b-2 px-4 py-3">{customer.balance}</td>
                    <td className="border-b-2 px-4 py-3">
                      <Link href={`/transfer/${id}/${customer._id}`} className="py-1.5 px-4 border-2 border-purple-400 rounded-md bg-purple-500 hover:bg-purple-400 duration-300 ease-in-out text-white font-semibold">Select</Link>
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
  )
}

export default FromCustomer