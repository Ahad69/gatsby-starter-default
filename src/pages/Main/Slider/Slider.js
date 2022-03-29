import React from 'react';
import '../Banner/Banner.css'

const Slider = () => {
    return (
        <div>
             <section class="container">
        <div class="row mt-3 container g-4">
          <div class="col">
            <div class="card border-0">
              <img
                src="https://terminix.housemethod.com/wp-content/themes/terminix/images/partners/bbb.jpg"
                class="card-img-top img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div class="col">
            <div class="card border-0">
              <img
                src="https://terminix.housemethod.com/wp-content/themes/terminix/images/rebrand/partners/90-plus-years-experience.jpg"
                class="card-img-top img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div class="col">
            <div class="card border-0">
              <img
                src="https://terminix.housemethod.com/wp-content/themes/terminix/images/rebrand/partners/24-7-support.jpg"
                class="card-img-top img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div class="col">
            <div class="card border-0">
              <img
                src="https://terminix.housemethod.com/wp-content/themes/terminix/images/rebrand/partners/expertly-trained-technicians.jpg"
                class="card-img-top img-fluid"
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