import React from 'react';
import '../Banner/Banner.css'

const Slider = () => {
    return (
        <div className="">
        <section className= "container">
        <div className="row mt-3 images container g-4">
          <div className="col">
            <div className="card border-0">
              <img
                src="https://terminix.housemethod.com/wp-content/themes/terminix/images/partners/bbb.jpg"
                className="card-img-top img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img
                src="https://terminix.housemethod.com/wp-content/themes/terminix/images/rebrand/partners/90-plus-years-experience.jpg"
                className="card-img-top img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img
                src="https://terminix.housemethod.com/wp-content/themes/terminix/images/rebrand/partners/24-7-support.jpg"
                className="card-img-top img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img
                src="https://terminix.housemethod.com/wp-content/themes/terminix/images/rebrand/partners/expertly-trained-technicians.jpg"
                className="card-img-top img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Slider;