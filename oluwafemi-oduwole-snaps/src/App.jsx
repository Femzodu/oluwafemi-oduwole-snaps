import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import PhotoDetails from "./components/PhotoDetails/PhotoDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<PhotoDetails />} path="/photos/:id" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
