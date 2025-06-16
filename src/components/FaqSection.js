import React from 'react';

function FaqSection() {
  return (
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
    </section>
  );
}

export default FaqSection;
