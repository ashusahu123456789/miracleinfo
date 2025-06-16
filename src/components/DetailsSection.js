import React from 'react';

function DetailsSection() {
  return (
    <section id="details" className="details section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Details</h2>
        <div><span>Check Our</span> <span className="description-title">Details</span></div>
      </div>
      <div className="container">
        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={100}>
            <img src="assets/img/details-1-Photoroom.png" className="img-fluid" alt="Web Development" />
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
        </div>
        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
            <img src="assets/img/details-2-Photoroom.png" className="img-fluid" alt="Mobile First Design" />
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
        </div>
        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out">
            <img src="assets/img/details-3-Photoroom.png" className="img-fluid" alt="Cloud Integration" />
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
        </div>
        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out">
            <img src="assets/img/details-4-Photoroom.png" className="img-fluid" alt="Dedicated Support" />
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
        </div>
      </div>
    </section>
  );
}

export default DetailsSection;
