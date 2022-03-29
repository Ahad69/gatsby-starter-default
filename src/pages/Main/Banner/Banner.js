import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div class="banner">
          <div class="number text-center text-white">
            <h4 class="fw-bold">Start Pest Control for $99*</h4>
            <h1 class="fw-bold">
              <a class="call" href="tel:(888) 888-8888">(888) 888-8888</a>
            </h1>
          </div>
          <div class="poster pt-5">
            <div class="container">
              <div class="homeHeading text-center">
                <h1 class="heading text-white">
                  <span>Eliminate</span> Pests Today
                </h1>
                <h1 class="fw-bold text-white">
                  Fast & Relentless Protection You Can Rely On
                </h1>
                <br />
                <div id="form" >
                  <input class="input" type="text" id="input" placeholder="Email" />
                  <button id="submit-button"   type="submit">
                    Get My Free Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Banner;