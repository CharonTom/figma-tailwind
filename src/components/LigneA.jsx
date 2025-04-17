import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const LigneA = () => {
  return (
    <div className="w-[55%] grid grid-cols-[40px_1fr_140px_140px] items-center justify-items-center gap-x-4 py-4 border-b border-gray-600">
      <IoMdCloseCircle className="w-7 h-7 text-red-400" />
      <p className="text-center">Nom Prénom</p>
      <button className="btn-red min-w-[120px]">Déclarer Absent</button>
      <button className="btn-blue min-w-[120px]">Signer Manuellement</button>
    </div>
  );
};

export default LigneA;
