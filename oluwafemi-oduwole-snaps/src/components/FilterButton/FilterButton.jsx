import React from "react";
import "./FilterButton.scss";

const FilterButton = ({ tags, selectedFilters, onFilterToggle }) => {
  return (
    <div className="filter">
      <h2 className="filter__header">Filters</h2>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onFilterToggle(tag)}
          className={`filter__button ${
            selectedFilters.has(tag) && "filter__button--active"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterButton;
