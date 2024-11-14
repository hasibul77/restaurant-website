import React from 'react';
import Slider from 'react-slick';

import '../styles/PopularFoodCarousel.css'; // Import custom styles

import burgerImage from '../assets/images/burger.png';
import pizzaImage from '../assets/images/pizza.png';
import friesImage from '../assets/images/french-fries.png';
import chickenImage from '../assets/images/fried-shrimp.png';
import CustomNextArrow from './customArrow/CustomNextArrow';
import CustomPrevArrow from './customArrow/CustomPrevArrow';

import leftCap from './../assets/images/Frame -3sc.png'

// Food items data
const foodItems = [
  { id: 1, name: 'Vegetables Burger', cuisine: 'Barbecue Italian cuisine pizza', img: burgerImage },
  { id: 2, name: 'Special Pizza', cuisine: 'Barbecue Italian cuisine pizza', img: pizzaImage },
  { id: 3, name: 'Special French Fries', cuisine: 'Barbecue Italian cuisine', img: friesImage },
  { id: 4, name: 'Cuisine Chicken', cuisine: 'Japanese Cuisine Chicken', img: chickenImage },
];

const PopularFoodCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (

    <div className='section food-caro'>
      <div className='left-cap'>
      <img src={leftCap} alt="left-cap" className="img-fluid" />
      </div>
      <div className='container'>
      <div className="popular-food-section">
      <div className="section-header">
        <span className="highlight">• Crispy, Every Bite Taste</span>
        <h2>POPULAR FOOD ITEMS</h2>
      </div>
      <div className="carousel-container">
        
        <Slider {...settings}>
          {foodItems.map((item) => (
            <div key={item.id} className="carousel-item">
              <div className="food-card">
                <img src={item.img} alt={item.name} className="img-fluid" />
                <h4 className="food-name">{item.name}</h4>
                <p className="food-cuisine">{item.cuisine}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
      </div>
    </div>
  
  );
};



export default PopularFoodCarousel;
