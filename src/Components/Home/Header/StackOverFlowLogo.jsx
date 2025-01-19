import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function StackOverFlowLogo() {
  return (
<div className="hover:bg-gray-200 hover:rounded-md mr-2">
<Link href="/" >
      <div>
        <Image
          src="/SVG.svg"
          alt="Logo"
          width="420"
          height="30"
          priority
        />
      </div>
    </Link>
</div>
  );
}
