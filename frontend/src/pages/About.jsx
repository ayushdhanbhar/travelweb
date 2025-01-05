import React from "react";
import '../styles/about.css'
import world2Img from '../assets/images/world2.jpg'
import memorableImg from '../assets/images/memorable.jpg' 
import guideImg from '../assets/images/guide.jpeg'
import Newsletter from '../shared/Newsletter'
const About = () => {
  return (
    <>
       <section className="about-us py-5 bg-light">
            <div className="container text-center">
                <h3 className="mb-4">life is short & the world is wide</h3>
                <p className="lead text-muted">
                    At Wanderlust Adventures, we are passionate about creating unforgettable travel experiences. 
                    Our mission is to connect you with the world’s most beautiful destinations and cultures. 
                    From serene beaches to adventurous hikes, we provide customized travel packages for all.
                </p>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="icon-box mb-3">
                            <img src={world2Img} alt="Global Destinations" className="img-fluid" />
                            <i className="bi bi-globe fs-1 text-primary"></i>
                        </div>
                        <h5>Global Destinations</h5>
                        <p>Explore exotic locations across the globe with us.</p>
                    </div>
                    <div className="col-md-4">
                        <div className="icon-box mb-3">
                            <img src={memorableImg} alt="Memorable Experiences" className="img-fluid" />
                            <i className="bi bi-heart fs-1 text-danger"></i>
                        </div>
                        <h5>Memorable Experiences</h5>
                        <p>Crafting moments you'll cherish forever.</p>
                    </div>
                    <div className="col-md-4">
                        <div className="icon-box mb-3">
                            <img src={guideImg} alt="Expert Guidance" className="img-fluid" />
                            <i className="bi bi-compass fs-1 text-success"></i>
                        </div>
                        <h5>Expert Guidance</h5>
                        <p>Trust our expertise for seamless travel plans.</p>
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
            Wanderlust Adventures started with a simple idea: to make travel accessible and enjoyable for everyone. 
            Over the years, we have grown into a team of dedicated travel enthusiasts who strive to provide the best experiences for our clients.
          </p>
          <p className="text-muted">
            We believe that travel is not just about visiting new places, but about creating memories that last a lifetime. 
            Join us on a journey to discover the wonders of the world.
          </p>
        </div>  
        <div className="col-md-6">
          <div className="video-container">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
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
  <Newsletter/>
  </>
  );
};

export default About;
