import React from "react";
import Header from "../components/Header";
import LigneA from "../components/LigneA";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import LigneAVariant from "../components/LigneAVariant";

const InterfaceA = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center">
        <div className="flex-center gap-x-18">
          <FaArrowLeft className="text-4xl " />
          <h1 className="">Lundi 14 Avril : Matin</h1>
          <FaArrowRight className="text-4xl" />
        </div>

        <button className="btn-pink text-[20px] mb-16">
          Partager le QR code de signature
        </button>
        <div></div>
        <LigneA />
        <LigneA />
        <LigneAVariant />
        <LigneA />
        <LigneAVariant />
        <LigneA />
        <LigneA />
        <LigneA />
        <LigneA />
      </section>
    </>
  );
};

export default InterfaceA;
