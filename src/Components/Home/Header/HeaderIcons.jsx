import React, { useState } from "react";
import { FaListAlt } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { HiMiniInbox } from "react-icons/hi2";
import { IoIosSearch, IoMdHelpCircle } from "react-icons/io";
import Link from "next/link";
import MessageIcon from "./MessageIcon";

export default function HeaderIcons() {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="relative w-full">
        <IoIosSearch
          size={30}
          className="absolute top-1.5 left-2 text-gray-600"
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-10 py-1.5 border border-gray-400 outline-blue-800 outline-8  rounded-lg"
        />
      </div>
      <div className="flex gap-4 px-6">
        <Link href="/profile" className="hover:bg-gray-200 ">
          <img
            src="https://www.gravatar.com/avatar/7c9cadaed57b781308369df8d0f3186f?s=48&d=identicon&r=PG&f=y&so-version=2"
            className="h-7 mx-2.5 rounded-md"
          ></img>
        </Link>
        <HiMiniInbox
        onClick={() => setIsMessageVisible(!isMessageVisible)}
          size={28}
          className="text-gray-600 hover:bg-gray-100 hover:text-black"
        />
        {isMessageVisible && <MessageIcon />}
        <GrAchievement
          size={22}
          className="text-gray-600 hover:bg-gray-100 hover:text-black"
        />
        <IoMdHelpCircle
          size={26}
          className="text-gray-600 hover:bg-gray-100 hover:text-black"
        />
        <FaListAlt
          size={23}
          className="text-gray-600 hover:bg-gray-200 hover:text-black"
        />
      </div>
    </div>
  );
}
