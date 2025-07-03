import React from 'react';

function FeaturesSection() {
  return (
    <section id="features" className="features section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Technologies</h2>
        <div><span>Our</span> <span className="description-title">Technologies</span></div>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="features-item features-rolling-coina">
              <i className="bi bi-code" style={{ color: '#ffbb2c' }} />
              <h3><a href="#!" className="stretched-link">Web Development</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="features-item features-rolling-coina">
              <i className="bi bi-infinity" style={{ color: '#5578ff' }} />
              <h3><a href="#!" className="stretched-link">Mobile First</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="features-item features-rolling-coina">
              <i className="bi bi-mortarboard" style={{ color: '#e80368' }} />
              <h3><a href="#!" className="stretched-link">Cloud Solutions</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={400}>
            <div className="features-item features-rolling-coina">
              <i className="bi bi-nut" style={{ color: '#e361ff' }} />
              <h3><a href="#!" className="stretched-link">Dedicated Support</a></h3>
            </div>
          </div>{/* End Feature Item */}
          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={500}>
            <div className="features-item features-rolling-coina">
              <i className="bi bi-shuffle" style={{ color: '#47aeff' }} />
              <h3><a href="#!" className="stretched-link">Custom Software</a></h3>
            </div>
          </div>{/* End Feature Item */}
          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={600}>
            <div className="features-item features-rolling-coina">
              <i className="bi bi-star" style={{ color: '#ffa76e' }} />
              <h3><a href="#!" className="stretched-link">IT Training</a></h3>
            </div>
          </div>{/* End Feature Item */}
          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={700}>
            <div className="features-item features-rolling-coina">
              <i className="bi bi-x-diamond" style={{ color: '#11dbcf' }} />
              <h3><a href="#!" className="stretched-link">Upskilling Programs</a></h3>
            </div>
          </div>{/* End Feature Item */}
          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={800}>
            <div className="features-item features-rolling-coina">
              <i className="bi bi-camera-video" style={{ color: '#4233ff' }} />
              <h3><a href="#!" className="stretched-link">Global Clientele</a></h3>
            </div>
          </div>{/* End Feature Item */}
          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={900}>
            <div className="features-item features-rolling-coina">
              <i className="bi bi-command" style={{ color: '#b2904f' }} />
              <h3><a href="#!" className="stretched-link">Talent Development</a></h3>
            </div>
          </div>{/* End Feature Item */}
          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={1000}>
            <div className="features-item features-rolling-coina">
              <i className="bi bi-dribbble" style={{ color: '#b20969' }} />
              <h3><a href="#!" className="stretched-link">Digital Transformation</a></h3>
            </div>
          </div>{/* End Feature Item */}
          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={1100}>
            <div className="features-item features-rolling-coina">
              <i className="bi bi-activity" style={{ color: '#ff5828' }} />
              <h3><a href="#!" className="stretched-link">Impactful Solutions</a></h3>
            </div>
          </div>{/* End Feature Item */}
          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={1200}>
            <div className="features-item features-rolling-coina">
              <i className="bi bi-brightness-high" style={{ color: '#29cc61' }} />
              <h3><a href="#!" className="stretched-link">Future-Ready Talent</a></h3>
            </div>
          </div>{/* End Feature Item */}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
