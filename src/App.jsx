import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import CTASection from './components/CTASection';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import NotFound from './components/NotFound';
import './css/style.css';

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname.replace('/', '');
    if (id && id !== 'pricing') { // Don't scroll to "pricing" ID on home page
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (!id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <div id="about"><About /></div>
      <div id="education"><Education /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="experience"><Experience /></div>
      <div id="services"><Services /></div>
      <CTASection />
      <div id="testimonials"><Testimonials /></div>
      <div id="achievements"><Achievements /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
};

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/hero" element={<MainLayout />} />
        <Route path="/about" element={<MainLayout />} />
        <Route path="/education" element={<MainLayout />} />
        <Route path="/skills" element={<MainLayout />} />
        <Route path="/projects" element={<MainLayout />} />
        <Route path="/experience" element={<MainLayout />} />
        <Route path="/services" element={<MainLayout />} />
        <Route path="/testimonials" element={<MainLayout />} />
        <Route path="/achievements" element={<MainLayout />} />
        <Route path="/contact" element={<MainLayout />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;