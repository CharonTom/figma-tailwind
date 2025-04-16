import React from "react";
import { FaEye } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const LigneAVariant = () => {
  return (
    <div className="w-[40%] flex-center gap-x-4 py-4 border-b border-gray-600">
      <div className="flex flex-col items-center">
        <FaCircleCheck className="text-green-500 text-2xl" />
      </div>
      <p>Nom Prénom</p>
      <div className="flex text-xs gap-x-4"></div>

      <button className="btn-red bg-[#E7730D]">Absence Déclaré</button>
      <div className="flex flex-col items-center">
        <FaEye className="text-3xl" />
      </div>
    </div>
  );
};

export default LigneAVariant;
