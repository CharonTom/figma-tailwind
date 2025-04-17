import React from "react";
import Header from "../components/Header";
import { CiUser } from "react-icons/ci";
import { AiOutlineSignature } from "react-icons/ai";
import LigneB from "../components/LigneB";

const InterfaceB = () => {
  return (
    <>
      <Header />
      <section className="py-8 px-36 mb-16">
        <h1>Cours WebStatique - Lundi 14 Avril : Matin</h1>
        <h2 className="mb-16">Salle 202 avec Mr Dupont</h2>
        <div className="flex justify-between item-start">
          {/* Partie Liste des élèves */}
          <div>
            <div className="flex-col gap-x-1">
              <div className="flex items-center gap-x-1">
                <CiUser className="text-3xl" />
                <h3 className="">Liste des élèves</h3>
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
            <div className="bg-pink-100 w-[450px] h-[250px] border rounded-xl flex-center text-[30px] text-gray-500">
              Signez ici...
            </div>
            <button className="btn-green w-full my-2 rounded-md">
              Valider
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default InterfaceB;
