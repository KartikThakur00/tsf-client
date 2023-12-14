import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white w-full rounded-lg px-3 shadow-[0_2px_15px_rgb(0,0,0,0.1)]">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          <a href="/#" className="hover:text-gray-800">
            Bank
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400 ">
          <li>
            <a href="/#" className="hover:text-gray-800 me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="/#" className="hover:text-gray-800 me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/#" className="hover:text-gray-800 me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="/#" className="hover:text-gray-800">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
