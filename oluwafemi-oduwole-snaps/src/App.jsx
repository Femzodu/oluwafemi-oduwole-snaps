import "./App.scss";
import Header from "./components/Header/Header";
import Mission from "./components/Mission/Mission";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Mission />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
