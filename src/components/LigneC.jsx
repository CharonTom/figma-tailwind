import React from "react";
import { FaEye } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { BsPencilSquare } from "react-icons/bs";

const LigneC = () => {
  return (
    <div className="flex gap-x-20 px-8 py-2 border-b border-gray-800">
      <div>
        <BsPencilSquare />
      </div>
      <p>Nom Prénom</p>
      <p>Progression 27%</p>

      <button className="btn-blue">Envoyer un lien</button>
      {/* <button className="btn-secondary">Signer Manuellement</button> */}
    </div>
  );
};

export default LigneC;
