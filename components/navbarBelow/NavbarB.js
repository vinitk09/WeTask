import React, { useState } from "react";
import "./NavbarB.css";

const NavbarB = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const texts = [
    "Art de la table",
    "Mobilier",
    "Nappage",
    "Matériel de salle",
    "Cuisine",
    "Barbecue",
    "Tente",
    "Chauffage",
    "Podium - Piste de danse",
    "Son et lumière",
    "Packs",
    "Consommables",
  ];

  return (
    <div className="navbar-below">
      {texts.map((text, index) => (
        <div
          key={index}
          className={`navbar-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
        >
          {text}
        </div>
      ))}
      <div
        className="underline"
        style={{
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      ></div>
    </div>
  );
};

export default NavbarB;
