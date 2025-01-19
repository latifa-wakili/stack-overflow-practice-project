import Link from "next/link";
import Image from "next/image";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { useState } from "react";

export default function MessageIcon() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [selectedOption, setSelectedOption] = useState("All");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="absolute top-20 bg-white h-80 right-32 border shadow-md rounded-sm w-96">
      <div className="flex bg-zinc-100 p-2 border-b border-gray-400 top-0 ">
        <div  onClick={toggleDropdown} className="flex text-gray-700 hover:text-black">
          <button className="pl-2 font-bold">INBOX (ALL)</button>
          <svg
            className="mr-12 h-5 w-5 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {isOpen && (
        <div
          className="absolute top-6 right-60 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-2">
            <button
              onClick={() => handleOptionSelect("All")}
              className={`flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${
                selectedOption === "All" ? "text-black" : ""
              }`}
            >
              {selectedOption === "All" && (
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
              All
            </button>
            <button
              onClick={() => handleOptionSelect("Unread")}
              className={`flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${
                selectedOption === "Unread" ? "text-black" : ""
              }`}
            >
              {selectedOption === "Unread" && (
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
              Unread
            </button>
          </div>
          </div>
        )}

        <Link href="#">
          <p className="text-blue-300 ml-16">
            Mark all as read
          </p>
        </Link>
      </div>

      <Link href="/Stack Overflow for Teams">
        <div className="bg-zinc-100 py-4 hover:bg-slate-200 ">
          <div className="flex justify-between">
            <Image
              className="ml-3"
              src="/s-icon.svg"
              alt="Logo"
              width="20"
              height="20"
              priority
            />
            <p className="mr-20 text-gray-700">welcome</p>
            <p className="text-gray-700">Dec 25,2024 at 17:29</p>
            <Link href="#">
              <MdOutlineForwardToInbox className="mr-3" />
            </Link>
          </div>
          <h1 className="text-gray-600 px-10 leading-5 pt-1">
            Welcome to Stack Overflow! Take the 2-minute site tour to earn your
            first badge.
          </h1>
        </div>
      </Link>
      <p className="border-t-2 border-gray-300 text-blue-600 text-center pt-2">Go to full inbox</p>
    </div>
  );
}
