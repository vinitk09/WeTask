import React, { useState } from "react";
import Image from "next/image";
import "./Herosection.css";
import chair from "../assets/Location Cheese big picture 1.png";
import b from "../assets/bright.png";
import lb from "../assets/lessbright.png";
import vlb from "../assets/verylessbright.png";
import vvlb from "../assets/veryverylessbright.png";
import { relative } from "path";

const Herosection = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="hero-section-container">
      {/* Header Area */}
      <div className="navbar-below-text-page">
        <div className="flex-container">
          <div className="home-text">Home</div>
          <div className="dot">•</div>
          <div className="art-text">Art de la table</div>
        </div>
      </div>

      <div className="hero-content">
        {/* Image Area with Overlay Cards */}
        <div className="image-container">
          {/* Overlay Cards */}
          <div className="overlay-cards">
            <div className="card">
              <Image
                src={b}
                alt="Small Image 1"
                width={40}
                height={40}
                className="card-image"
              />
            </div>
            <div className="card">
              <Image
                src={lb}
                alt="Small Image 2"
                width={40}
                height={40}
                className="card-image"
              />
            </div>
            <div className="card">
              <Image
                src={vlb}
                alt="Small Image 3"
                width={40}
                height={40}
                className="card-image"
              />
            </div>
            <div className="card">
              <Image
                src={vvlb}
                alt="Small Image 3"
                width={40}
                height={40}
                className="card-image"
              />
            </div>
          </div>
          {/* Main Image */}
          <Image
            src={chair}
            alt="Hero Image"
            width={552}
            height={552}
            className="hero-image"
          />
          {/* Description Below Image */}
          <div className="image-description-below">
            <h4 className="description-heading">Description produit</h4>
            <p>
              Festi vous propose à la location un/une "Jewel – grand
              couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce
              (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou
              du personnel, ce produit a fait l'objet d'une sélection rigoureuse
              par notre équipe. Il est en location chez nous sous la référence
              "VAJGC". Nous sommes à votre disposition pour que les événements
              de nos clients, même en last-minute, soient toujours une réussite.
              Vous pourrez trouver tout une série d'autre produit à louer de ce
              type dans la catégorie "Art de la Table".
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="details-container">
          <h1 className="image-title">Cheese – appareil à raclette 1/2 roue</h1>
          <p className="image-price">
            $120.00 <span className="pieces">/pièce</span>
          </p>
          <p className="dimensions">
            <i className="ri-ruler-line dimension-icon"></i>
            <span className="dimension-text">
              20<sup>cm</sup>
            </span>
            <i className="ri-notification-off-line dimension-icon"></i>
            <span className="dimension-text">
              50<sup>cm</sup>
            </span>
          </p>

          <p className="image-description">
            Location appareil à raclette - Raclette traditionnelle 1/2 roue
            <span>Réglable en hauteur</span>
            <span> Appareil à raclette professionnel</span>
            <span> Boîtier de chauffe horizontal réglable en hauteur </span> 
            <span>220V</span>
            <span> 900W</span>
          </p>

          {/* Buttons Section */}
          <hr
            style={{
              position: "relative",
              top: "235px",
            }}
          />
          <div className="buttons-container">
            <div className="quantity-control">
              <button className="quantity-btn" onClick={handleDecrement}>
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button className="quantity-btn" onClick={handleIncrement}>
                +
              </button>
            </div>
            <button className="action-btn">Ajouter au panier</button>
          </div>
          {/* Vertical Buttons */}
          <div className="vertical-buttons">
            <button className="vertical-btn">
              <span className="button-text">Livraisons</span>
              <i className="ri-add-line button-icon"></i>
            </button>
            <hr />
            <button className="vertical-btn">
              <span className="button-text">Questions</span>
              <i className="ri-add-line button-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
