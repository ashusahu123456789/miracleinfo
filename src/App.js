import React, { useState, useEffect } from 'react';
import './App.css';
import AboveFooter from './AboveFooter';
import GallerySlideshow from './GallerySlideshow';
import LearningMaterialPopup from './LearningMaterialPopup';
import MOUCarousel from './MOUCarousel';

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLearningMaterialOpen, setIsLearningMaterialOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const openLearningMaterial = (e) => {
    e.preventDefault();
    setIsLearningMaterialOpen(true);
  };

  const closeLearningMaterial = () => {
    setIsLearningMaterialOpen(false);
  };
  
  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [isMobileNavOpen]);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }, []);

  useEffect(() => {
    if (window.PureCounter) {
      new window.PureCounter();
    }
  }, []);

 

  return (
    <div className={`${isMobileNavOpen ? 'mobile-nav-active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/perfectlogo.png" alt="logo" className="logo-large" />
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active">Home</a></li>
              <li><a href="#about">Company Profile</a></li>
              <li><a href="#features">Products</a></li>
              <li><a href="#stats">Clients</a></li>
              <li><a href="#team">Career</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#features" onClick={openLearningMaterial} style={{cursor: 'pointer'}}>Learning Material</a></li>
              <li className={`dropdown ${isServicesDropdownOpen ? 'dropdown-active' : ''}`}>
                <a href="#!" onClick={toggleServicesDropdown}>
                  <span>Services</span> <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul className={`dropdown-menu ${isServicesDropdownOpen ? 'dropdown-menu-active' : ''}`}>
                  <li><a href="#!">Dropdown 1</a></li>
                  <li><a href="#!">Dropdown 2</a></li>
                  <li><a href="#!">Dropdown 3</a></li>
                  <li><a href="#!">Dropdown 4</a></li>
                </ul>
              </li>

            </ul>
            <i
              className={`mobile-nav-toggle d-xl-none bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`}
              onClick={handleMobileNavToggle}
            />
          </nav>
        </div>
      </header>

      {/* Popup Modal for Learning Material */}
      {isLearningMaterialOpen && (
        <LearningMaterialPopup onClose={closeLearningMaterial} />
      )}
      <main className="main">
        <section id="hero" className="hero section dark-background">
          <div className="container">
            <div className="row gy-4 justify-content-between">
              <div className="col-lg-4 order-lg-last hero-imgn">
                <img src="assets/img/hero-bgni.png" className="img-fluid animated" alt="" />
              </div>
              <div className="col-lg-6  d-flex flex-column justify-content-center" data-aos="fade-in">
                <h1>Employee Satisfaction + Client Delight = <span>Success of Miracle Infosoft</span></h1>
                <p>We are a team of talented developers creating cutting-edge software solutions.</p>
                <div className="d-flex">
                  <a href="#about" className="btn-get-started  me-2">Company Profile</a>
                  <a href="#about" className="btn-get-started">Enquiry</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Miracle Infosoft</h2>
            <div><span>Company</span> <span className="description-title">Profile</span></div>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-5">
              <div className="col-lg-6 content" data-aos="fade-right">
                <h3>About Miracle Infosoft</h3>
                <p>Miracle Infosoft, a dedicated software development cell under the umbrella of Miracle IT, is committed to delivering cutting-edge software solutions tailored to meet the dynamic needs of modern businesses. As a part of the Miracle IT Group, we bring with us a legacy of excellence in IT services, education, and workforce solutions.</p>
                <p>At Miracle Infosoft, our core focus lies in designing, developing, and deploying robust, scalable, and user-centric software applications. Backed by a team of skilled professionals and the strategic guidance of our parent group, we ensure every solution we build aligns with industry standards and emerging technologies.</p>
              </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-image-container">
              
                <img src="assets/img/aboutfirst1.avif" className="img-fluid rounded about-image" alt="About Miracle Infosoft" />
             
                {/* <img src="assets/img/aboutfirst2.jpg" className="img-fluid rounded about-image" alt="About Miracle Infosoft" /> */}
              
            </div>
          </div>
            </div>
            <div className="row gy-5 mt-5">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="about-image-container">
                  <video src="assets/img/mission1.mp4" className="img-fluid rounded mission-video" alt="Our Mission" autoPlay loop muted />
                  {/* <img src="assets/img/mission2.png" className="img-fluid rounded about-image" alt="Our Mission" /> */}
                </div>
              </div>
              <div className="col-lg-6 content" data-aos="fade-left">
                <h3>Mission</h3>
                <p>To deliver innovative, scalable, and high-quality software solutions that drive digital transformation for our clients, while nurturing future-ready talent through practical, industry-aligned training. As a core unit of Miracle IT, we are committed to blending technology with impact, empowering businesses and individuals in the evolving digital world.</p>
              </div>
            </div>
            <div className="row gy-5 mt-5">
              <div className="col-lg-6 content" data-aos="fade-right">
                <h3>Vision</h3>
                <p>To be a leading software development cell recognized for excellence in technology, innovation, and talent development — fostering a future where our solutions and people drive progress across industries globally.</p>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="about-image-container">
                  {/* <video src="assets/img/vision1.mp4" className="img-fluid rounded vision-video" alt="Our vision" autoPlay loop muted /> */}
                  <img src="assets/img/vision2.png" className="img-fluid rounded about-image" alt="Our mission" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="features section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Technologies</h2>
            <div><span>Our</span> <span className="description-title">Technologies</span></div>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="features-item">
                  <i className="bi bi-eye" style={{ color: '#ffbb2c' }} />
                  <h3><a href="#!" className="stretched-link">Web Development</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="features-item">
                  <i className="bi bi-infinity" style={{ color: '#5578ff' }} />
                  <h3><a href="#!" className="stretched-link">Mobile First</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={300}>
                <div className="features-item">
                  <i className="bi bi-mortarboard" style={{ color: '#e80368' }} />
                  <h3><a href="#!" className="stretched-link">Cloud Solutions</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={400}>
                <div className="features-item">
                  <i className="bi bi-nut" style={{ color: '#e361ff' }} />
                  <h3><a href="#!" className="stretched-link">Dedicated Support</a></h3>
                </div>
              </div>{/* End Feature Item */}
              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={500}>
                <div className="features-item">
                  <i className="bi bi-shuffle" style={{ color: '#47aeff' }} />
                  <h3><a href="#!" className="stretched-link">Custom Software</a></h3>
                </div>
              </div>{/* End Feature Item */}
              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={600}>
                <div className="features-item">
                  <i className="bi bi-star" style={{ color: '#ffa76e' }} />
                  <h3><a href="#!" className="stretched-link">IT Training</a></h3>
                </div>
              </div>{/* End Feature Item */}
              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={700}>
                <div className="features-item">
                  <i className="bi bi-x-diamond" style={{ color: '#11dbcf' }} />
                  <h3><a href="#!" className="stretched-link">Upskilling Programs</a></h3>
                </div>
              </div>{/* End Feature Item */}
              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={800}>
                <div className="features-item">
                  <i className="bi bi-camera-video" style={{ color: '#4233ff' }} />
                  <h3><a href="#!" className="stretched-link">Global Clientele</a></h3>
                </div>
              </div>{/* End Feature Item */}
              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={900}>
                <div className="features-item">
                  <i className="bi bi-command" style={{ color: '#b2904f' }} />
                  <h3><a href="#!" className="stretched-link">Talent Development</a></h3>
                </div>
              </div>{/* End Feature Item */}
              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={1000}>
                <div className="features-item">
                  <i className="bi bi-dribbble" style={{ color: '#b20969' }} />
                  <h3><a href="#!" className="stretched-link">Digital Transformation</a></h3>
                </div>
              </div>{/* End Feature Item */}
              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={1100}>
                <div className="features-item">
                  <i className="bi bi-activity" style={{ color: '#ff5828' }} />
                  <h3><a href="#!" className="stretched-link">Impactful Solutions</a></h3>
                </div>
              </div>{/* End Feature Item */}
              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={1200}>
                <div className="features-item">
                  <i className="bi bi-brightness-high" style={{ color: '#29cc61' }} />
                  <h3><a href="#!" className="stretched-link">Future-Ready Talent</a></h3>
                </div>
              </div>{/* End Feature Item */}
            </div>
          </div>
        </section>{/* /Features Section */}
        {/* Stats Section */}
        <section id="stats" className="stats section light-background">  
          <div className="container section-title" data-aos="fade-up">
            <h2>Clients</h2>
            <div><span>Our</span> <span className="description-title">Clients</span></div>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-emoji-smile" />
                <div className="stats-item">
                  <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                  <p>Happy Clients</p>
                </div>
              </div>{/* End Stats Item */}
              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-journal-richtext" />
                <div className="stats-item">
                  <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
                  <p>Projects</p>
                </div>
              </div>{/* End Stats Item */}
              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-headset" />
                <div className="stats-item">
                  <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={1} className="purecounter" />
                  <p>Hours Of Support</p>
                </div>
              </div>{/* End Stats Item */}
              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-people" />
                <div className="stats-item">
                  <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                  <p>Hard Workers</p>
                </div>
              </div>{/* End Stats Item */}
            </div>
          </div>
        </section>{/* /Stats Section */}
        {/* Details Section */}
        <section id="details" className="details section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Details</h2>
            <div><span>Check Our</span> <span className="description-title">Details</span></div>
          </div>{/* End Section Title */}
          <div className="container">
            <div className="row gy-4 align-items-center features-item">
              <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={100}>
                <img src="assets/img/details-1.png" className="img-fluid" alt="Web Development" />
              </div>
              <div className="col-md-7" data-aos="fade-up" data-aos-delay={100}>
                <h3>Custom Software Development</h3>
                <p className="fst-italic">
                  We specialize in creating tailored software solutions that meet the unique needs of your business.
                </p>
                <ul>
                  <li><i className="bi bi-check" /><span> Scalable and robust application architecture.</span></li>
                  <li><i className="bi bi-check" /> <span>User-centric design and development.</span></li>
                  <li><i className="bi bi-check" /> <span>Agile development methodologies.</span></li>
                </ul>
              </div>
            </div>{/* Features Item */}
            <div className="row gy-4 align-items-center features-item">
              <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
                <img src="assets/img/details-2.png" className="img-fluid" alt="Mobile First Design" />
              </div>
              <div className="col-md-7 order-2 order-md-1" data-aos="fade-up" data-aos-delay={200}>
                <h3>IT Training and Upskilling</h3>
                <p className="fst-italic">
                  We are committed to nurturing the next generation of tech leaders through practical, industry-aligned training.
                </p>
                <p>
                  Our programs empower young minds with the skills and knowledge needed to succeed in the evolving digital world.
                </p>
              </div>
            </div>{/* Features Item */}
            <div className="row gy-4 align-items-center features-item">
              <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out">
                <img src="assets/img/details-3.png" className="img-fluid" alt="Cloud Integration" />
              </div>
              <div className="col-md-7" data-aos="fade-up">
                <h3>Digital Transformation</h3>
                <p>We help businesses transform their operations and services through innovative digital solutions.</p>
                <ul>
                  <li><i className="bi bi-check" /> <span>Modernizing legacy systems.</span></li>
                  <li><i className="bi bi-check" /><span> Implementing cutting-edge technologies.</span></li>
                  <li><i className="bi bi-check" /> <span>Driving growth and efficiency.</span></li>
                </ul>
              </div>
            </div>{/* Features Item */}
            <div className="row gy-4 align-items-center features-item">
              <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out">
                <img src="assets/img/details-4.png" className="img-fluid" alt="Dedicated Support" />
              </div>
              <div className="col-md-7 order-2 order-md-1" data-aos="fade-up">
                <h3>Global Reach and Impact</h3>
                <p className="fst-italic">
                  As part of the Miracle IT Group, we serve a global clientele with a commitment to quality and excellence.
                </p>
                <p>
                  Our solutions and people drive progress across industries, making a positive impact on businesses and individuals worldwide.
                </p>
              </div>
            </div>{/* Features Item */}
          </div>
        </section>{/* /Details Section */}
        {/* Gallery Section */}
        <section id="gallery" className="gallery section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Gallery</h2>
            <div><span>Check Our</span> <span className="description-title">Gallery</span></div>
          </div>{/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <GallerySlideshow />
          </div>
        </section>{/* /Gallery Section */}
        
        {/* Team Section */}
        <section id="team" className="team section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Team</h2>
            <div><span>Check Our</span> <span className="description-title">Team</span></div>
          </div>{/* End Section Title */}
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="member">
                  <div className="pic"><img src="assets/img/team/team1.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>Prince Jain</h4>
                    <span>CTO</span>
                    <div className="social">    
                      <a href="#!"><i className="bi bi-twitter-x" /></a>
                      <a href="#!"><i className="bi bi-facebook" /></a>
                      <a href="#!"><i className="bi bi-instagram" /></a>
                      <a href="#!"><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                </div>
              </div>{/* End Team Member */}
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <div className="member">
                  <div className="pic"><img src="assets/img/team/team1.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>Taha Ali</h4>
                    <span>Front End developer</span>
                    <div className="social">
                      <a href="#!"><i className="bi bi-twitter-x" /></a>
                      <a href="#!"><i className="bi bi-facebook" /></a>
                      <a href="#!"><i className="bi bi-instagram" /></a>
                      <a href="#!"><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                </div>
              </div>{/* End Team Member */}
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="member">
                  <div className="pic"><img src="assets/img/team/team3.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>Ashutosh Sahu</h4>
                    <span>Front End developer</span>
                    <div className="social">
                      <a href="#!"><i className="bi bi-twitter-x" /></a>
                      <a href="#!"><i className="bi bi-facebook" /></a>
                      <a href="#!"><i className="bi bi-instagram" /></a>
                      <a href="#!"><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                </div>
              </div>{/* End Team Member */}
            </div>
          </div>
        </section>{/* /Team Section */}
        <MOUCarousel />
        {/* Faq Section */}
        <section id="faq" className="faq section light-background">
          <div className="container-fluid">
            <div className="row gy-4">
              <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">
                <div className="content px-xl-5" data-aos="fade-up" data-aos-delay={100}>
                  <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                </div>
                <div className="faq-container px-xl-5" data-aos="fade-up" data-aos-delay={200}>
                  <div className="faq-item faq-active">
                    <i className="faq-icon bi bi-question-circle" />
                    <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                    <div className="faq-content">
                      <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>{/* End Faq item*/}
                  <div className="faq-item">
                    <i className="faq-icon bi bi-question-circle" />
                    <h3>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h3>
                    <div className="faq-content">
                      <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>{/* End Faq item*/}
                  <div className="faq-item">
                    <i className="faq-icon bi bi-question-circle" />
                    <h3>Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
                    <div className="faq-content">
                      <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>{/* End Faq item*/}
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2">
                <img src="assets/img/faq.jpg" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={100} />
              </div>
            </div>
          </div>
        </section>{/* /Faq Section */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <div><span>Check Our</span> <span className="description-title">Contact</span></div>
          </div>{/* End Section Title */}
          <div className="container" data-aos="fade" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={200}>
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>Address</h3>
                    <p>Plot No.80, 3rd Floor, Aakriti Complex, Zone-II, M.P. Nagar, Bhopal - 462011</p>
                  </div>
                </div>{/* End Info Item */}
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
                  <i className="bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Call Us</h3>
                    <p>+91 7566845855</p>
                  </div>
                </div>{/* End Info Item */}
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>Email Us</h3>
                    <p>info@miracleinfoserv.com</p>
                  </div>
                </div>{/* End Info Item */}
              </div>
              <div className="col-lg-8">
                <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay={200}>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 ">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="col-md-12">
                      <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>{/* End Contact Form */}
            </div>
          </div>
        </section>{/* /Contact Section */}
      </main>
      <AboveFooter />
      
      <footer id="footer" className="footer dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Miracle Infosoft</span>
              </a>
              <div className="footer-contact pt-3">
                <p>Plot No.80, 3rd Floor, Aakriti Complex, Zone-II, M.P. Nagar</p>
                <p>Bhopal - 462011</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+91-7880003161</span></p>
                <p><strong>Email:</strong> <span>info@miracleinfoserv.com</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="#!"><i className="bi bi-twitter-x" /></a>
                <a href="https://www.facebook.com/MiracleInfoserv/" target='blank'><i className="bi bi-facebook" /></a>
                <a href="https://www.instagram.com/miracleinfoservofficial/#" target='blank'><i className="bi bi-instagram" /></a>
                <a href="https://in.linkedin.com/company/miracle-infotech-services-pvt-ltd" target='blank'><i className="bi bi-linkedin" /></a>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#features">Services</a></li>
                <li><a href="#!">Terms of service</a></li>
                <li><a href="#!">Privacy policy</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Subsudries</h4>
              <ul>
                <li><a className="" href="https://miracleinfoserv.com " target='blank'>Miracle Infoserv</a></li>
                <li><a aria-current="page" className="active" href="https://miracleinfotech.com/" target='blank'>Miracle Infosoft</a></li>
                <li><a className="" href="https://miracleitindia.com" target='blank'>Miracle IT Career</a></li>
                <li><a aria-current="page" className="active" href="https://miraclefoundationindia.in/" target='blank'>Miracle IT Foundation (CSR)</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <form action="forms/newsletter.php" method="post" className="php-email-form">
                <div className="newsletter-form"><input type="email" name="email" /><input type="submit" defaultValue="Subscribe" /></div>
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
              </form>
            </div>
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">Miracle Infosoft</strong> <span>All Rights Reserved</span></p>
        </div>
      </footer>
      {/* Scroll Top */}
      <a href="#!" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
      {/* Preloader */}
      <div id="preloader" style={{ display: 'none' }} />

      {/* Vendor JS Files */}
      {/* Main JS File */}
    </div>
  );
}

export default App;
