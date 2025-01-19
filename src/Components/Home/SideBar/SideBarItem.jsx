import React from "react";

export default function SideBarItem() {
  return (
    <ul>
      <li className="flex items-center gap-5 flex-col">
        <a href="#">Home</a>
        <a href="#">questions</a>
        {/* And more... */}
      </li>
    </ul>
  );
}
