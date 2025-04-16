import React from "react";
import Header from "./Header";
import { CiUser } from "react-icons/ci";
import { AiOutlineSignature } from "react-icons/ai";
import LigneB from "./LigneB";

const InterfaceB = () => {
  return (
    <>
      <Header />
      <section className="p-12 px-36">
        <h1>Cours WebStatique - Lundi 14 Avril : Matin</h1>
        <h2>Salle 202 avec Mr Dupont</h2>
        <div className="flex-between">
          {/* Partie Liste des élèves */}
          <div>
            <div className="flex-col gap-x-1">
              <div className="mt-4 flex items-center gap-x-1">
                <CiUser className="text-4xl" />
                <h3 className="my-4">Liste des élèves</h3>
              </div>
              <div>
                <LigneB />
                <LigneB />
                <LigneB />
                <LigneB />
                <LigneB />
                <LigneB />
                <LigneB />
                <LigneB />
              </div>
            </div>
          </div>

          {/* Partie Signature */}
          <div>
            <div className="flex items-center gap-x-1">
              <AiOutlineSignature className="text-4xl" />
              <h3>Signatures</h3>
            </div>
            <div className="bg-pink-50 w-[450px] h-[250px] border rounded-xl flex-center">
              Signez ici...
            </div>
            <button className="btn-blue w-full my-2 bg-green-800 rounded-xl">
              Valider
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default InterfaceB;
