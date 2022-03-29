import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
          <div className="number text-center text-white">
            <h4 className="fw-bold">Start Pest Control for $99*</h4>
            <h1 className="fw-bold">
              <a className="call" href="tel:(888) 888-8888">(888) 888-8888</a>
            </h1>
          </div>
          <div className="poster pt-5">
            <div className="container">
              <div className="homeHeading text-center">
                <h1 className="heading text-white">
                  <span>Eliminate</span> Pests Today
                </h1>
                <h1 className="fw-bold text-white">
                  Fast & Relentless Protection You Can Rely On
                </h1>
                <br />
                <div id="form" >
                  <input className="input" type="text" id="input" placeholder="Email" />
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