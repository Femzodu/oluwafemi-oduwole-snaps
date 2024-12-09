import { useEffect, useState } from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import FilterButton from "../../components/FilterButton/FilterButton";
import Mission from "../../components/Mission/Mission";
import Gallery from "../../components/Gallery/Gallery";
import api from "../../utils/api";

function HomePage() {
  const [selectedFilters, setSelectedFilters] = useState(new Set());
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const loadTags = async () => {
      try {
        const tagData = await api.fetchTags();
        setTags(tagData);
      } catch (error) {
        setError("Unable to retrieve filters");
        console.error(error);
      }
    };

    loadTags();
  }, []);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const photoData = await api.fetchPhotos();
        setPhotos(photoData);
      } catch (error) {
        setError("Unable to retrieve images");
        console.error(error);
      }
    };

    loadPhotos();
  }, []);

  const getFilteredPhotos = () => {
    if (selectedFilters.size === 0) {
      return photos;
    } else {
      return photos.filter((photo) =>
        photo.tags.some((tag) => selectedFilters.has(tag))
      );
    }
  };

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
    <div className="">
      <Header
        isFilterOpen={isFilterOpen}
        onFilterButtonClick={handleFilterButtonClick}
      />

      <main className="app__layout">
        {isFilterOpen && (
          <FilterButton
            tags={tags}
            selectedFilters={selectedFilters}
            onFilterToggle={toggleFilter}
          />
        )}

        <div className="app__content">
          <Mission />
          <Gallery
            selectedFilters={selectedFilters}
            isFilterOpen={isFilterOpen}
            photos={photos}
          />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
