import React from "react";
import "./Photograph.scss";

const Photograph = ({ photo }) => {
  return (
    <div className="photograph">
      <div className="photograph__image-container">
        <img className="photograph__image" src={photo.photo} alt="Photograph" />
        <p className="photograph__photographer">{photo.photographer}</p>
      </div>
      <div className="photograph__tag-list">
        {photo.tags.map((tag, index) => (
          <p key={index} className="photograph__tag">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Photograph;
