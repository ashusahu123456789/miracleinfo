import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import CoursePage39 from './pages/CoursePage39';
import CoursePage from './pages/CoursePage';
import 'aos/dist/aos.css';
import PureCounter from '@srexi/purecounterjs';

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
import Course3DSlideshow from './components/Course3DSlideshow';

import Career from './components/Career';
import JobSearch from './pages/JobSearch';  // Added import for JobSearch

// Route Components (Pages)
import LearningSearchResults from './components/LearningSearchResults';
import LearningMaterialPopup from './components/LearningMaterialPopup';
import Products from './components/Products/Products';
import { useNavigate } from 'react-router-dom';

import ProductPopup from './components/Products/ProductPopup';
import productData from './components/Products/productData';

function HomePage() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isLearningMaterialOpen, setIsLearningMaterialOpen] = React.useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const [popupVisible, setPopupVisible] = React.useState(false);
  const [selectedProductId, setSelectedProductId] = React.useState(null);
  const [popupImageIndex, setPopupImageIndex] = React.useState(0);

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

  // New useEffect to handle click outside mobile nav to close it
  React.useEffect(() => {
    if (!isMobileNavOpen) return;

    const handleClickOutside = (event) => {
      const navmenu = document.getElementById('navmenu');
      if (navmenu && !navmenu.contains(event.target)) {
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileNavOpen]);

  const openLearningMaterial = () => {
    setIsLearningMaterialOpen(true);
  };

  const closeLearningMaterial = () => {
    setIsLearningMaterialOpen(false);
  };

  const handleLearningMaterialNext = (data) => {
    // Validate email or phone format
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRegex = /^\+?[\d\s\-().]{7,20}$/;
    if (!emailRegex.test(data.contactInfo) && !phoneRegex.test(data.contactInfo)) {
      alert('Please enter a valid phone number or email address.');
      return;
    }
    // Removed validation for empty selections to remove popup alert
    /*
    if (!data.selectedMaterials.length || !data.selectedPreferences.length) {
      alert('Please select at least one item from each question.');
      return;
    }
    */
    // Close popup and navigate to LearningSearchResults page with data
    setIsLearningMaterialOpen(false);
    navigate('/LearningSearchResults', { state: { searchData: data } });
  };

  const onMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const openProductPopup = (productId, imageIndex = 0) => {
    setSelectedProductId(productId);
    setPopupImageIndex(imageIndex);
    setPopupVisible(true);
  };

  const closeProductPopup = () => {
    setPopupVisible(false);
    setSelectedProductId(null);
    setPopupImageIndex(0);
  };

  return (
    <>
      <Header
        isScrolled={isScrolled}
        onOpenLearningMaterial={openLearningMaterial}
        isMobileNavOpen={isMobileNavOpen}
        onMobileNavToggle={onMobileNavToggle}
      />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <Course3DSlideshow onProductClick={openProductPopup} />
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
      {popupVisible && selectedProductId && (
        <ProductPopup
          visible={popupVisible}
          onClose={closeProductPopup}
          product={productData[selectedProductId]}
          selectedImageIndex={popupImageIndex}
        />
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

    new PureCounter();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LearningSearchResults" element={<LearningSearchResults />} />
        {/* Add more routes here if needed */}
        <Route path="/course/39" element={<CoursePage39 />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/jobsearch" element={<JobSearch />} />
        <Route path="/products/:id" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
