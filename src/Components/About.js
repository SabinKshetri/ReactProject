
import React from 'react';

import teamImage from '../Assets/image/2.jpg';
const About = () => {
  return (
    <div className="about-container">
      <img src={teamImage} alt="Team" className="team-image" />
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to our website! We are a passionate team dedicated to
          providing high-quality solutions in the world of technology. Our
          mission is to make a positive impact through innovative and creative
          ideas.
        </p>
        <p>
          With a focus on excellence, we strive to deliver products and services
          that meet the needs of our users. Explore our website to learn more
          about what we do and how we can help you.
        </p>
      </div>
    </div>
  );
};

export default About;
