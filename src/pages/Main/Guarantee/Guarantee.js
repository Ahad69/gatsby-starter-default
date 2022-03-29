import React from 'react';
import '../Banner/Banner.css'

const Guarantee = () => {
    return (
        <div>
             <hr className="p-1 hr" />
      <div className="guarantee container">
        <img src="https://i.ibb.co/LJYTV3P/png.png" alt=""/>
        <h3 className="ms-4">Guarantee means you can relax knowing we'll nix your pest problem, and keep it nixed. And if pests come back between treatments, so will we - at no additional cost to you.</h3>
      </div>
      <hr className="p-1 hr" />

      <section>
        <h1 className="fw-bold text-center pt-5">Trust Your Local</h1>
        <div className="local-trust pb-3 container">
          <img src="https://terminix.housemethod.com/wp-content/uploads/2020/07/team-years-rebrand.jpg" alt=""/>
          <div className="container ms-4">
            <p className="local-trust-para">With 10,000+ expertly trained team members nationwide and over 90 years in business, nobody knows pests and termites like Terminix.</p>
            <br />
            <p className="targeted">Terminix® is an industry leader committed to protecting your home against termites and pests with its innovative new technologies. Their team will do whatever it takes to keep pests out, so you can rest easy knowing they’ve got your home covered. For more information, call us at (866) 935-6258.</p>
          </div>
        </div>
      </section>
      <section id="bottom-form">
        <div className="bottom-form text-center">
          <form>
            <input className="input" type="text" placeholder="Email" />
            <button id="submit-button" type="submit">
              Get My Free Quote
            </button>
          </form>
        </div>
      </section>
        </div>
    );
};

export default Guarantee;