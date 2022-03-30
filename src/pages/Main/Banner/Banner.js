import React, { useState } from "react"
import "./Banner.css"

const Banner = () => {
//   const [email, setEmail] = useState({
//     EMAIL : ""
//   })
// const { EMAIL } = email
//   console.log(email)
// const handleOnChange = (e) =>{
//   setEmail(e.target.value)
// }
  const handle = (e) => {
    // e.preventDefault()
    // try{
    //   const response = fetch('https://script.google.com/macros/s/AKfycbwffzFM1yise-YH63oHFH8MTJCpVAJjWht0X7PbDD5zOPwX8LDCRabJAEfJZ_yknY6lFg/exec' ,{
    //     method: 'POST',
    //     headers : {
    //       'Content-Type' : 'application/json'
    //     },
    //     body : JSON.stringify([email])

    //   })
    //   response.json()
    //   setEmail({...email , email: ""})
    // }
    // catch(err){
    //   console.log(err)
    // }
    

    window.location.href = "https://affij.com/"

    // const scriptURL =
    //   "https://script.google.com/macros/s/AKfycbwffzFM1yise-YH63oHFH8MTJCpVAJjWht0X7PbDD5zOPwX8LDCRabJAEfJZ_yknY6lFg/exec"

    // fetch(scriptURL, { method: "POST", body: new FormData() })
    //   .then(response => console("Success!", response))
    //   .catch(error => console.error("Error!", error.message))
    //   .reset()

  
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
      <div className="poster">
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
                class="validate"
                target="_blank"
                novalidate
              >
                <div class="form-group">
                  <input
                    type="email"
                    name="EMAIL"
                    class="required email"
                    id="mce-EMAIL"
                   
                  />
                  <input
                  onClick={handle}
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                </div>
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
