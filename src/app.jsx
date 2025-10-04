import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import VisionMission from './pages/vissionmission';
import Teachers from './pages/teachers';
import Transport from './pages/transport';
import Facilities from './pages/facilities';
import Extracurricular from './pages/extracurricular';
import KinderGarten from './pages/kindergarden';
import Primary from './pages/primary';
/* import Secondary from './pages/secondary'; */
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import Gallery from './pages/gallery';
import VideoGallery from './pages/videogallery';
import Contact from './pages/contact';
import ScrollToTop from './components/scrolltotop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/extracurricular" element={<Extracurricular />} />
            <Route path="/kindergarten" element={<KinderGarten />} />
            <Route path="/primary" element={<Primary />} />
            {/* <Route path="/secondary" element={<Secondary />} /> */}
            <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/video-gallery" element={<VideoGallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;