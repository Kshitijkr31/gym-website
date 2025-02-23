import { X,Check } from "lucide-react";
import React from "react";
import { Link} from 'react-router-dom';

const Pricing = () => {
  const pricing = [
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCfd4LI4FkO4n52-fXd-CeJw-nnwp-pWnlQ&s.jpg",
      title: "QUARTERLY",
      price: 5000,
      length: 3,
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCfd4LI4FkO4n52-fXd-CeJw-nnwp-pWnlQ&s.jpg",
      title: "SEMI-ANNUAL",
      price: 10000,
      length: 6,
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCfd4LI4FkO4n52-fXd-CeJw-nnwp-pWnlQ&s.jpg",
      title: "ANNUALLY",
      price: 15000,
      length: 12,
    },
  ];


  const renderDescription = (title) => {
    switch (title) {
      case "QUARTERLY":
        return (
          <>
            <p><Check /> Equipment</p>
            <p><Check /> All Day free hour training</p>
            <p><X /> Free Restroom + some snacks</p>
            <p><X /> 24/7 Skilled Support</p>
            <p><X /> 20 Days Freezing option</p>
          </>
        );
      case "SEMI-ANNUAL":
        return (
          <>
            <p><Check /> Equipment</p>
            <p><Check /> All Day free hour training</p>
            <p><Check /> Free Restroom + some snacks</p>
            <p><X /> 24/7 Skilled Support</p>
            <p><X /> 20 Days Freezing option</p>
          </>
        );
      case "ANNUALLY":
        return (
          <>
            <p><Check /> Equipment</p>
            <p><Check /> All Day free hour training</p>
            <p><Check /> Free Restroom + some snacks</p>
            <p><Check /> 24/7 Skilled Support</p>
            <p><Check /> 20 Days Freezing option</p>
          </>
        );
      default:
        return null;
    }
  };


  return (
    <section className='pricing'>
      <h1>FITNESS FACTORY PLANS</h1>
      <div className='wrapper'>
        {pricing.map((element) => {
          return (
            <div className='card' key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>Package</h1>
                <h3>₹ {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                {renderDescription(element.title)}
                <button className="buttons">Join Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
