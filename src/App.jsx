import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./Layout/Contents/Home";
import Footer from "./Layout/Footer";
import MainGallery from "./Layout/Contents/MainGallery";
import MainPricing from "./Layout/Contents/MainPricing";
import MainClasses from "./Layout/Contents/MainClasses";
import Schedule from "./Layout/Contents/Schedule";
import Contact from "./Layout/Contents/Contact";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<MainGallery />} />
          <Route path="/pricing" element={<MainPricing />} />
          <Route path="/classes" element={<MainClasses />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
