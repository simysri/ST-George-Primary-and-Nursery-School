import React from 'react';
import SidebarContact from './components/SidebarContact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header-responsive';

import Home from './pages/home';
import About from './pages/about';
import VisionMission from './pages/vissionmission';
import Teachers from './pages/teachers';
import Transport from './pages/transport';
import Facilities from './pages/facilities';
import Extracurricular from './pages/extracurricular';
import KinderGarten from './pages/kindergarden';
import Primary from './pages/primary';
import Courses from './pages/courses';

import Exercise from './pages/exercise';
import Games from './pages/games';
import SpecialCoaching from './pages/specialcoaching';
import SportsOpportunity from './pages/sportsopportunity';
import HealthAndSports from './pages/healthandsports';
import Secondary from './pages/secondary'; 
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import Gallery from './pages/gallery';
import VideoGallery from './pages/videogallery';
import Contact from './pages/contact';
import Staffs from './pages/staffs';
import ScrollToTop from './components/scrolltotop';
import SidebarContact from './components/SidebarContact';

const Test = () => <div>Test Route Works</div>;

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
            <Route path="/courses" element={<Courses />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/games" element={<Games />} />
            <Route path="/specialcoaching" element={<SpecialCoaching />} />
            <Route path="/sportsopportunity" element={<SportsOpportunity />} />
            <Route path="/secondary" element={<Secondary />} /> 
            <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/video-gallery" element={<VideoGallery />} />
            <Route path="/healthandsports" element={<HealthAndSports />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/staffs" element={<Staffs />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
