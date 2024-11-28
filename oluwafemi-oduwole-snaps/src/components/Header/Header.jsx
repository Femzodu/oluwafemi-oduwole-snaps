import React from "react";
import "./Header.scss";
import filter from "../../assets/images/Filter.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="wordmark__text">Snaps</div>
      <button className="header__button">
        Filters
        <img
          className="header__button--image"
          src={filter}
          alt="filter-image"
        />
      </button>
    </div>
  );
};

export default Header;
