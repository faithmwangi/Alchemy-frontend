import React from 'react';
import HomeCarousel from './Carousel';
import './Home.css';

function Home() {
  return (
    <div>
      <h2 className='top'>A L C H E M Y</h2>
      <h2 className='bottom'>A L C H E M Y</h2>
      <HomeCarousel />
      <h1 className='title-top'>A L C H E M Y</h1>
      <h1 className='title-bottom'>A L C H E M Y</h1>
      <div className='home1'>
        <img
          src="https://i.pinimg.com/564x/3a/f9/87/3af987b322a410aedd021ce716e642d6.jpg"
          alt="Home1"
        />
      </div>
    </div>
  );
}

export default Home;
