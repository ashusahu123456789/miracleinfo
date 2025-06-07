import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
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

  return (
    <div className={`${isMobileNavOpen ? 'mobile-nav-active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            <img src="assets/img/logo.png.jpeg" alt="logo" />
            {/* <h1 className="sitename">Bootslander</h1> */}
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Company Profile</a></li>
              <li><a href="#gallery">Clients</a></li>
              <li><a href="#team"></a>Career</li>
              <li><a href="#pricing">Products</a></li>
              <li className="dropdown"><a href="#!"><span>Services</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                <ul>
                  <li><a href="#!">Dropdown 1</a></li>
                  <li className="dropdown"><a href="#!"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                    <ul>
                      <li><a href="#!">Deep Dropdown 1</a></li>
                      <li><a href="#!">Deep Dropdown 2</a></li>
                      <li><a href="#!">Deep Dropdown 3</a></li>
                      <li><a href="#!">Deep Dropdown 4</a></li>
                      <li><a href="#!">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
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
        <main className="main">
          {/* Hero Section */}
          <section id="hero" className="hero section dark-background">
            <div className="container">
              <div className="row gy-4 justify-content-between">
                <div className="col-lg-4 order-lg-last hero-img">
                  <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
                </div>
                <div className="col-lg-6  d-flex flex-column justify-content-center" data-aos="fade-in">
                  <h1>Build Your Landing Page With <span>Bootslander</span></h1>
                  <p>We are team of talented designers making websites with Bootstrap</p>
                  <div className="d-flex">
                    <a href="#about" className="btn-get-started">Get Started</a>
                    <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* /Hero Section */}
          {/* About Section */}
          <section id="about" className="about section light-background">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row align-items-xl-center gy-5">
                <div className="col-xl-5 content">
                  <h3>About Miracle Infosoft</h3>
                  <h2>Innovative Solutions for a Digital World</h2>
                  <p>We are a team of passionate developers and designers dedicated to creating high-quality, modern web applications. Our goal is to help businesses succeed by providing them with the best digital tools and services.</p>
                  <a href="#!" className="read-more"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
                </div>
                <div className="col-xl-7">
                  <div className="row gy-4 icon-boxes">
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
                      <div className="icon-box">
                        <i className="bi bi-gem" />
                        <h3>Web Development</h3>
                        <p>We build responsive and scalable web applications using the latest technologies.</p>
                      </div>
                    </div> {/* End Icon Box */}
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
                      <div className="icon-box">
                        <i className="bi bi-phone" />
                        <h3>Mobile First</h3>
                        <p>Our designs are optimized for all devices, ensuring a seamless user experience.</p>
                      </div>
                    </div> {/* End Icon Box */}
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay={400}>
                      <div className="icon-box">
                        <i className="bi bi-cloud" />
                        <h3>Cloud Solutions</h3>
                        <p>We provide cloud integration and deployment for robust and reliable services.</p>
                      </div>
                    </div> {/* End Icon Box */}
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay={500}>
                      <div className="icon-box">
                        <i className="bi bi-headset" />
                        <h3>Dedicated Support</h3>
                        <p>Our team is always here to help you with any questions or issues you may have.</p>
                      </div>
                    </div> {/* End Icon Box */}
                  </div>
                </div>
              </div>
            </div>
          </section>{/* /About Section */}
          {/* Features Section */}
          <section id="features" className="features section">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={100}>
                  <div className="features-item">
                    <i className="bi bi-eye" style={{color: '#ffbb2c'}} />
                    <h3><a href="#!" className="stretched-link">Lorem Ipsum</a></h3>
                  </div>
                </div>{/* End Feature Item */}
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={200}>
                  <div className="features-item">
                    <i className="bi bi-infinity" style={{color: '#5578ff'}} />
                    <h3><a href="#!" className="stretched-link">Dolor Sitema</a></h3>
                  </div>
                </div>{/* End Feature Item */}
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={300}>
                  <div className="features-item">
                    <i className="bi bi-mortarboard" style={{color: '#e80368'}} />
                    <h3><a href="#!" className="stretched-link">Sed perspiciatis</a></h3>
                  </div>
                </div>{/* End Feature Item */}
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={400}>
                  <div className="features-item">
                    <i className="bi bi-nut" style={{color: '#e361ff'}} />
                    <h3><a href="#!" className="stretched-link">Magni Dolores</a></h3>
                  </div>
                </div>{/* End Feature Item */}
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={500}>
                  <div className="features-item">
                    <i className="bi bi-shuffle" style={{color: '#47aeff'}} />
                    <h3><a href="#!" className="stretched-link">Nemo Enim</a></h3>
                  </div>
                </div>{/* End Feature Item */}
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={600}>
                  <div className="features-item">
                    <i className="bi bi-star" style={{color: '#ffa76e'}} />
                    <h3><a href="#!" className="stretched-link">Eiusmod Tempor</a></h3>
                  </div>
                </div>{/* End Feature Item */}
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={700}>
                  <div className="features-item">
                    <i className="bi bi-x-diamond" style={{color: '#11dbcf'}} />
                    <h3><a href="#!" className="stretched-link">Midela Teren</a></h3>
                  </div>
                </div>{/* End Feature Item */}
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={800}>
                  <div className="features-item">
                    <i className="bi bi-camera-video" style={{color: '#4233ff'}} />
                    <h3><a href="#!" className="stretched-link">Pira Neve</a></h3>
                  </div>
                </div>{/* End Feature Item */}
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={900}>
                  <div className="features-item">
                    <i className="bi bi-command" style={{color: '#b2904f'}} />
                    <h3><a href="#!" className="stretched-link">Dirada Pack</a></h3>
                  </div>
                </div>{/* End Feature Item */}
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={1000}>
                  <div className="features-item">
                    <i className="bi bi-dribbble" style={{color: '#b20969'}} />
                    <h3><a href="#!" className="stretched-link">Moton Ideal</a></h3>
                  </div>
                </div>{/* End Feature Item */}
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={1100}>
                  <div className="features-item">
                    <i className="bi bi-activity" style={{color: '#ff5828'}} />
                    <h3><a href="#!" className="stretched-link">Verdo Park</a></h3>
                  </div>
                </div>{/* End Feature Item */}
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={1200}>
                  <div className="features-item">
                    <i className="bi bi-brightness-high" style={{color: '#29cc61'}} />
                    <h3><a href="#!" className="stretched-link">Flavor Nivelanda</a></h3>
                  </div>
                </div>{/* End Feature Item */}
              </div>
            </div>
          </section>{/* /Features Section */}
          {/* Stats Section */}
          <section id="stats" className="stats section light-background">
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
                  <img src="https://via.placeholder.com/500x400" className="img-fluid" alt="Web Development" />
                </div>
                <div className="col-md-7" data-aos="fade-up" data-aos-delay={100}>
                  <h3>Modern Web Solutions</h3>
                  <p className="fst-italic">
                    We specialize in creating beautiful, functional, and responsive websites that work on any device.
                  </p>
                  <ul>
                    <li><i className="bi bi-check" /><span> Custom web design and development.</span></li>
                    <li><i className="bi bi-check" /> <span>E-commerce and online store solutions.</span></li>
                    <li><i className="bi bi-check" /> <span>Content management systems (CMS).</span></li>
                  </ul>
                </div>
              </div>{/* Features Item */}
              <div className="row gy-4 align-items-center features-item">
                <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
                  <img src="https://via.placeholder.com/500x400" className="img-fluid" alt="Mobile First Design" />
                </div>
                <div className="col-md-7 order-2 order-md-1" data-aos="fade-up" data-aos-delay={200}>
                  <h3>Mobile-First Approach</h3>
                  <p className="fst-italic">
                    In today's mobile world, we ensure your website looks and works perfectly on all screen sizes.
                  </p>
                  <p>
                    Our responsive designs adapt to any device, providing an optimal user experience for everyone.
                  </p>
                </div>
              </div>{/* Features Item */}
              <div className="row gy-4 align-items-center features-item">
                <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out">
                  <img src="https://via.placeholder.com/500x400" className="img-fluid" alt="Cloud Integration" />
                </div>
                <div className="col-md-7" data-aos="fade-up">
                  <h3>Cloud Integration</h3>
                  <p>We leverage the power of the cloud to deliver fast, scalable, and reliable web applications.</p>
                  <ul>
                    <li><i className="bi bi-check" /> <span>Cloud hosting and deployment.</span></li>
                    <li><i className="bi bi-check" /><span> Database management and integration.</span></li>
                    <li><i className="bi bi-check" /> <span>API development and integration.</span></li>
                  </ul>
                </div>
              </div>{/* Features Item */}
              <div className="row gy-4 align-items-center features-item">
                <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out">
                  <img src="https://via.placeholder.com/500x400" className="img-fluid" alt="Dedicated Support" />
                </div>
                <div className="col-md-7 order-2 order-md-1" data-aos="fade-up">
                  <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
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
              <div className="row g-0">
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-1.jpg" className="glightbox" data-gallery="images-gallery">
                      <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>{/* End Gallery Item */}
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-2.jpg" className="glightbox" data-gallery="images-gallery">
                      <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>{/* End Gallery Item */}
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-3.jpg" className="glightbox" data-gallery="images-gallery">
                      <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>{/* End Gallery Item */}
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-4.jpg" className="glightbox" data-gallery="images-gallery">
                      <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>{/* End Gallery Item */}
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-5.jpg" className="glightbox" data-gallery="images-gallery">
                      <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>{/* End Gallery Item */}
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-6.jpg" className="glightbox" data-gallery="images-gallery">
                      <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>{/* End Gallery Item */}
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-7.jpg" className="glightbox" data-gallery="images-gallery">
                      <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>{/* End Gallery Item */}
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-8.jpg" className="glightbox" data-gallery="images-gallery">
                      <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>{/* End Gallery Item */}
              </div>
            </div>
          </section>{/* /Gallery Section */}
          {/* Testimonials Section */}
          <section id="testimonials" className="testimonials section dark-background">
            <img src="assets/img/testimonials-bg.jpg" className="testimonials-bg" alt="" />
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="swiper init-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>{/* End testimonial item */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>{/* End testimonial item */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>{/* End testimonial item */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>{/* End testimonial item */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>{/* End testimonial item */}
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>{/* /Testimonials Section */}
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
                    <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                    <div className="member-info">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
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
                    <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                    <div className="member-info">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
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
                    <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                    <div className="member-info">
                      <h4>William Anderson</h4>
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
              </div>
            </div>
          </section>{/* /Team Section */}
          {/* Pricing Section */}
          <section id="pricing" className="pricing section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Pricing</h2>
              <div><span>Check Our</span> <span className="description-title">Pricing</span></div>
            </div>{/* End Section Title */}
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="pricing-item">
                    <h3>Free Plan</h3>
                    <p className="description">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                    <h4><sup>$</sup>0<span> / month</span></h4>
                    <a href="#!" className="cta-btn">Start a free trial</a>
                    <p className="text-center small">No credit card required</p>
                    <ul>
                      <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
                      <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
                      <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
                      <li className="na"><i className="bi bi-x" /> <span>Pharetra massa massa ultricies</span></li>
                      <li className="na"><i className="bi bi-x" /> <span>Massa ultricies mi quis hendrerit</span></li>
                      <li className="na"><i className="bi bi-x" /> <span>Voluptate id voluptas qui sed aperiam rerum</span></li>
                      <li className="na"><i className="bi bi-x" /> <span>Iure nihil dolores recusandae odit voluptatibus</span></li>
                    </ul>
                  </div>
                </div>{/* End Pricing Item */}
                <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={200}>
                  <div className="pricing-item featured">
                    <p className="popular">Popular</p>
                    <h3>Business Plan</h3>
                    <p className="description">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                    <h4><sup>$</sup>29<span> / month</span></h4>
                    <a href="#!" className="cta-btn">Start a free trial</a>
                    <p className="text-center small">No credit card required</p>
                    <ul>
                      <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
                      <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
                      <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
                      <li><i className="bi bi-check" /> <span>Pharetra massa massa ultricies</span></li>
                      <li><i className="bi bi-check" /> <span>Massa ultricies mi quis hendrerit</span></li>
                      <li><i className="bi bi-check" /> <span>Voluptate id voluptas qui sed aperiam rerum</span></li>
                      <li className="na"><i className="bi bi-x" /> <span>Iure nihil dolores recusandae odit voluptatibus</span></li>
                    </ul>
                  </div>
                </div>{/* End Pricing Item */}
                <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={300}>
                  <div className="pricing-item">
                    <h3>Developer Plan</h3>
                    <p className="description">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                    <h4><sup>$</sup>49<span> / month</span></h4>
                    <a href="#!" className="cta-btn">Start a free trial</a>
                    <p className="text-center small">No credit card required</p>
                    <ul>
                      <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
                      <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
                      <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
                      <li><i className="bi bi-check" /> <span>Pharetra massa massa ultricies</span></li>
                      <li><i className="bi bi-check" /> <span>Massa ultricies mi quis hendrerit</span></li>
                      <li><i className="bi bi-check" /> <span>Voluptate id voluptas qui sed aperiam rerum</span></li>
                      <li><i className="bi bi-check" /> <span>Iure nihil dolores recusandae odit voluptatibus</span></li>
                    </ul>
                  </div>
                </div>{/* End Pricing Item */}
              </div>
            </div>
          </section>{/* /Pricing Section */}
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
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
                    <i className="bi bi-telephone flex-shrink-0" />
                    <div>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
                    <i className="bi bi-envelope flex-shrink-0" />
                    <div>
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
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
        <footer id="footer" className="footer dark-background">
          <div className="container footer-top">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 footer-about">
                <a href="index.html" className="logo d-flex align-items-center">
                  <span className="sitename">Miracle Infotech</span>
                </a>
                <div className="footer-contact pt-3">
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                  <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                  <p><strong>Email:</strong> <span>info@example.com</span></p>
                </div>
                <div className="social-links d-flex mt-4">
                  <a href="#!"><i className="bi bi-twitter-x" /></a>
                  <a href="#!"><i className="bi bi-facebook" /></a>
                  <a href="#!"><i className="bi bi-instagram" /></a>
                  <a href="#!"><i className="bi bi-linkedin" /></a>
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
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#!">Web Design</a></li>
                  <li><a href="#!">Web Development</a></li>
                  <li><a href="#!">Product Management</a></li>
                  <li><a href="#!">Marketing</a></li>
                  <li><a href="#!">Graphic Design</a></li>
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
            <p>© <span>Copyright</span> <strong className="px-1 sitename">Miracle Infotech</strong> <span>All Rights Reserved</span></p>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you've purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
            </div>
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
