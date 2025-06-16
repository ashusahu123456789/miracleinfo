import React from 'react';

function AboutSection() {
  return (
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
            </div>
          </div>
        </div>
        <div className="row gy-5 mt-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-image-container">
              <video src="assets/img/mission1.mp4" className="img-fluid rounded mission-video" alt="Our Mission" autoPlay loop muted />
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
              <img src="assets/img/vision2.png" className="img-fluid rounded about-image" alt="Our mission" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
