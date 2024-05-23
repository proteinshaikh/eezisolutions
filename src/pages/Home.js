import React from 'react';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

const Home = () => (
  <div className="home">
    <h1>Welcome to EEZI Solutions</h1>
    <div className="services">
      <ServiceCard title="AI" description="Solution for your AI needs." />
      <ServiceCard title="Mobile Development" description="Create mobile applications for all platforms." />
      <ServiceCard title="SEO Optimization" description="Improve your search engine rankings." />
    </div>
  </div>
);

export default Home;
