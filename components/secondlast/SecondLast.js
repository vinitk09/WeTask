import React from "react";
import "./SecondLast.css";
import t from "../assets/table.jpg";
import Image from "next/image";
const SecondLast = () => {
  return (
    <div className="second-last-container">
      {/* Left Div */}
      <div className="left-div">
        <Image
          src={t}
          width={700}
          height={300}
          alt="Left Side"
          className="left-image"
        />
      </div>

      {/* Right Div */}
      <div className="right-div">
        <h2 className="image-name">
          S'inscrire & economiser <span>10%</span>
        </h2>
        <p className="image-description">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway
          job due harvest most opportunity didn't. Yet busy any meeting shark
          light marginalised 4-blocker message. Productize corporate nail caught
          synergy highlights lunch. Company another pushback items dear or any.
        </p>
        <div className="email-section">
          <input
            type="email"
            placeholder="john@doe.com"
            className="email-input"
          />
          <button className="email-button">S’inscrire &rarr;</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SecondLast;
