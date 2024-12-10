import React from "react";
import Link from "next/link";
import logo from "../assets/logo.png";
import "./Footer.css"; // Import CSS for styling
import Image from "next/image";
const Footer = () => {
  return (
    <div className="footer">
      {/* Image Section */}
      <div className="image-footer">
        <Image
          src={logo}
          alt="Footer Image"
          width={133}
          height={65}
          //   className="footer-image"
        />
      </div>
      <div className="quick-links">
        {/* Quick Links Heading */}
        <h3 className="quick-links-title">INFOS PRATIQUES</h3>

        {/* Quick Links List */}
        <ul className="quick-links-list">
          <li>
            <Link href="/about" className="quick-link">
              À propos
            </Link>
          </li>
          <li>
            <Link href="/services" className="quick-link">
              Livraisons & Reprises
            </Link>
          </li>
          <li>
            <Link href="/contact" className="quick-link">
              Mode d’emploi
            </Link>
          </li>
          <li>
            <Link href="/blog" className="quick-link">
              F.A.Q
            </Link>
          </li>
        </ul>
      </div>
      <div className="quick-links">
        {/* Quick Links Heading */}
        <h3 className="quick-links-title">LÉGAL</h3>

        {/* Quick Links List */}
        <ul className="quick-links-list">
          <li>
            <Link href="/about" className="quick-link">
              Mentions légales
            </Link>
          </li>
          <li>
            <Link href="/services" className="quick-link">
              CGU
            </Link>
          </li>
          <li>
            <Link href="/contact" className="quick-link">
              CGV
            </Link>
          </li>
          <li>
            <Link href="/blog" className="quick-link">
              Politique de confidentialité
            </Link>
          </li>
        </ul>
      </div>
      <div className="quick-links">
        {/* Quick Links Heading */}
        <h3 className="quick-links-title">MON COMPTE</h3>

        {/* Quick Links List */}
        <ul className="quick-links-list">
          <li>
            <Link href="/about" className="quick-link">
              Accéder à mon compte
            </Link>
          </li>
          <li>
            <Link href="/services" className="quick-link">
              Ma liste d’envie
            </Link>
          </li>
          <li>
            <Link href="/contact" className="quick-link">
              Créer un compte
            </Link>
          </li>
          <li>
            <Link href="/blog" className="quick-link">
              Mot de passe oublié
            </Link>
          </li>
        </ul>
      </div>
      <div className="social-media">
        <h4 className="social-media-title">NOUS SUIVRE</h4>
        <div className="icon-logo">
          <i className="ri-twitter-fill icon"></i>
          <i className="ri-instagram-line icon"></i>
          <i className="ri-linkedin-fill icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
