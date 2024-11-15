import React, { useState } from 'react';
import './../styles/AboutSection.css';
import burgerImage from './../assets/images/aboutImg.png'; // Adjust the path as necessary
import pepperImage from './../assets/images/about_cap.png'; // Adjust the path as necessary

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <>
            <h2>EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.
            </p>
            <button className="about-btn">ABOUT MORE</button>
            <p className="contact-info">📞 +88 3426 739 485</p>
          </>
        );
      case 'experience':
        return <h1> Developed by Md.Hasibul Hossain </h1>;
      case 'contact':
        return <h2>hasibul.himel846@gmail.com</h2>;
      default:
        return null;
    }
  };

  return (
    <section className='about pt-5'>
      <div className='papper'>
        <img src={pepperImage} alt="Pepper" className="img-fluid" />
        </div>
    <div className='container'>
    <div className="about-section">
      <div className="about-left col md-6">
        <img src={burgerImage} alt="Burger and Fries" className="img-fluid" />
        
      </div>
      <div className="about-right col md-6">
        <div className="tabs">
          <span className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>About</span>
          <span className={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>Experience</span>
          <span className={activeTab === 'contact' ? 'active' : ''} onClick={() => setActiveTab('contact')}>Contact</span>
        </div>
        <div className="about-content">
          {renderContent()}
        </div>
      </div>
      <div className="about-icons">
        <div className="container my-5">
      <div className="row text-center d-flex justify-content-around align-items-center">
        
        {/* Fast Delivery */}
        <div className="col-md-3 d-flex">
          <i className="bi bi-box-seam text-danger icon-items" style={{ fontSize: '2rem', marginRight: '15px' }}></i>
          <div>
            <h5 className="item-texts-h">FAST DELIVERY</h5>
            <p className="item-text-p">Within 30 minutes</p>
          </div>
        </div>

        {/* Absolute Dining */}
        <div className="col-md-3 d-flex">
          <i className="bi bi-award text-danger icon-items" style={{ fontSize: '2rem', marginRight: '15px' }}></i>
          <div>
            <h5 className="item-texts-h">ABSOLUTE DINING</h5>
            <p className="item-text-p">Best buffet restaurant</p>
          </div>
        </div>

        {/* Pickup Delivery */}
        <div className="col-md-3 d-flex">
          <i className="bi bi-bag-check text-danger icon-items" style={{ fontSize: '2rem', marginRight: '15px' }}></i>
          <div>
            <h5 className="item-texts-h">PICKUP DELIVERY</h5>
            <p className="item-text-p" >Grab your food order</p>
          </div>
        </div>

      </div>
      </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default AboutSection;
