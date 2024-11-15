import "./App.css";
import "./index.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/image-slider/ImageSlider";
import RandomColor from "./components/random-color/Randomcolor";
import StarRating from "./components/star-rating/StarRating";
import SearchBar from "./components/search-bar/SearchBar";
import Home from "./components/home/Home";
import ThemeToggle from "./components/lightdark-toggle/ThemeToggle";

function App() {
  return (
    <>
    <Router> 
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/accordian" element= { <Accordian />} />
      <Route path="/randomColor" element= { <RandomColor /> } />
      <Route path="/star-rating" element= { <StarRating noOfStars={7}/> } />
      <Route path="/image-slider" element={ <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}   limit={"8"}/> } />
       <Route path="/searchbar" element= { <SearchBar /> } />
       <Route path="/lightdark" element= { <ThemeToggle /> } />


      



      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random Color Generator */}
      {/* <RandomColor/> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={7}/> */}

      {/* Image Slider Component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"8"}
      /> */}
      {/* Search Bar Component */}
     {/* <SearchBar /> */}
     
     </Routes>
     </Router>
    </>
  );
}

export default App;
