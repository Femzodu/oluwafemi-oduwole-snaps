import "./App.scss";
import Header from "./components/Header/Header";
import Mission from "./components/Mission/Mission";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="app">
      <Header />
      <Mission />
      <Gallery />
    </div>
  );
}

export default App;
