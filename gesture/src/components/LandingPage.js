import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import TreeSwingSVG from '../images/landing_page/undraw_Tree_swing_646s.svg';
import logo from '../images/landing_page/Gesture_Logo_05.png';

const LandingPage = () => {

  return(
    <div className="h-screen">
      <div className="h-120p w-64 bg-lightAccent bg-opacity-20 absolute transform rotate-20 -left-9 -top-9"></div>
      <div className="h-120p w-64 bg-lightAccent bg-opacity-20 absolute transform rotate-140 -left-9 -bottom-15"></div>
      <img src={TreeSwingSVG} alt="Tree-Swing" className="absolute top-26 -left-13"/>
      <img src={logo} alt="Gesture logo" className="pt-96 ml-24 w-18"/>
    </div>
  )

}

export default LandingPage;