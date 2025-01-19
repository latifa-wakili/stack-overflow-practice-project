import React from "react";
import AboutMain from "../Components/About/AboutMain";
import AboutHeaderMain from "../Components/About/AboutHeader/AboutHeaderMain";

/**
 * Team C:
 * Masouda Shams
 * Nooria Ehsani
 * Farhat Hamraz
 */

export default function About() {
  return (
    <div className="w-full">
      <AboutHeaderMain />
      <AboutMain />
      {/* Footer will go here */}
    </div>
  );
}
