import React from "react";
import "./Service.css";
import Image from "next/image";
import tr from "../assets/group.png";

const Service = () => {
  return (
    <div className="service-container-tr">
      <div className="image-container-tr">
        <Image src={tr} alt="Centered Image" />
      </div>
    </div>
  );
};

export default Service;
