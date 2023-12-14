import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const Questions = () => {
  return (
    <div
      id="questions"
      className="flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-4xl font-medium mb-6">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="flex gap-10 w-10/12 my-3">
        <div className="flex items-center  gap-4 w-full">
          <QuestionMarkCircleIcon className="h-7 w-7 text-[#7239ec] " />
          <h4 className="">What is the meaning of error message ?</h4>
        </div>
        <p className="text-left w-full flex-auto">
          Error message show up when you try to make transaction more than the
          balance in the account of the customer.
        </p>
      </div>
      <hr className="w-3/4 my-5 bg-black" />
      <div className="flex gap-10 w-10/12 my-3">
        <div className="flex items-center gap-4 w-full">
          <QuestionMarkCircleIcon className="h-7 w-7 text-[#7239ec] " />
          <h4 className="">Can you make new Customer ?</h4>
        </div>
        <p className="text-left w-full flex-auto">
          No, You can not make new customer as this was given in problem
          statement. (not to implement this feature)
        </p>
      </div>
    </div>
  );
};

export default Questions;
