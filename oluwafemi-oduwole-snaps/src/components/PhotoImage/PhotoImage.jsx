import React from "react";

const PhotoImage = ({ photo }) => {
  return (
    <div className="photo-details__content">
      <img
        src={photo.photo}
        alt={photo.photoDescription}
        className="photo-details__image"
      />

      <div className="photo-details__info">
        <div className="photo-details__tags">
          {photo.tags.map((tag) => (
            <div key={tag} className="photo-details__tag">
              {tag}
            </div>
          ))}
        </div>
        <div className="photo-details__info">
          <div>{photo.likes} likes</div>
          <time dateTime={photo.timestamp}>
            {new Date(photo.timestamp).toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })}
          </time>
        </div>
        <div>Photo by {photo.photographer}</div>
      </div>
    </div>
  );
};

export default PhotoImage;
