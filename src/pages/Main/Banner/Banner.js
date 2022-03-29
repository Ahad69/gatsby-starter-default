import React from "react"
import "./Banner.css"

const Banner = () => {

    const handle = () =>{

        const scriptURL =
        "https://script.google.com/macros/s/AKfycbwffzFM1yise-YH63oHFH8MTJCpVAJjWht0X7PbDD5zOPwX8LDCRabJAEfJZ_yknY6lFg/exec"

        fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then(response => console("Success!", response))
        .catch(error => console.error("Error!", error.message))
        .reset()
    }
 


  return (
    <div className="banner">
      <div className="number text-center text-white">
        <h4 className="fw-bold">Start Pest Control for $99*</h4>
        <h1 className="fw-bold">
          <a className="call" href="tel:(888) 888-8888">
            (888) 888-8888
          </a>
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
            <div id="mc_embed_signup">
              <form
                action="https://gmail.us20.list-manage.com/subscribe/post?u=782e39a2407f93d6b8bc19a9c&amp;id=92e5e536c2"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                novalidate
              >
                <input
                  type="text"
                 
                  name="EMAIL"
                  className="required email input"
                  id="mce-EMAIL"
                  placeholder="Email"
                />
                <button  id="submit-button" type="submit">
                  Get My Free Quote
                </button>
              </form>
            </div>
            <script
              type="text/javascript"
              src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
            ></script>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
