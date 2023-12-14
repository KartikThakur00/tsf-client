"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [padding, setPadding] = useState("p-6");
  const [scrollY, setScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 150) {
      setPadding("p-3 px-6");
    }else{
      setPadding("p-6");
    }
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [scrollY]);
  return (
    <header className={`bg-white fixed w-full transition-all duration-300 ${padding == "p-3 px-6"?"shadow-[0_2px_15px_rgb(0,0,0,0.1)]":""}`}>
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between lg:px-8 transition-all duration-500 ${padding} `}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/#" className="-m-1.5 p-1.5 bg-blue-100 rounded-lg">
            <img className="h-8 w-auto" src="/bank.png" alt="logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="/#" 
            className="text-sm font-semibold leading-6 text-gray-900 duration-100"
          >
            Home
          </a>
          <a
            href="/#services"
            className="text-sm font-semibold leading-6 text-gray-900 duration-100"
          >
            Services
          </a>
          <a
            href="/#questions"
            className="text-sm font-semibold leading-6 text-gray-900 duration-100"
          >
            Questions
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <a
            href="/#"
            className="text-sm font-semibold leading-6 text-gray-800 hover:bg-slate-200  bg-gray-200 px-4 py-2 rounded-md transition-colors duration-200 ease-in-out"
          >
            Source Code <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/#" className="-m-1.5 p-1.5 bg-blue-100 rounded-lg">
              <img className="h-8 w-auto" src="/bank.png" alt="logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/#services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                >
                  Services
                </a>
                <a
                  href="/#questions"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                >
                  Questions
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold leading-7 text-gray-600 hover:bg-slate-200 bg-gray-200 transition-colors duration-200 ease-in-out"
                >
                  Source Code <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
