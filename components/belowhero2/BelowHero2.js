import React from "react";
import "./BelowHero2.css";
import Image from "next/image";

import cc from "../assets/card.png";
const BelowHero2 = () => {
  return (
    <div className="below-hero-container">
      <div className="heading">
        <span className="head1">Ces produits pourraient vous intéresser</span>
        <span className="head2">Voir toute la collection</span>
      </div>
      <div className="card-section">
        <div className="cards cards2 card1">
          <div className="image">
            <Image
              src={cc}
              alt="Image not Found"
              width={500}
              height={362}
              className="image"
            />
          </div>
          <div className="image-description">
            <p className="image-description-p1">
              <span className="title">Title</span>
              <span className="image-price">
                0<sup>€</sup>
              </span>
            </p>
            <p className="image-description-p2">
              <span className="image-price-below-title1">0,35€/Pièce </span>
              <span className="image-price-below-title2">· RÉF : VABGN5</span>
              <span className="span-button">20 pièces</span>
            </p>
          </div>
        </div>
        <div className="cards cards2 card1">
          <div className="image">
            <Image
              src={cc}
              alt="Image not Found"
              width={500}
              height={362}
              className="image"
            />
          </div>
          <div className="image-description">
            <p className="image-description-p1">
              <span className="title">Title</span>
              <span className="image-price">
                0<sup>€</sup>
              </span>
            </p>
            <p className="image-description-p2">
              <span className="image-price-below-title1">0,35€/Pièce </span>
              <span className="image-price-below-title2">· RÉF : VABGN5</span>
              <span className="span-button">20 pièces</span>
            </p>
          </div>
        </div>{" "}
        <div className="cards cards2 card1">
          <div className="image">
            <Image
              src={cc}
              alt="Image not Found"
              width={506} // New width
              height={400} // New height
              className="image"
            />
          </div>
          <div className="image-description">
            <p className="image-description-p1">
              <span className="title">Title</span>
              <span className="image-price">
                0<sup>€</sup>
              </span>
            </p>
            <p className="image-description-p2">
              <span className="image-price-below-title1">0,35€/Pièce </span>
              <span className="image-price-below-title2">· RÉF : VABGN5</span>
              <span className="span-button">20 pièces</span>
            </p>
          </div>
        </div>{" "}
        {/* <div className="cards card1">
          <div className="image">
            <Image
              src={cc}
              alt="Image not Found"
              width={330}
              height={362}
              className="image"
            />
          </div>
          <div className="image-description">
            <p className="image-description-p1">
              <span className="title">Title</span>
              <span className="image-price">
                0<sup>€</sup>
              </span>
            </p>
            <p className="image-description-p2">
              <span className="image-price-below-title1">0,35€/Pièce </span>
              <span className="image-price-below-title2">· RÉF : VABGN5</span>
              <span className="span-buttton">20 pièces</span>
            </p>
          </div>
        </div>{" "} */}
        {/* <div className="cards"></div> */}
      </div>
    </div>
  );
};

export default BelowHero2;
