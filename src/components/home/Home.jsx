import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>        
        <div className='home-container'>
        <h1 style ={{marginTop: "50px"}}>Welcome to My React Project Hub</h1>
        <Link to="/accordian">
          <button>Accordian App</button>
        </Link>
        <Link to="/randomColor">
          <button>Random Color Generator App</button>
        </Link>
        <Link to="/star-rating">
          <button>Star Rating App</button>
        </Link>
        <Link to="/image-slider">
          <button>Image Carousel</button>
        </Link>
        <Link to="/searchbar">
          <button>Search Filter</button>
        </Link>
        <Link to="/lightdark">
          <button>Light Dark Theme App</button>
        </Link>
        </div>       
  
    </div>
  )
}

export default Home;