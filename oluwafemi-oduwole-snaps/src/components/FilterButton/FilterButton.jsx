import "./FilterButton.scss";

const FilterButton = ({ tags, selectedFilters, onFilterToggle }) => {
  return (
    <div className="filter">
      <div>
        <h2 className="filter__header">Filters</h2>
      </div>
      <div className="filter__tags">
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
    </div>
  );
};

export default FilterButton;
