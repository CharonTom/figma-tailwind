import React from "react";
import Header from "../components/Header";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { RxQuestionMarkCircled } from "react-icons/rx";

const InterfaceB = () => {
  return (
    <>
      <Header />
      <section className="py-8 px-36 mb-16">
        <h1>Cours WebStatique</h1>
        <h2 className="mb-16">Salle 202 avec Mr Dupont</h2>
        <div className="w-2/3">
          {/* premier quesiton */}
          <div className="my-8">
            <div className="flex items-center my-2">
              <RxQuestionMarkCircled className="text-blue-500 m-1" />
              <p>
                <strong>Question :</strong> Quel élément HTML as-tu trouvé le
                plus facile à comprendre ?
              </p>
            </div>
            <textarea
              name=""
              id=""
              className="border rounded-md border-primary w-full h-[92px]"
            ></textarea>
          </div>
          {/* deuxieme quesiton  */}
          <div className="my-8">
            <div className="flex items-center my-2">
              <RxQuestionMarkCircled className="text-blue-500 m-1" />
              <p>
                <strong>Question :</strong> Quel élément HTML as-tu trouvé le
                plus facile à comprendre ?
              </p>
            </div>
            <div className="flex text-primary">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <button className="btn-green mt-4 rounded-md">Valider</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default InterfaceB;
