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
    setSelectedFilters((selectedFilters) => {
      const newFilters = new Set();
      if (!selectedFilters.has(tag)) {
        newFilters.add(tag);
      }
      return newFilters;
    });
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

      <main className="app__layout">
        {isFilterOpen && (
          <FilterButton
            tags={tagData}
            selectedFilters={selectedFilters}
            onFilterToggle={toggleFilter}
          />
        )}
        <div className="app__content">
          <Mission />
          <Gallery
            selectedFilters={selectedFilters}
            isFilterOpen={isFilterOpen}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
