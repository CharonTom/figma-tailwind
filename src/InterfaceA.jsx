import React from "react";
import Header from "./Header";
import LigneA from "./LigneA";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const InterfaceA = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center">
        <div className="flex-center gap-x-18 p-4">
          <FaArrowLeft className="text-2xl " />
          <h1 className="">Lundi 14 Avril : Matin</h1>
          <FaArrowRight className="text-2xl" />
        </div>

        <button className="btn-primary">
          Partager le QR code de signature
        </button>
        <LigneA />
        <LigneA />
        <LigneA />
        <LigneA />
        <LigneA />
        <LigneA />
        <LigneA />
        <LigneA />
        <LigneA />
      </section>
    </>
  );
};

export default InterfaceA;
