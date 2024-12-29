import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about">
        <div className="about-content">
            <h1>About Us</h1>
          <p>
            Welcome to <strong>WanderLust</strong>, your gateway to unforgettable adventures. 
            Our mission is to help you explore the world’s most stunning destinations, experience diverse cultures, 
            and create memories that last a lifetime.
          </p>
          <p>
            From serene beaches and rugged mountains to bustling cities and quiet countryside retreats, 
            our tailored travel solutions cater to every type of traveler.
          </p>
          <p>
            With a commitment to sustainable tourism, we ensure your journeys leave a positive impact on the 
            communities you visit and the planet. Let’s embark on an extraordinary journey together!
          </p>
        </div>
        <div className="about-images">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Mountain Adventure"
            className="about-image"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Beach Escape"
            className="about-image"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="City Exploration"
            className="about-image"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
