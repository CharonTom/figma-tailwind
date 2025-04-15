import React from "react";
import Header from "./Header";
import LigneC from "./LigneC";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const InterfaceC = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center">
        <div className="flex-center gap-x-18 p-4">
          <h1 className="">Suivis de formation : Sécurisation d'une API</h1>
        </div>

        <button className="btn-primary">Partager le QR code d'évalution</button>
        <div className="mt-8">
          <LigneC />
          <LigneC />
          <LigneC />
          <LigneC />
          <LigneC />
          <LigneC />
          <LigneC />
          <LigneC />
          <LigneC />
        </div>
      </section>
    </>
  );
};

export default InterfaceC;
