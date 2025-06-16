import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Page Components

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import StatsSection from './components/StatsSection';
import DetailsSection from './components/DetailsSection';
import GallerySection from './components/GallerySection';
// Removed GallerySlideshow import to avoid unused variable warning
import TeamSection from './components/TeamSection';
import MOUCarousel from './components/MOUCarousel';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import AboveFooter from './components/AboveFooter';
import Footer from './components/Footer';
// Removed ScrollTop and Preloader imports


// Route Components (Pages)
import LearningSearchResults from './components/LearningSearchResults';
import LearningMaterialPopup from './components/LearningMaterialPopup';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isLearningMaterialOpen, setIsLearningMaterialOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 100);
    };

    window.addEventListener('scroll', handleScroll);
    // Check scroll position on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openLearningMaterial = () => {
    setIsLearningMaterialOpen(true);
  };

  const closeLearningMaterial = () => {
    setIsLearningMaterialOpen(false);
  };

  const handleLearningMaterialNext = (data) => {
    // Validate email format
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(data.contactInfo)) {
      alert('Please enter a valid email address.');
      return;
    }
    // Validate at least one item selected from each question
    if (!data.selectedMaterials.length || !data.selectedPreferences.length) {
      alert('Please select at least one item from each question.');
      return;
    }
    // Close popup and navigate to LearningSearchResults page with data
    setIsLearningMaterialOpen(false);
    navigate('/LearningSearchResults', { state: { searchData: data } });
  };

  return (
    <>
      <Header isScrolled={isScrolled} onOpenLearningMaterial={openLearningMaterial} />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <StatsSection />
      <DetailsSection />
      <GallerySection />
      {/* Removed standalone GallerySlideshow to avoid duplication */}
      <TeamSection />
      <MOUCarousel />
      <FaqSection />
      <ContactSection />
      <AboveFooter />
      <Footer />
      {isLearningMaterialOpen && (
        <LearningMaterialPopup onClose={closeLearningMaterial} onNext={handleLearningMaterialNext} />
      )}
      {/* Removed ScrollTop and Preloader components */}
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LearningSearchResults" element={<LearningSearchResults />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
