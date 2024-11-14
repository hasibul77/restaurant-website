import React from 'react';
import '../../styles/CustomArrow.css'

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
        <div className="arrows-ne">
          <div className="arrow next-arrow" onClick={onClick}>
             <i className="fas fa-chevron-right"></i>
          </div>
        </div>
  );
};

export default CustomNextArrow;
