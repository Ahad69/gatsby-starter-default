import React from 'react';
import '../Banner/Banner.css'

const Carosel = () => {
    return (
        <section className="mt-5 pb-3">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner ">
            <div className="carousel-item  active">
              <div className="row container m-auto">
                <div className="col container  review-item">
                    <div className="star">
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt="" />
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt="" />
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt="" />
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt="" />
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt="" />
                    </div>
                    <div className="content">
                      <h1 className="review">Excellent Customer Service</h1>
                      <p>"Great customer service! Just started using Terminix due to our plague of ants this year. Great rate to get started and excellent customer service from sales to technician! I’ve already passed the word on to my neighbors." <br />
                        —  V.H., from Yelp
                      </p>
                    </div>
               
                </div>
                <div className="col review-item">
                    <div className="star">
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt="" />
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt="" />
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt="" />
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt=""/>
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt=""/>
                    </div>
                    <div className="content">
                      <h1 className="review">Kept All The Bugs Away</h1>
                      <p>"If any [termites] show up, they take care of them and I don’t see the termites again. The techs who arrive have always been professional. They have kept all the bugs away so far."<br />
                        —  V.H., from Yelp</p>
                    </div>
                </div>
            </div>

         </div>
            <div className="carousel-item">
              <div className="row container m-auto">
                <div className="col container  review-item">
                    <div className="star">
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt=""/>
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt=""/>
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt=""/>
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt=""/>
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt=""/>
                    </div>
                    <div className="content">
                      <h1 className="review">Very Kind And Helpful</h1>
                      <p>"Great customer service! Just started using Terminix due to our plague of ants this year. Great rate to get started and excellent customer service from sales to technician! I’ve already passed the word on to my neighbors."<br />
                        —  V.H., from Yelp</p>
                    </div>
               
                </div>
                <div className="col review-item">
                    <div className="star">
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt=""/>
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt=""/>
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt=""/>
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt=""/>
                      <img width="20px" src="https://i.ibb.co/f0HFTG0/yellow-star-no-background-free-star-icon-symbol-cross-star-symbol-transparent-png-2610204-1.png" alt=""/>
                    </div>
                    <div className="content">
                      <h1 className="review">Very polite and wearing a mask</h1>
                      <p>"I told him I work in my garage with the door open and he made sure to get that side of the house thoroughly.” <br />
                        —  V.H., from Yelp</p>
                    </div>
                </div>
            </div>
        
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon  me-5" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon  ms-5" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
      </section>
    );
};

export default Carosel;
