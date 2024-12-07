import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import PhotoDetails from "./pages/PhotoDetails/PhotoDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <main className="app__content">
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<PhotoDetails />} path="/photos/:id" />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
