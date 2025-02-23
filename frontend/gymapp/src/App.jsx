import React  from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Workoutsessions from './components/Workoutsessions';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Bmicalculator from './components/Bmicalculator';
import Footer from './components/Footer';

const App = () => {

  return (
    <div>
      
      <div className="background-image1">
        <Navbar />
        <Hero />
      </div>
      <div className="background-image2">
        <Workoutsessions />
      </div>
      <Gallery />
      <Pricing />
      <Contact />
      <Bmicalculator />
      <Footer />
    </div>
  );
}

export default App;
