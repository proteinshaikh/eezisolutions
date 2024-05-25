import React from 'react';
import '../styles/Services.css';

const Services = () => (
  <div className="services">
    <h1>Our Services</h1>
    <p>We offer a wide range of services to meet your needs.</p>
    <div className="service-list">
      <div className="service-card">
        <h2>Web Development</h2>
        <p>Build modern and responsive websites.</p>
      </div>
      <div className="service-card">
        <h2>Mobile Development</h2>
        <p>Create mobile applications for all platforms.</p>
      </div>
      <div className="service-card">
        <h2>SEO Optimization</h2>
        <p>Improve your search engine rankings.</p>
      </div>
    </div>
  </div>
);

export default Services;
