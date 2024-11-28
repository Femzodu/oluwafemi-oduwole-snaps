import React from "react";
import "./Gallery.scss";
import Photograph from "../Photograph/Photograph";
import photoData from "../../data/photos.json";

const Gallery = () => {
  return (
    <div className="gallery">
      {photoData.map((photo, index) => (
        <Photograph key={index} photo={photo} />
      ))}
    </div>
  );
};

export default Gallery;
