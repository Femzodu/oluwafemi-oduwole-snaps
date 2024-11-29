import React from "react";
import "./Gallery.scss";
import Photograph from "../Photograph/Photograph";
import photoData from "../../data/photos.json";

const Gallery = ({ selectedFilters }) => {
  let filteredPhotos = photoData;

  if (selectedFilters.size > 0) {
    filteredPhotos = photoData.filter((photo) =>
      photo.tags.some((tag) => selectedFilters.has(tag))
    );
  }

  return (
    <div className="gallery">
      {filteredPhotos.map((photo, index) => (
        <Photograph key={index} photo={photo} />
      ))}
    </div>
  );
};

export default Gallery;
