import React from 'react';
import Slider from 'react-slick';
import CustomPrevArrow from '../components/customArrow/CustomPrevArrow'; 
import CustomNextArrow from '../components/customArrow/CustomNextArrow'; 
import '../styles/TestimonialsSlider.css';
import QuoteIMG from '../assets/images/Quote.png'
import leftPic from '../assets/images/cap.png'
import rightPic from '../assets/images/lm.png'

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomPrevArrow/>,
    prevArrow: <CustomNextArrow/>,
  };

  return (
    <section className='testimonial py-5'>
      <div className='left-pic'>
        <img src={leftPic} alt="leftPic" className="img-fluid"/>
      </div>
      <div className='right-pic'>
      <img src={rightPic} alt="rightPic" className="img-fluid"/>
      </div>
        <div className='container'>
    
    <Slider {...settings}>
      <div className='customers-say'>
      <span class="highlight">• Crispy, Every Bite Taste</span>
        <h1>What Some of my Customers Say</h1>
        <img src= {QuoteIMG} alt="quote" className="img-fluid" />
      </div>

      <div className='customers-say'>
      <span class="highlight">• Crispy, Every Bite Taste</span>
        <h1>What Some of my Customers Say</h1>
        <img src= {QuoteIMG} alt="quote" className="img-fluid" />
      </div>

       <div className='customers-say'>
       <span class="highlight">• Crispy, Every Bite Taste</span>
        <h1>What Some of my Customers Say</h1>
        <img src= {QuoteIMG} alt="quote" className="img-fluid" />
      </div>
    </Slider>
    </div>
    </section>
  );
};

export default TestimonialSlider;
