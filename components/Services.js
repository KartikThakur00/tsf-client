import React from "react";
import {
  UserGroupIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
  return (
    <div id="services" className="flex flex-col items-center justify-center text-center py-20">
      <div>
        <h2 className="text-4xl font-medium before:content-[''] before:w-12 before:h-[2px] before:bg-[#7239ec] before:inline-block before:m-[0_10px_12px_15px] after:content-[''] after:w-12 after:h-[2px] after:bg-[#7239ec] after:inline-block after:m-[0_10px_12px_15px]">
          SERVICES
        </h2>
        <p className="text-base py-4">
          All the operations are listed below. Click as per your need
        </p>
      </div>
      <div className="flex flex-wrap gap-10">
        <a
          href="/customers"
          className="flex flex-col items-start justify-around text-center bg-white rounded-lg shadow-[0_2px_15px_rgb(0,0,0,0.1)] p-6 w-72 h-72 mx-auto my-4 duration-200 hover:shadow-[0_2px_15px_rgb(0,0,0,0.2)]"
        >
          <UserGroupIcon className="h-12 w-12 text-[#7239ec]" />
          <p className="text-lg font-semibold">View all the customers</p>
          <p className="text-sm text-left">
            All the customers are pre listed in the data base and you can make
            transaction from here .
          </p>
        </a>
        <a
          href="/transactions"
          className="flex flex-col items-start justify-around text-center bg-white rounded-lg shadow-[0_2px_15px_rgb(0,0,0,0.1)] p-6 w-72 h-72 mx-auto my-4 duration-200 hover:shadow-[0_2px_15px_rgb(0,0,0,0.2)]"
        >
          <ClipboardDocumentListIcon className="h-12 w-12 text-[#7239ec]" />
          <p className="text-lg font-semibold">View transactions</p>
          <p className="text-sm text-left">
          All the transactions are listed here. and all new transaction will be uploaded on the database when made.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Services;
