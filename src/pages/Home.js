import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../styles/Home.css';

const Home = () => (
  <div className="home">
    <h1>Welcome to EEZI Solutions</h1>
    <div className="services">
      <ServiceCard title="AI" description="Solution for your AI needs." />
      
    </div>
  </div>
);

export default Home;
