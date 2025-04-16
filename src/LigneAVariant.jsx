import React from "react";
import { FaEye } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const LigneAVariant = () => {
  return (
    <div className="w-[55%] grid grid-cols-[40px_1fr_140px_140px] items-center justify-items-center gap-x-4 py-4 border-b border-gray-600">
      <FaCircleCheck className="w-6 h-6 text-green-500" />

      <p className="text-center">Nom Prénom</p>

      <button className="btn-red bg-[#E7730D] min-w-[120px]">
        Absence Déclaré
      </button>

      <FaEye className="w-6 h-6" />
    </div>
  );
};

export default LigneAVariant;
