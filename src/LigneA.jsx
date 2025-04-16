import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const LigneA = () => {
  return (
    <div className="w-[40%] flex-center gap-x-4 py-4 border-b border-gray-600">
      <div className="flex flex-col items-center">
        <IoMdCloseCircle className="text-red-400 text-3xl" />
      </div>
      <p>Nom Prénom</p>
      <div className="flex text-xs gap-x-4"></div>
      <button className="btn-red">Déclarer Absent</button>
      <button className="btn-blue">Signer Manuellement</button>
    </div>
  );
};

export default LigneA;
