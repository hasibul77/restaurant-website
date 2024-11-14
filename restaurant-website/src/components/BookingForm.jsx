import React from 'react';
import '../styles/BookingForm.css';

const BookingForm = () => {
    return (
      <div className="booking-section">
        <div className="booking-form-container">
          <div className="section-header content">
            <span className="highlight">• Book Now</span>
            <h2>BOOK YOUR TABLE</h2>
            <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
          </div>
          <form className="booking-form">
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="text" className="form-control" placeholder="Your Name *" required />
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="date" className="form-control" placeholder="Reservation Date" />
              </div>
              <div className="form-group col-md-6">
                <input type="number" className="form-control" placeholder="Total People" />
              </div>
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="4" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="btn btn-yellow">BOOK NOW</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default BookingForm;