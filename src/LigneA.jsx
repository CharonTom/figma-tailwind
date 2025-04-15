import React from "react";
import { FaEye } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const LigneA = () => {
  return (
    <div className="flex gap-x-4 py-4">
      <p>Nom + Prénom du stagiaire</p>
      <div className="flex text-xs gap-x-4">
        <div className="flex flex-col items-center">
          <FaCheck className="text-green-500" />
          signé
        </div>
        <div className="flex flex-col items-center">
          <IoClose className="text-red-500" />
          retiré
        </div>
        <div className="flex flex-col items-center">
          <FaEye />
          voir signature
        </div>
      </div>

      <button className="btn-primary">Déclarer Absent</button>
      <button className="btn-secondary">Signer Manuellement</button>
    </div>
  );
};

export default LigneA;
