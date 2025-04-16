import React from "react";
import Header from "./Header";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { RxQuestionMarkCircled } from "react-icons/rx";

const InterfaceB = () => {
  return (
    <>
      <Header />
      <section className="py-16 px-36 mb-16">
        <h1>Cours WebStatique - Lundi 14 Avril : Matin</h1>
        <h2>Salle 202 avec Mr Dupont</h2>
        <div className="w-2/3">
          {/* premier quesiton */}
          <div className="">
            <div className="flex">
              <RxQuestionMarkCircled />
              <p>
                <strong>Question :</strong> This is the question
              </p>
            </div>
            <textarea
              name=""
              id=""
              className="border rounded-md border-primary w-full"
            ></textarea>
          </div>
          {/* deuxieme quesiton  */}
          <div>
            <div className="flex">
              <div>
                <RxQuestionMarkCircled />
                <p>
                  <strong>Question :</strong> This is the question
                </p>
              </div>
            </div>
            <div className="flex text-primary">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InterfaceB;
