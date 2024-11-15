import React from 'react';
import './../styles/HeroSection.css';
import heroImage from './../assets/images/image 1.png';
import vectorImage from '../assets/images/Vector (1).png'


function HeroSection() {
  return (
    <section className='hero-section pt-5'>
          <div className='vectorImg'>
            <img src= {vectorImage} alt="vector" className="img-fluid" />
          </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 hero-text'>
          <h1>TASTE THE AUTHENTIC <br></br> SAUDI CUISINE</h1>
          <p>Among the best Saudi chefs in the world, serving you something beyond flavor.</p>
           <button className="hero-button">Explore Menu</button>
           <div className='para'>
           </div>
          </div>

          <div className='col-md-6 hero-image'>
          <img src={heroImage} alt="Delicious food" className="img-fluid" />
          </div>
          <div className="offer-badge">
             <span className="offer-text">TODAY<br />OFFER</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
