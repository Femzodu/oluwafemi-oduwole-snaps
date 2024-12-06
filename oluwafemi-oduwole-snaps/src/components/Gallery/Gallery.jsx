import React from "react";
import "./Gallery.scss";
import Photograph from "../Photograph/Photograph";

const Gallery = ({ selectedFilters, isFilterOpen, photos }) => {
  let filteredPhotos = photos;

  if (selectedFilters.size > 0) {
    filteredPhotos = photos.filter((photo) =>
      photo.tags.some((tag) => selectedFilters.has(tag))
    );
  }

  return (
    <div className={`gallery ${isFilterOpen ? "gallery--filtered" : ""}`}>
      {filteredPhotos.map((photo, index) => (
        <Photograph key={index} photo={photo} />
      ))}
    </div>
  );
};

export default Gallery;
