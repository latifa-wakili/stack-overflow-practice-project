import Link from "next/link";
import { useState } from "react";
import DropDown from "./DropDown";
import StackOverFlowLogo from "./StackOverFlowLogo";
import HeaderIcons from "./HeaderIcons";

export default function Header() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  return (
    <header className="bg-white border-t-4 border-b border-b-gray-300 sticky top-0 z-50 border-t-orange-500 py-0.5">
      <div className="flex items-center justify-between w-full py-0.5">
        <div className="flex items-center  w-1/6gap-3 ml-1n">
          {/* Logo */}
          <StackOverFlowLogo />
          <ul className="relative flex gap-6 text-gray-500">
            <li>
              <Link
                href=""
                onClick={() => setIsTextVisible(!isTextVisible)}
                className="active:bg-orange-500 px-4 py-2 hover:bg-gray-200 hover:rounded-full "
              >
                Products
                {isTextVisible && <DropDown />}
              </Link>
            </li>

            <li>
              <Link
                href="/OverflowAI"
                className="px-4 py-2 hover:bg-gray-200 hover:rounded-full"
              >
                OverflowAI
              </Link>
            </li>
          </ul>
        </div>
        {/* HeaderIcons */}
  <div className="w-full">
  <HeaderIcons />
  </div>
      </div>
    </header>
  );
}
