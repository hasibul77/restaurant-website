import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PopularFoodCarousel from './components/PopularFoodCarousel';
import BookingForm from './components/BookingForm';
import TestimonialSlider from './components/TestimonialsSlider';
import Footer from './components/Footer';




function App(props) {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <PopularFoodCarousel/>
      <BookingForm/>
      <TestimonialSlider/>
      <Footer/>
    </div>
  );
}

export default App;