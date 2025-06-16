import React from 'react';

function HeroSection() {
  return (
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
  );
}

export default HeroSection;
