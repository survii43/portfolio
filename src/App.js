import React from 'react';
import Home from './components/Home';
import Description from './components/Description';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Home />
      <Description />
      <TechnicalSkills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
