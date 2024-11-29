import { useState } from "react";
import "./Header.scss";
import filter from "../../assets/images/Filter.svg";
import FilterButton from "../FilterButton/FilterButton";
import tagData from "../../data/tags.json";

const Header = ({ selectedFilters, onFilterToggle }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="header">
      <div className="brand">Snaps</div>
      <div className="header__filter">
        <button
          className="header__button"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filter
          <img
            className="header__button--image"
            src={filter}
            alt="filter-icon"
          />
        </button>

        {showFilters && (
          <FilterButton
            tags={tagData}
            selectedFilters={selectedFilters}
            onFilterToggle={onFilterToggle}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
