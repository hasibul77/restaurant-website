import React from 'react';
import '../../styles/CustomArrow.css'

const  CustomPrevArrow= (props) => {
  const { onClick } = props;
  return (
    
    <div className='arrow-pr'>
     <div className="arrow prev-arrow" onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
     </div>
    </div>
  );
};

export default CustomPrevArrow;
