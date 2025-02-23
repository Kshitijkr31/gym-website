import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {

  const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');
  
const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
    toast.success(`Welcome, ${name}!`);
  };

  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>Get Fit,</h1>
          <h1>Get Strong,</h1>
          <h1>Get Results</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey start's here</p>
          <p>Unleash your potential</p>
        </div>
        <div className="buttons">
          <button>Start your Journey</button>
          <button>Discover your plan</button>
        </div>
      </div>
      
      {!submittedName && (
        <div className="name-input-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
       <ToastContainer theme='dark' position='top-center' />
    </section>
  )
}

export default Hero
