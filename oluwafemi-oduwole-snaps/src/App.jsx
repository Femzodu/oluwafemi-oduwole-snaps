import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import FilterButton from "./components/FilterButton/FilterButton";
import Mission from "./components/Mission/Mission";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import tagData from "./data/tags.json";

function App() {
  const [selectedFilters, setSelectedFilters] = useState(new Set());
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = (tag) => {
    const newFilters = new Set(selectedFilters);

    if (newFilters.has(tag)) {
      newFilters.delete(tag);
    } else {
      newFilters.add(tag);
    }

    setSelectedFilters(newFilters);
  };

  const handleFilterButtonClick = () => {
    if (isFilterOpen) {
      setSelectedFilters(new Set());
    }
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="app">
      <Header
        selectedFilters={selectedFilters}
        onFilterToggle={toggleFilter}
        isFilterOpen={isFilterOpen}
        onFilterButtonClick={handleFilterButtonClick}
      />

      <main className="app__content">
        {isFilterOpen && (
          <div className="filter">
            <FilterButton
              tags={tagData}
              selectedFilters={selectedFilters}
              onFilterToggle={toggleFilter}
            />
          </div>
        )}
        <div>
          <Mission />
          <Gallery selectedFilters={selectedFilters} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
