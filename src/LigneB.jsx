import React from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

const LigneC = () => {
  return (
    <div className="flex gap-x-20 px-8 py-3 border-b border-gray-800">
      <div>
        <RiCheckboxBlankCircleLine />
      </div>
      <p>Nom Prénom</p>
      <p>B3 Dev</p>
      <p>14/05/2024</p>
    </div>
  );
};

export default LigneC;
