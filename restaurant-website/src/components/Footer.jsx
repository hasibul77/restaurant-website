import React from 'react';
import './../styles/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>WE READY TO HAVE YOU THE BEST DINING EXPERIENCES</h2>
        <div className="footer-info">
          <div className="footer-item">
            <i className="bi bi-clock icon"></i>
            <h4>OPENING HOURS</h4>
            <p>Monday - Sunday<br />9:00 AM to 11:30 PM</p>
          </div>
          <div className="footer-item">
            <i className="bi bi-telephone icon"></i>
            <h4>LET'S TALK</h4>
            <p>Phone: 1-800-222-4545<br />Fax: 1-800-222-4545</p>
          </div>
          <div className="footer-item">
            <i className="bi bi-envelope icon"></i>
            <h4>BOOK A TABLE</h4>
            <p>Email: demo@website.com<br />Support: support@website.com</p>
          </div>
          <div className="footer-item">
            <i className="bi bi-geo-alt icon"></i>
            <h4>OUR ADDRESS</h4>
            <p>123 Street, New York City, United States Of America</p>
          </div>
        </div>
        <div className="footer-social">
          <div className='icon-box'>
            <i className="bi bi-facebook social-icon"></i></div>
          <div className='icon-box'>
            <i className="bi bi-twitter social-icon"></i></div>
          <div className='icon-box'>
            <i className="bi bi-instagram social-icon"></i></div>
          <div className='icon-box'>
            <i className="bi bi-linkedin social-icon"></i></div>
          
        </div>
        <p className="footer-copyright">© 2023 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
