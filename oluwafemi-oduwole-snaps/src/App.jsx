import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Mission from "./components/Mission/Mission";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  const [selectedFilters, setSelectedFilters] = useState(new Set());

  const toggleFilter = (tag) => {
    const newFilters = new Set(selectedFilters);

    if (newFilters.has(tag)) {
      newFilters.delete(tag);
    } else {
      newFilters.add(tag);
    }

    setSelectedFilters(newFilters);
  };

  return (
    <div className="app">
      <Header selectedFilters={selectedFilters} onFilterToggle={toggleFilter} />
      <Mission />
      <Gallery selectedFilters={selectedFilters} />
      <Footer />
    </div>
  );
}

export default App;
