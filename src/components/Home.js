import React from 'react';
import HomeCarousel from './Carousel';
import './Home.css';

function Home() {
  return (
    <div>
      <h2 className='top'>A L C H E M Y </h2>
      <h2 className='bottom'>A L C H E M Y</h2>
      <HomeCarousel />
      <h1 className='title-top'>A L C H E M Y</h1>
      <h1 className='title-bottom'>A L C H E M Y</h1>
    </div>
  );
}

export default Home;