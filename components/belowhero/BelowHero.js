import React from "react";
import "./BelowHero.css";
import Image from "next/image";

import cc from "../assets/card.png";
const BelowHero = () => {
  return (
    <div className="below-hero-containerb">
      <div className="headingb">
        <span className="head1b">Articles similaires</span>
        <span className="head2b">Voir toute la collection</span>
      </div>
      <div className="card-sectionb">
        <div className="arrow arrow-left">
          <i className="ri-arrow-left-line"></i>
        </div>
        <div className="cardsb card1b">
          <div className="image-container">
            <Image
              src={cc}
              alt="Image not Found"
              width={332}
              height={332}
              className="imageb"
            />
          </div>
          <div className="image-descriptionb">
            <p className="image-description-p1b">
              <span className="titleb">Title</span>
              <span className="image-priceb">
                0<sup>€</sup>
              </span>
            </p>
            <p className="image-description-p2b">
              <span className="image-price-below-title1b">0,35€/Pièce </span>
              <span className="image-price-below-title2b">· RÉF : VABGN5</span>
              <span className="span-butttonb">20 pièces</span>
            </p>
          </div>
        </div>
        <div className="cardsb card1b">
          <div className="image-container">
            <Image
              src={cc}
              alt="Image not Found"
              width={332}
              height={332}
              className="imageb"
            />
          </div>
          <div className="image-descriptionb">
            <p className="image-description-p1b">
              <span className="titleb">Title</span>
              <span className="image-priceb">
                0<sup>€</sup>
              </span>
            </p>
            <p className="image-description-p2b">
              <span className="image-price-below-title1b">0,35€/Pièce </span>
              <span className="image-price-below-title2b">· RÉF : VABGN5</span>
              <span className="span-butttonb">20 pièces</span>
            </p>
          </div>
        </div>
        <div className="cardsb card1b">
          <div className="image-container">
            <Image
              src={cc}
              alt="Image not Found"
              width={332}
              height={332}
              className="imageb"
            />
          </div>
          <div className="image-descriptionb">
            <p className="image-description-p1b">
              <span className="titleb">Title</span>
              <span className="image-priceb">
                0<sup>€</sup>
              </span>
            </p>
            <p className="image-description-p2b">
              <span className="image-price-below-title1b">0,35€/Pièce </span>
              <span className="image-price-below-title2b">· RÉF : VABGN5</span>
              <span className="span-butttonb">20 pièces</span>
            </p>
          </div>
        </div>
        <div className="cardsb card1b">
          <div className="image-container">
            <Image
              src={cc}
              alt="Image not Found"
              width={332}
              height={332}
              className="imageb"
            />
          </div>
          <div className="image-descriptionb">
            <p className="image-description-p1b">
              <span className="titleb">Title</span>
              <span className="image-priceb">
                0<sup>€</sup>
              </span>
            </p>
            <p className="image-description-p2b">
              <span className="image-price-below-title1b">0,35€/Pièce </span>
              <span className="image-price-below-title2b">· RÉF : VABGN5</span>
              <span className="span-butttonb">20 pièces</span>
            </p>
          </div>
        </div>
        {/* Repeat other cards here */}
        <div className="arrow arrow-right">
          <i className="ri-arrow-right-line"></i>
        </div>
      </div>
    </div>
  );
};

export default BelowHero;
