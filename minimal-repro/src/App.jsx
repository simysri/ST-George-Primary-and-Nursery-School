import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Courses = () => (
  <div>
    <h1>Courses Page</h1>
    <p>This is the courses page content.</p>
  </div>
);

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/courses">Go to Courses</Link>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
