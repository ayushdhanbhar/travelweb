import React from "react";
import '../styles/about.css'
import world2Img from '../assets/images/world2.jpg'
import memorableImg from '../assets/images/memorable.jpg' 
import guideImg from '../assets/images/guide.jpeg'
import Newsletter from '../shared/Newsletter'
const About = () => {
  return (
    <>
        <section className="mission-vision py-5 bg-white">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-6">
                <h3 className="mb-4">Our Mission</h3>
                <p className="text-muted">
                  Our mission is to inspire and enable people to explore the world, creating unforgettable memories and fostering a deeper understanding of different cultures.
                </p>
              </div>
              <div className="col-md-6">
                <h3 className="mb-4">Our Vision</h3>
                <p className="text-muted">
                  Our vision is to be the leading travel company known for exceptional service, innovative travel solutions, and a commitment to sustainable tourism.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="our-story py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3 className="mb-4">Our Story</h3>
          <p className="text-muted">
          🌍 What started as a small idea has grown into a global mission — to make every trip an adventure to remember.
          💼 Driven by passion and expertise, we’re here to turn your travel dreams into lasting memories!
          </p>
          <p className="text-muted">
          We believe travel isn’t just about visiting new places — it’s about creating memories that last a lifetime. 🌟
          Join us on a journey to explore the wonders of the world and make every moment unforgettable. ✈️
          </p>
        </div>  
        <div className="col-md-6">
          <div className="video-container">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/ufOykYSswCk?si=h6khtGWTZXrrg9Y2" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
        <section className="about-us py-5 bg-light">
            <div className="container text-center">
                <h3 className="mb-4" id="one">life is short & the <span>world is wide</span></h3>
                <p className="lead text-muted">
                    
✨ At Wanderlust Adventures, we turn your travel dreams into unforgettable journeys!
🌍 Our mission is to connect you with breathtaking destinations and rich cultures worldwide.
🏝️ From tranquil beaches to thrilling hikes, we craft personalized travel experiences for every adventurer.
                </p>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="icon-box mb-3">
                            <img src={world2Img} alt="Global Destinations" className="img-fluid img-animate" />
                            <i className="bi bi-globe fs-1 text-primary"></i>
                        </div>
                        <h5>Global Destinations</h5>
                        <p>Explore exotic locations across the globe with us.</p>
                    </div>
                    <div className="col-md-4">
                        <div className="icon-box mb-3">
                            <img src={memorableImg} alt="Memorable Experiences" className="img-fluid img-animate" />
                            <i className="bi bi-heart fs-1 text-danger"></i>
                        </div>
                        <h5>Memorable Experiences</h5>
                        <p>Crafting moments you'll cherish forever.</p>
                    </div>
                    <div className="col-md-4">
                        <div className="icon-box mb-3">
                            <img src={guideImg} alt="Expert Guidance" className="img-fluid img-animate" />
                            <i className="bi bi-compass fs-1 text-success"></i>
                        </div>
                        <h5>Expert Guidance</h5>
                        <p>Trust our expertise for seamless travel plans.</p>
                    </div>
                </div>
            </div>
        </section>
  <Newsletter/>
  </>
  );
};

export default About;
