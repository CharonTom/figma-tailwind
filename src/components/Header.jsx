import React from "react";
import profilPic from "../assets/profil-pic.jpg";

const Header = () => {
  return (
    <header className="px-6 py-2 bg-primary text-white flex-between text-sm">
      <div className="flex-center gap-x-4">
        <div className="flex-center">
          <img src={profilPic} alt="logo" className="w-12 h-12 rounded-full" />
        </div>
        <a>Mon Profil</a>
      </div>
      <div className="flex gap-x-4">
        <a>Planning</a>
        <a>Progression</a>
        <a>Se déconnecter</a>
      </div>
    </header>
  );
};

export default Header;
